    'use client';

    import React, { useEffect, useRef } from 'react';
    import { Scene, Physics, Types } from 'phaser';

    

    // Extend Phaser's Sprite to include a health property
    class CustomSprite extends Physics.Arcade.Sprite {
        health: number = 100;
    }

    // Define the custom scene class
    class CustomScene extends Scene {
    player!: CustomSprite;
    enemies!: Phaser.Physics.Arcade.Group;
    bullets!: Phaser.Physics.Arcade.Group;
    cursors!: Types.Input.Keyboard.CursorKeys;

    

    constructor() {
        super({ key: 'CustomScene' });
    }

    preload() {
        this.load.image('player', '/assets/player.png'); 
        this.load.image('enemy', '/assets/enemy.png');
        this.load.image('bullet', '/assets/player.png');
        this.player = this.physics.add.existing(new CustomSprite(this, 400, 300, 'player'));
    }

    create() {
        // Create the player
        this.player = this.physics.add.existing(new CustomSprite(this, 400, 300, 'player')) as CustomSprite;
        this.player.setCollideWorldBounds(true);
        this.player.health = 100;
        this.physics.add.existing(this.player);
        // Create bullet group
        this.bullets = this.physics.add.group();
        // Create enemies group
        this.enemies = this.physics.add.group();
        for (let i = 0; i < 5; i++) {
        const x = Phaser.Math.Between(100, 700);
        const y = Phaser.Math.Between(100, 500);
        const enemy = this.physics.add.sprite(x, y, 'enemy');
        this.enemies.add(enemy);
        }

        // Create bullets group
        this.bullets = this.physics.add.group();

        this.physics.add.collider(this.player, this.enemies, () => {
        console.log('Player hit!');
        this.player.health -= 10; // Decrease health on collision
        if (this.player.health <= 0) { 
            console.log('Game Over!');
            this.gameOver();}
        });

        this.physics.add.collider(this.bullets, this.enemies, (bullet, enemy) => {
        bullet.destroy(); // Remove bullet
        enemy.destroy();  // Remove enemy
        });

        // Set up input controls
        if (this.input?.keyboard) {
        this.cursors = this.input.keyboard.createCursorKeys();
        }
        if (this.input.keyboard) {
        this.input.keyboard.on('keydown-SPACE', this.shootBullet, this);
        }
    }
    gameOver() {
        this.physics.pause();
        this.player.setTint(0xff0000);
        const gameOverText = this.add.text(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        'GAME OVER',
        { fontSize: '64px', color: '#ff0000' }
        );
        gameOverText.setOrigin(0.5);
        this.time.delayedCall(3000, () => {
        this.scene.restart();
        }, [], this);
    }

    update() {
        // Player movement
        this.player.setVelocity(0); // Stop the player by default

        if (this.cursors.left?.isDown) {
        this.player.setVelocityX(-200);
        } else if (this.cursors.right?.isDown) {
        this.player.setVelocityX(200);
        }

        if (this.cursors.up?.isDown) {
        this.player.setVelocityY(-200);
        } else if (this.cursors.down?.isDown) {
        this.player.setVelocityY(200);
        }
    }

    shootBullet() {
        const bullet = this.physics.add.sprite(this.player.x, this.player.y, 'bullet');
        this.bullets.add(bullet);
        bullet.setVelocityY(-400); // Shoot upwards
    }
    }

    // PhaserGame Component
    const PhaserGame: React.FC = () => {
    const gameContainerRef = useRef<HTMLDivElement | null>(null);
    let gameInstance: Phaser.Game | null = null;

    useEffect(() => {
        if (typeof window !== 'undefined' && gameContainerRef.current && !gameInstance) {
            const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: gameContainerRef.current,
            physics: {
                default: 'arcade',
                arcade: {
                gravity: { x: 0, y: 0 },
                debug: true,
                },
            },
            scene: CustomScene,
            };
        
            gameInstance = new Phaser.Game(config);
        
            return () => {
            gameInstance?.destroy(true);
            gameInstance = null;
            };
        }
    }, []);
    

    return <div ref={gameContainerRef} style={{ width: '800px', height: '600px' }} />;
    };

    export default PhaserGame;
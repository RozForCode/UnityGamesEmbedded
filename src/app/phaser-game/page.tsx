'use client';
import PhaserGame from "@/Components/PhaserGame";
import HomeButton from "@/Components/homeButton";

export default function PhaserGamePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <HomeButton />
            <h1 style={{ marginTop: '20px' }}>Phaser Game</h1>
            <p style={{ marginBottom: '20px' }}>This is a simple Phaser game.</p>
            <PhaserGame />
            <p style={{ marginTop: '10px' }}>Use the arrow keys to move and space to shoot!</p>
        </div>
    );
}
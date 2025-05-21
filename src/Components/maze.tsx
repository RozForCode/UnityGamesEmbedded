'use client';
import { useState, useEffect } from 'react';
import styles from './styles/maze.module.css';


export default function MazePage() {
    const rows = 10;
    const cols = 10;

    function generateMaze(): number[][] {
        const maze = Array.from({ length: rows }, () => Array(cols).fill(1));

        // Simple randomized path generator (not a full maze algorithm)
        let x = 0, y = 0;
        maze[y][x] = 0;
        while (x < cols - 1 || y < rows - 1) {
            if (x === cols - 1) y++;
            else if (y === rows - 1) x++;
            // ESLint flags this because ternaries should be used for value-returning expressions — not just logic execution.
            // else Math.random() > 0.5 ? x++ : y++;
            else if (Math.random() > 0.5) x++;
            else y++; 
            maze[y][x] = 0;
        }
        return maze;
        }
    const [maze, setMaze] = useState<number[][]>([]);
    const [playerPos, setPlayerPos] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        setMaze(generateMaze());
    }, []);

    const movePlayer = (dx: number, dy: number) => {
        const [x, y] = playerPos;
        const newX = x + dx;
        const newY = y + dy;
        if (maze[newY]?.[newX] === 0) {
        setPlayerPos([newX, newY]);
        }
    };

    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Maze Game</h1>
        <div className={styles.grid}>
            {maze.map((row, y) =>
            row.map((cell, x) => (
                <div
                key={`${x}-${y}`}
                className={`${styles.cell} ${cell === 1 ? styles.wall : ''} ${
                    playerPos[0] === x && playerPos[1] === y ? styles.player : ''
                }`}
                />
            ))
            )}
        </div>
        <div className={styles.controls}>
            <button onClick={() => movePlayer(0, -1)}>⬆</button>
            <div>
            <button onClick={() => movePlayer(-1, 0)}>⬅</button>
            <button onClick={() => movePlayer(1, 0)}>➡</button>
            </div>
            <button onClick={() => movePlayer(0, 1)}>⬇</button>
        </div>
        </div>
    );
}

// understand this code
// watch youtube video about maze generation

'use client';
import { useEffect, useState } from 'react';
import styles from './styles/memoryGame.module.css';

export default function MemoryGamePage() {
    const gridSize = 4; // 4x4 grid
    const [grid, setGrid] = useState<number[][]>([]);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const nums = Array.from({ length: gridSize * gridSize }, () =>
        Math.floor(Math.random() * 100)
        );
        const chunked = Array.from({ length: gridSize }, (_, i) =>
        nums.slice(i * gridSize, i * gridSize + gridSize)
        );
        setGrid(chunked);

        const timer = setTimeout(() => setVisible(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Memory Game</h1>
        <p className={styles.subtitle}>Memorize the numbers!</p>
        <div className={styles.grid}>
            {grid.flat().map((num, idx) => (
            <div key={idx} className={styles.card}>
                {visible ? num : '?'}
            </div>
            ))}
        </div>
        </div>
    );
}

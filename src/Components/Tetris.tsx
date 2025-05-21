'use client';

import { useEffect, useState } from 'react';
import styles from './styles/tetris.module.css';

const ROWS = 20;
const COLS = 10;

const createEmptyBoard = () => Array.from({ length: ROWS }, () => Array(COLS).fill(0));

export default function Tetris() {
    const [board, setBoard] = useState(createEmptyBoard());

    useEffect(() => {
        const interval = setInterval(() => {
        setBoard(prev => {
            const newBoard = [...prev.slice(1), Array(COLS).fill(0)];
            return newBoard;
        });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Minimal Tetris</h1>
        <div className={styles.board}>
            {board.map((row, i) =>
            row.map((cell, j) => (
                <div key={`${i}-${j}`} className={`${styles.cell} ${cell ? styles.filled : ''}`}></div>
            ))
            )}
        </div>
        </div>
    );
}
// make it functional
'use client';
import Tetris from "@/Components/Tetris";
import HomeButton from "@/Components/homeButton";

export default function TetrisPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <HomeButton />
            <h1 style={{ marginTop: '20px' }}>Tetris Game</h1>
            <p style={{ marginBottom: '20px' }}>Try to clear as many lines as possible!</p>
            <Tetris />
            <p style={{ marginTop: '10px' }}>This game is a classic puzzle game.</p>
            <p style={{ marginTop: '10px' }}>Can you beat your high score?</p>
        </div>
    );
}
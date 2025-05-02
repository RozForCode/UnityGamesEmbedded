'use client';
import MazePage from "@/Components/maze";
import HomeButton from "@/Components/homeButton";

export default function MazeGamePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <HomeButton />
            <h1 style={{ marginTop: '20px' }}>Maze Game</h1>
            <p style={{ marginBottom: '20px' }}>Navigate through the maze!</p>
            <MazePage />
            <p style={{ marginTop: '10px' }}>This game is a fun way to test your navigation skills.</p>
            <p style={{ marginTop: '10px' }}>Can you find your way out?</p>
        </div>
    );
}
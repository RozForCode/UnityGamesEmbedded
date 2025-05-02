'use client';
import MemoryGame from "@/Components/memoryGame";
import HomeButton from "@/Components/homeButton";

export default function MemoryGamePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <HomeButton />
            <h1 style={{ marginTop: '20px' }}>Memory Game</h1>
            <p style={{ marginBottom: '20px' }}>Test your memory skills!</p>
            <MemoryGame />
            <p style={{ marginTop: '10px' }}>This game is a fun way to test your memory.</p>
            <p style={{ marginTop: '10px' }}>Try to remember the positions of the cards!</p>
        </div>
    );
}

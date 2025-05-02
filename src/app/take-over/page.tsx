'use client';

import TakeOver from "@/Components/Take-Over";
import HomeButton from "@/Components/homeButton";

export default function TakeOverPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <HomeButton />
            <h1 style={{ marginTop: '20px' }}>Take Over Game</h1>
            <p style={{ marginBottom: '20px' }}>This is a simple Take Over game.</p>
            <TakeOver />
            <p style={{ marginTop: '10px' }}>Use the arrow keys to move and space to shoot!</p>
        </div>
    );
}
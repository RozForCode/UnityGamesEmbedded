// src/app/word-scramble/page.tsx
'use client';

import WordScrambleGame from '../../Components/WordScrambleGame';
import HomeButton from '@/Components/homeButton';

export default function WordScramblePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <HomeButton />
            <h1 style={{ marginTop: '20px' }}>Word Scramble Game</h1>
            <p style={{ marginBottom: '20px' }}>Unscramble the word!</p>
            <WordScrambleGame />
            <p style={{ marginTop: '10px' }}>This game is a fun way to test your vocabulary skills.</p>
            <p style={{ marginTop: '10px' }}>Try to guess the word as quickly as possible!</p>
        </div>
    );
}

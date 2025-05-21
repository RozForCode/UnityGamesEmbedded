import { useState, useEffect } from 'react';
import styles from './styles/word-scramble.module.css';
const words = ['react', 'javascript', 'nextjs', 'python'];

function shuffle(word: string) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

export default function WordScrambleGame() {
    const [originalWord, setOriginalWord] = useState('');
    const [scrambledWord, setScrambledWord] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    useEffect(() => {
        const word = words[Math.floor(Math.random() * words.length)];
        setOriginalWord(word);
        setScrambledWord(shuffle(word));
    }, []);

    const checkAnswer = () => {
        setIsCorrect(userInput.toLowerCase() === originalWord.toLowerCase());
    };

    return (
        <div className={styles.gameContainer}>
        <h2 className={styles.gameTitle}>Word Scramble</h2>
        <h3>{scrambledWord}</h3>
        <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <button onClick={checkAnswer}>Submit</button>
        {isCorrect !== null && (
            <p>{isCorrect ? 'Correct!' : `Wrong! The word was ${originalWord}`}</p>
        )}
        </div>
    );
}


// increase vocabulary 
// lets your control level of difficulty
// improve UI
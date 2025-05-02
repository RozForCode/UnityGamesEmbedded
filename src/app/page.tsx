'use client';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Head from 'next/head';
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className={styles.ctas}>
          <h2>Play TakeOver!</h2>
          <p>This Unity WebGL game was created with Unity and embedded here using an iframe.</p>

        </div>
        <div>
      <Head>
        <title>My Awesome Game on Next.js</title>
      </Head>

      <main>
        
        <div className={styles.buttonSection}>
          <button className={styles.playButton} onClick={() => router.push('/take-over')}>
            🎮 Play Take Over
          </button>
        </div>
        <div className={styles.buttonSection}>
          <button className={styles.playButton} onClick={() => router.push('/word-scramble')}>
            🎮 Play Word Scramble
          </button>
        </div>
      </main>
    </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

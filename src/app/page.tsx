import Image from "next/image";
import Head from 'next/head';
import styles from "./page.module.css";

export default function Home() {
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
        <h1>Welcome to My Game!</h1>
        <iframe
          src="/Take-Over/index.html" // Path to your local game's HTML file
          width={960} // Adjust as needed
          height={600} // Adjust as needed
          style={{ border: 'none', backgroundColor: 'black' }}
          title="Your Game"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        {/* You can add other elements around your game iframe */}
        <p>Enjoy playing!</p>
      </main>
    </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
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

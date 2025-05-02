'use client';
export default function TakeOver() {
    return (<div>
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
        </div>)
}
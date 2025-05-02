import { useRouter } from "next/navigation";

export default function HomeButton() {
    const router = useRouter();

    return (
        <button
        onClick={() => router.push("/")}
        style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        }}
        >
        Go to Home
        </button>
    );
}
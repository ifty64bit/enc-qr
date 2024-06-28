import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-between p-24">
            <Link
                href="/generate"
                className="text-blue-500 hover:underline hover:text-blue-700 active:text-blue-800 transition duration-150 ease-in-out"
            >
                Generate
            </Link>
            <Link
                href="/scan"
                className="text-blue-500 hover:underline hover:text-blue-700 active:text-blue-800 transition duration-150 ease-in-out"
            >
                Scan
            </Link>
        </div>
    );
}

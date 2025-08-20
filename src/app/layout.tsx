import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
    title: "FIRE Calculator",
    description: "Financial Independence calculator with inflation, dividends and sharing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="flex min-h-dvh flex-col bg-background-surface text-content antialiased">
                <header className="sticky top-0 z-10 flex justify-center bg-background-surface py-4 shadow">
                    <Link href="/" className="inline-flex items-center">
                        <Image src="/next.svg" alt="Next.js logo" width={88} height={20} />
                    </Link>
                </header>
                <main className="flex-1">{children}</main>
            </body>
        </html>
    );
}

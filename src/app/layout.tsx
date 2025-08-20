import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "FIRE Calculator",
    description: "Financial Independence calculator with inflation, dividends and sharing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-dvh bg-background-surface text-content antialiased">{children}</body>
        </html>
    );
}

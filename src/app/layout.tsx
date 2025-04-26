import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "600", "700"], // Add weights you need
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "RS | Portfolio",
    description:
        "Hi, I'm Raphael Salayog! Here's a showcase of projects, skills, and experience, highlighting expertise in web development, design, and modern technologies.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} antialiased`}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}

import MotionProvider from "@/components/MotionProvider";
import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-outfit",
});

const syne = Syne({
    subsets: ["latin"],
    weight: ["600", "700"],
    variable: "--font-syne",
});

export const metadata: Metadata = {
    title: "Raphael Salayog | Frontend-led Full Stack Developer",
    description:
        "Raphael Salayog is a frontend-led Full Stack Developer building fast, functional, and polished digital experiences.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${outfit.variable} ${syne.variable} antialiased`}>
                <MotionProvider>
                    <NavBar />
                    {children}
                </MotionProvider>
            </body>
        </html>
    );
}

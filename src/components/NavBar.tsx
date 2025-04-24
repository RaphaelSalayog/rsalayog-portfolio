"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 w-full flex justify-between py-8 px-14 text-base z-50 ${
                isScrolled && "bg-[#1A191E] shadow-lg"
            }`}
        >
            <Link href={"#home"}>RS</Link>
            <ul className="flex space-x-14">
                <li className="cursor-pointer">
                    <Link href={"#home"}>Home</Link>
                </li>
                <li className="cursor-pointer">
                    <Link href={"#about"}>About</Link>
                </li>
                <li className="cursor-pointer">
                    <Link href={"#project"}>Project</Link>
                </li>
                <li className="cursor-pointer">
                    <Link href={"#contact"}>Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;

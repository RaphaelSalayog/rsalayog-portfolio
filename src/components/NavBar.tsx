"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CustomIcon from "./icons/CustomIcon";

const navList = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "project",
        title: "Project",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
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
            className={`fixed top-0 w-full text-base z-50 transition-all duration-300 ease-in-out ${
                isScrolled && "bg-[#1A191E] shadow-lg"
            }`}
        >
            <div className="md:hidden">
                <div className="flex justify-between items-center py-6 px-10 md:hidden">
                    <Link href={"#home"} className="">
                        RS
                    </Link>
                    <button
                        className="block p-2 rounded-[100%] bg-[#3f3e44]"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <CustomIcon.Menu isOpen={false} className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
                <div
                    className={`absolute top-0 left-0 w-full h-screen py-7 px-14 space-y-10 bg-[#3f3e44] transition-all duration-300 ease-in-out sm:py-10 sm:px-20
                    ${isOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full"}
                `}
                >
                    <div className="flex justify-between items-center">
                        <Link href={"#home"} className="">
                            RS
                        </Link>
                        <button
                            className="block p-2 rounded-[100%] bg-[#3f3e44] md:hidden"
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            <CustomIcon.Menu isOpen={true} className="w-5 h-5" />
                        </button>
                    </div>
                    <ul className="flex items-center max-md:flex-col max-md:space-y-10 md:space-x-14">
                        {navList.map((nav) => (
                            <li key={nav.id} className="cursor-pointer">
                                <Link
                                    href={`#${nav.id}`}
                                    onClick={() => setIsOpen((prev) => !prev)}
                                >
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex justify-between py-8 px-14 max-md:hidden">
                <Link href={"#home"}>RS</Link>
                <ul className="flex space-x-14">
                    {navList.map((nav) => (
                        <li key={nav.id} className="cursor-pointer">
                            <Link href={`#${nav.id}`}>{nav.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;

{
    /* <div
    className={`fixed right-0 w-full h-full py-6 px-10 overflow-hidden z-50 transition-all duration-500 ease-in-out before:absolute before:w-12 before:h-12 before:top-6 before:right-10 before:bg-[#3f3e44] before:rounded-[100%] before:-z-10 before:transition-all before:duration-500 before:ease-in-out ${
        isOpen && "before:scale-[100]"
    }`}
>
    <button
        className="float-right p-2 rounded-[100%] bg-[#3f3e44]"
        onClick={() => setIsOpen((prev) => !prev)}
    >
        <CustomIcon.Menu isOpen={isOpen} />
    </button>
    <ul className="w-full h-full flex flex-col items-center pt-10 space-y-14">
        <li className="cursor-pointer">
            <Link href={"#home"} onClick={() => setIsOpen((prev) => !prev)}>
                Home
            </Link>
        </li>
        <li className="cursor-pointer">
            <Link href={"#about"} onClick={() => setIsOpen((prev) => !prev)}>
                About
            </Link>
        </li>
        <li className="cursor-pointer">
            <Link href={"#project"} onClick={() => setIsOpen((prev) => !prev)}>
                Project
            </Link>
        </li>
        <li className="cursor-pointer">
            <Link href={"#contact"} onClick={() => setIsOpen((prev) => !prev)}>
                Contact
            </Link>
        </li>
    </ul>
</div>; */
}

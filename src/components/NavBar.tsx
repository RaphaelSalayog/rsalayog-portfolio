"use client";

import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
        id: "experience",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const openButtonRef = useRef<HTMLButtonElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections = navList
            .map((item) => document.getElementById(item.id))
            .filter((section): section is HTMLElement => Boolean(section));

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleEntry) setActiveSection(visibleEntry.target.id);
            },
            { rootMargin: "-32% 0px -55%", threshold: [0, 0.25, 0.5] }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
                openButtonRef.current?.focus();
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen]);

    const navLink = (nav: (typeof navList)[number], mobile = false) => (
        <Link
            key={nav.id}
            href={`#${nav.id}`}
            className={mobile ? "mobile-nav-link" : "nav-link"}
            aria-current={activeSection === nav.id ? "location" : undefined}
            onClick={() => mobile && setIsOpen(false)}
        >
            {nav.title}
        </Link>
    );

    return (
        <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
            <div className="nav-shell">
                <Link href="#home" className="brand-mark" aria-label="Raphael Salayog, home">
                    <span>R</span>
                    <span>S</span>
                </Link>

                <nav className="hidden md:block" aria-label="Primary navigation">
                    <ul className="flex items-center gap-7 lg:gap-10">
                        {navList.map((nav) => (
                            <li key={nav.id}>{navLink(nav)}</li>
                        ))}
                    </ul>
                </nav>

                <button
                    ref={openButtonRef}
                    type="button"
                    className="menu-button md:hidden"
                    aria-label="Open navigation"
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsOpen(true)}
                >
                    <CustomIcon.Menu isOpen={false} className="size-5" />
                </button>
            </div>

            <AnimatePresence>
                {isOpen ? (
                    <m.div
                        id="mobile-navigation"
                        className="mobile-nav md:hidden"
                        initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 48px) 48px)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 48px) 48px)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 48px) 48px)" }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center justify-between">
                            <Link
                                href="#home"
                                className="brand-mark"
                                onClick={() => setIsOpen(false)}
                                aria-label="Raphael Salayog, home"
                            >
                                <span>R</span>
                                <span>S</span>
                            </Link>
                            <button
                                ref={closeButtonRef}
                                type="button"
                                className="menu-button"
                                aria-label="Close navigation"
                                onClick={() => {
                                    setIsOpen(false);
                                    openButtonRef.current?.focus();
                                }}
                            >
                                <CustomIcon.Menu isOpen className="size-5" />
                            </button>
                        </div>
                        <nav className="flex flex-1 items-center" aria-label="Mobile navigation">
                            <ul className="w-full space-y-2">
                                {navList.map((nav) => (
                                    <li key={nav.id}>{navLink(nav, true)}</li>
                                ))}
                            </ul>
                        </nav>
                        <p className="text-sm text-moonlight/55">Bulacan, Philippines</p>
                    </m.div>
                ) : null}
            </AnimatePresence>
        </header>
    );
};

export default NavBar;

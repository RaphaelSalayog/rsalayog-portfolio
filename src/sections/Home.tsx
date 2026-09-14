"use client";

import ActionLink from "@/components/ActionLink";
import Moon from "@/components/Moon";
import StarField from "@/components/StarField";
import { m } from "framer-motion";

const heroContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.16 },
    },
};

const heroItem = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const Home = () => {
    return (
        <section id="home" className="hero-section">
            <div className="starfield-layer">
                <StarField />
            </div>
            <div className="hero-orbit" aria-hidden="true" />
            <div className="page-shell relative z-10 flex flex-1 items-center pt-32 sm:pt-36">
                <m.div
                    className="max-w-4xl pb-10 sm:pb-16"
                    variants={heroContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <m.p variants={heroItem} className="hero-intro">
                        Hi, I&apos;m Raphael Salayog.
                    </m.p>
                    <m.h1 variants={heroItem} className="hero-title">
                        Frontend craft with full-stack range.
                    </m.h1>
                    <m.p variants={heroItem} className="hero-role">
                        Frontend-led Full Stack Developer
                    </m.p>
                    <m.p variants={heroItem} className="hero-summary">
                        I transform ideas into fast, functional, and polished digital experiences,
                        combining a frontend specialty with a full-stack perspective.
                    </m.p>
                    <m.div variants={heroItem} className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <ActionLink href="#projects">View selected work</ActionLink>
                        <ActionLink
                            href="https://drive.google.com/file/d/1p-EGgKvtNZqTxMAZf2jKW04h6ZDiMuXC/view?usp=sharing"
                            external
                            variant="secondary"
                        >
                            View résumé
                        </ActionLink>
                    </m.div>
                    <m.div variants={heroItem} className="hero-meta">
                        <span className="hero-meta__dot" aria-hidden="true" />
                        Based in Bulacan, Philippines
                    </m.div>
                </m.div>
            </div>
            <m.div
                className="relative z-0"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
                <Moon />
            </m.div>
        </section>
    );
};

export default Home;

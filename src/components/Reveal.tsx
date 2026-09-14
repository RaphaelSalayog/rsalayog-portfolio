"use client";

import { m } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => {
    return (
        <m.div
            className={className}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </m.div>
    );
};

export default Reveal;

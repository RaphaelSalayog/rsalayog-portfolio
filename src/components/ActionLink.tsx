"use client";

import { m } from "framer-motion";

interface ActionLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    external?: boolean;
    variant?: "primary" | "secondary" | "quiet";
}

const ActionLink = ({
    href,
    children,
    className = "",
    external = false,
    variant = "primary",
}: ActionLinkProps) => {
    return (
        <m.a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={`action-link action-link--${variant} ${className}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
        >
            {children}
        </m.a>
    );
};

export default ActionLink;

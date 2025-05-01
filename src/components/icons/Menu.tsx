import React from "react";

interface MenuProps {
    isOpen: boolean;
    className?: string;
}

const Menu: React.FC<MenuProps> = ({ isOpen, className }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M4 6h16"
                className={`origin-top-left transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "translate-x-1/4 -translate-y-1/10 rotate-45 scale-x-[1.21]"
                        : "translate-y-0 rotate-0"
                }`}
            />
            <path
                d="M4 12h16"
                className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "translate-x-6 opacity-0" : "opacity-100"
                }`}
            />
            <path
                d="M4 18h16"
                className={`origin-bottom-left transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "translate-x-1/4 translate-y-1/10 -rotate-45 scale-x-[1.21]"
                        : "translate-y-0 rotate-0"
                }`}
            />
        </svg>
    );
};

export default Menu;

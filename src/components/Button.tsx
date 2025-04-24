import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer w-full p-2 rounded-lg border border-neutral-600 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;

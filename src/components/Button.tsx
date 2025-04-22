import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, className }) => {
    return (
        <button
            className={`cursor-pointer w-full rounded-full p-2 text-lg border border-neutral-600 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;

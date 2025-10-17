import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    href: string;
}

const Button: React.FC<ButtonProps> = ({ children, href }) => {
    return (
        <a
            href={href}
            className="
        main-action-btn
        flex items-center justify-center
        px-5 h-11 min-w-[120px]
        rounded-full
        font-bold text-base
        bg-[#f04299] text-white
        transition-transform duration-300
        hover:scale-105
      "
        >
            {children}
        </a>
    );
};

export default Button;
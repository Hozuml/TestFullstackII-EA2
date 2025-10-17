// src/components/atoms/Header/Logo.tsx
import React from 'react';

interface LogoProps {
    text: string;
}

const Logo: React.FC<LogoProps> = ({ text }) => {
    return (
        // Añadimos la clase 'logo' al enlace
        <a href="/" className="logo text-2xl font-bold">
            {text}
        </a>
    );
};

export default Logo;
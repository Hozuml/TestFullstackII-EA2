import React from 'react';

interface LogoProps {
    text: string;
}

const Logo: React.FC<LogoProps> = ({ text }) => {
    return (
        <a href="/" className="logo text-2xl font-bold">
            {text}
        </a>
    );
};

export default Logo;
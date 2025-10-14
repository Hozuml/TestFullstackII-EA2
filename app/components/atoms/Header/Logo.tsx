import React from 'react';


interface LogoProps {
    text: string;
}

const Logo: React.FC<LogoProps> = ({ text }) => {
    return (
        <a href="/" className="text-2xl font-bold text-gray-900">
            {text}
        </a>
    );
};

export default Logo;
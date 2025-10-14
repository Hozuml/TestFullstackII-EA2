import React from 'react';

interface NameProps {
    children: React.ReactNode;
}

const Name: React.FC<NameProps> = ({ children }) => {
    return (
        <h1 className="text-4xl font-bold text-gray-900">
            {children}
        </h1>
    );
};

export default Name;
import React from 'react';

interface CareerProps {
    children: React.ReactNode;
}

const Career: React.FC<CareerProps> = ({ children }) => {
    return (
        // Añadimos la clase 'career-subtitle' y quitamos la de color
        <p className="text-lg career-subtitle">
            {children}
        </p>
    );
};

export default Career;
import React from 'react';

interface CareerProps {
    children: React.ReactNode;
}

const Career: React.FC<CareerProps> = ({ children }) => {
    return (
        <p className="text-lg text-primary">
            {children}
        </p>
    );
};

export default Career;
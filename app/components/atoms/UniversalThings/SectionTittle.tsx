import React from 'react';

interface SectionTitleProps {
    children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return (

        <h2 className="text-4xl font-bold text-[#f04299] text-center">
            {children}
        </h2>
    );
};

export default SectionTitle;
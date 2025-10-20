import React from 'react';

interface SectionSubtitleProps {
    icon: React.ReactNode; //Para los iconos del item
    children: React.ReactNode;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({ icon, children }) => {
    return (
        <div className="flex items-center gap-3">
            <span className="text-[#f04299] text-2xl">{icon}</span>
            <h3 className="text-2xl font-bold text-gray-800">{children}</h3>
        </div>
    );
};

export default SectionSubtitle;
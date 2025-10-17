import React from 'react';

interface SkillCardProps {
    icon: React.ReactNode;
    title: string;
    level?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, level }) => {
    return (
        <div className="bg-[#FCEFF5] p-6 rounded-2xl flex flex-col gap-2 text-left">
            <span className="text-[#f04299] text-3xl mb-2">{icon}</span>
            <h4 className="font-bold text-gray-800">{title}</h4>


            {level && (
                <p className="text-gray-500 text-sm">{level}</p>
            )}
        </div>
    );
};

export default SkillCard;
import React from 'react';
import { Card } from 'antd';
import { LaptopOutlined } from '@ant-design/icons';

interface ProjectCardProps {
    title: string;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, onClick }) => {
    return (
        <Card
            hoverable
            onClick={onClick}
            style={{ textAlign: 'center' }}
            styles={{ body: { padding: '24px' } }}
        >
            <LaptopOutlined style={{ fontSize: '48px', color: '#f04299', marginBottom: '16px' }} />
            <div className="font-bold text-lg text-gray-800">{title}</div>
        </Card>
    );
};

export default ProjectCard;
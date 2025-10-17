import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

interface ProjectSubtitleProps {
    children: React.ReactNode;
}

const ProjectSubtitle: React.FC<ProjectSubtitleProps> = ({ children }) => {
    return (
        <Text style={{ fontSize: '1.125rem', color: '#f04299', textAlign: 'center', display: 'block', marginTop: '0.5rem' }}>
            {children}
        </Text>
    );
};

export default ProjectSubtitle;
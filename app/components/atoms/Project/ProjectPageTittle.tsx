import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface ProjectPageTitleProps {
    children: React.ReactNode;
}

const ProjectPageTitle: React.FC<ProjectPageTitleProps> = ({ children }) => {
    return (
        <Title level={1} style={{ textAlign: 'center', fontWeight: 'bold' }}>
            {children}
        </Title>
    );
};

export default ProjectPageTitle;
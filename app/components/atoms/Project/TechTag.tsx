import React from 'react';
import { Tag } from 'antd';

interface TechTagProps {
    children: React.ReactNode;
}

const TechTag: React.FC<TechTagProps> = ({ children }) => {
    return (
        <Tag style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>
            {children}
        </Tag>
    );
};

export default TechTag;
import React from 'react';

interface ProjectPageTitleProps {
    children: React.ReactNode;
}

const ProjectPageTitle: React.FC<ProjectPageTitleProps> = ({ children }) => {
    return (
        // 'h1' es la etiqueta correcta para el título principal de la página.
        <h1 className="text-5xl font-extrabold text-gray-900 text-center">
            {children}
        </h1>
    );
};

export default ProjectPageTitle;
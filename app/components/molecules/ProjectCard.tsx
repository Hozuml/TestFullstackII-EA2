import React from 'react';

interface ProjectCardProps {
    imageUrl: string;      // La imagen del proyecto.
    title: string;         // El título del proyecto.
    description: string;   // Una breve descripción.
    projectUrl: string;    // La URL a la que redirigirá al hacer clic.
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description, projectUrl }) => {
    return (

        <a
            href={projectUrl}
            className="block bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
        >

            <div
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url('${imageUrl}')` }} //Crear logos para proyectos y añadirlos
            ></div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-base">{description}</p>
            </div>

        </a>
    );
};

export default ProjectCard;
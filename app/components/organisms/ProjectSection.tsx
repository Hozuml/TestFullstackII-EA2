import React from 'react';

import ProjectCard from '../molecules/ProjectCard';
import SectionTitle from "../atoms/UniversalThings/SectionTittle";

const ProjectsSection: React.FC = () => {
    return (

        <section id="proyectos" className="py-20 px-4 bg-white">
            <div className="container mx-auto">

                <div className="text-center mb-12">
                    <SectionTitle>Mis Proyectos</SectionTitle>
                </div>

                {/* 'grid-cols-1' para celulares (una columna).
                'md:grid-cols-2' es para tablets y pantallas medianas (dos columnas).
                 */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* Paso 5: Colocamos nuestras moléculas 'ProjectCard' con datos de ejemplo. */}
                    {/* Solo tienes que cambiar los datos de aquí abajo por los de tus proyectos reales. */}
                    <ProjectCard
                        imageUrl="URL_DE_LA_IMAGEN_DE_TU_PROYECTO_1"
                        title="EcoMarket"
                        description="Plataforma e-commerce sostenible"
                        projectUrl="/proyectos/fitness-tracker"

                    />

                    <ProjectCard
                        imageUrl="URL_DE_LA_IMAGEN_DE_TU_PROYECTO_2"
                        title="Base de Datos EcoMarket"
                        description="Una app móvil para registrar actividades físicas con planes de entrenamiento personalizados."
                        projectUrl="/proyectos/fitness-tracker"
                    />

                    <ProjectCard
                        imageUrl="URL_DE_LA_IMAGEN_DE_TU_PROYECTO_3"
                        title="ea1 fullstack"
                        description="Un panel interactivo para visualizar datos de ventas y tendencias del mercado."
                        projectUrl="/proyectos/data-dashboard"
                    />

                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
import React from 'react';
import MainBanner from '~/components/molecules/MainBanner';
import AboutMeSection from '~/components/organisms/AboutMeSection';
import HomeLayout from "~/components/layout/HomeLayout";
import ProjectsSection from "~/components/organisms/ProjectSection";

export function meta() {
    return [{ title: "Camila Soto - Portafolio Profesional" }];
}

export default function Home() {
    return (
        <HomeLayout>
            {/* El 'id' para el enlace de "inicio" */}
            <div id="inicio">
                <MainBanner />
            </div>

            <ProjectsSection />
            <AboutMeSection />
            {/* Aquí iría la futura sección de Contacto con id="contacto" */}
        </HomeLayout>
    );
}
import React from 'react';
import MainBanner from '~/components/molecules/MainBanner';
import AboutMeSection from '~/components/organisms/AboutMeSection';
import HomeLayout from "~/components/layout/HomeLayout";
import ProjectsSection from "~/components/organisms/ProjectSection";
import ContactSection from "~/components/organisms/ContactSection";
import Footer from "~/components/organisms/Footer";

export function meta() {
    return [{ title: "Camila Soto - Portafolio Profesional" }];
}

export default function Home() {
    return (
        <HomeLayout>
            <div id="inicio">
                <MainBanner />
            </div>

            <ProjectsSection />
            <AboutMeSection />
            <ContactSection />
            <Footer />
        </HomeLayout>
    );
}

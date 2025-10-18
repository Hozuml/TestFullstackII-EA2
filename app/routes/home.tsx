import MainBanner from '~/components/molecules/MainBanner';
import AboutMeSection from '~/components/organisms/AboutMeSection';
import ContactSection from '~/components/organisms/ContactSection';
import Footer from '~/components/organisms/Footer';
import HomeLayout from "~/components/layout/HomeLayout";
import ProjectsSection from "~/components/organisms/ProjectSection";

export function meta() {
    return [{ title: "Portafolio - Camila Soto Rojas" }];
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
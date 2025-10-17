import React from 'react';
import { Carousel } from 'antd';
import SectionTitle from "~/components/atoms/UniversalThings/SectionTittle";

const ProjectsSection: React.FC = () => {
    return (
        <section id="portafolio" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl text-center">
                <div className="mb-12">
                    <SectionTitle>Mis Proyectos</SectionTitle>
                </div>

                <Carousel effect="fade" autoplay={true}>

                    {/* --- PRIMER PROYECTO --- */}
                    <div>
                        <a href="/proyectos/e-commerce">

                            <div className="text-gray-800 mt-4">
                                <h3 className="font-bold text-xl">E-commerce Platform</h3>
                                <p>Tienda online para todo tipo de productos naturales, orgánicos y sustentables.</p>
                            </div>
                            <img
                                className="w-full rounded-lg"
                                src="assets/images/carousel/web_ecomarket.png"
                                alt="Primer proyecto"
                            />

                        </a>
                    </div>

                    {/* --- SEGUNDO PROYECTO --- */}
                    <div>
                        <a href="/proyectos/database">

                            <div className="text-gray-800 mt-4">
                                <h3 className="font-bold text-xl">Base de Datos EcoMarket.</h3>
                                <p>Base de Datos para el e-commerce de EcoMarket.</p>
                            </div>
                            <img
                                className="w-full rounded-lg"
                                src="assets/images/carousel/database_ecomarket.png"
                                alt="Segundo proyecto"
                            />

                        </a>
                    </div>

                    {/* --- TERCER PROYECTO --- */}
                    <div>
                        <a href="/proyectos/organic-store">

                            <div className="text-gray-800 mt-4">
                                <h3 className="font-bold text-xl">Huerto Hogar</h3>
                                <p>Tienda de alimentos organicos y sustentables.</p>
                            </div>
                            <img
                                className="w-full rounded-lg"
                                src="assets/images/carousel/huerto_hogar.png"
                                alt="Tercer proyecto"
                            />
                        </a>
                    </div>

                </Carousel>
            </div>
        </section>
    );
};

export default ProjectsSection;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import SectionTitle from "~/components/atoms/UniversalThings/SectionTittle";

const ProjectsSection: React.FC = () => {
    return (
        <section id="portafolio" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl text-center">
                <div className="mb-12">
                    <SectionTitle>Mis Proyectos</SectionTitle>
                </div>

                <Carousel interval={null} variant="dark" fade>

                    <Carousel.Item>
                        <a href="/proyectos/e-commerce">
                            <img
                                className="d-block w-100 rounded-lg"
                                src="/assets/images/carousel/web_ecomarket.png"
                                alt="Primer proyecto"
                            />
                            <Carousel.Caption className="text-gray-800 position-static">
                                <h3 className="font-bold mt-3">E-commerce Platform</h3>
                                <p>Una plataforma de e-commerce full-stack con autenticación de usuarios e integración de pagos.</p>
                            </Carousel.Caption>
                        </a>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="/proyectos/fitness-tracker">
                            <img
                                className="d-block w-100 rounded-lg"
                                src="/assets/images/carousel/database_ecomarket.png"
                                alt="Segundo proyecto"
                            />
                            <Carousel.Caption className="text-gray-800 position-static">
                                <h3 className="font-bold mt-3">Mobile Fitness Tracker</h3>
                                <p>Una app móvil para registrar actividades físicas con planes de entrenamiento personalizados.</p>
                            </Carousel.Caption>
                        </a>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="/proyectos/data-dashboard">
                            <img
                                className="d-block w-100 rounded-lg"
                                src="/assets/images/carousel/huerto_hogar.png"
                                alt="Tercer proyecto"
                            />
                            <Carousel.Caption className="text-gray-800 position-static">
                                <h3 className="font-bold mt-3">Data Visualization Dashboard</h3>
                                <p>Un panel interactivo para visualizar datos de ventas y tendencias del mercado.</p>
                            </Carousel.Caption>
                        </a>
                    </Carousel.Item>

                </Carousel>
            </div>
        </section>
    );
};

export default ProjectsSection;
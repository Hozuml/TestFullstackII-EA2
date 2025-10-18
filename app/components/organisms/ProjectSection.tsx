import React, { useState } from 'react';
import { Modal, Button, Typography, Image, Tag, Space, Row, Col, Carousel } from 'antd';
import ProjectCard from '../molecules/ProjectCard';
import SectionTitle from "~/components/atoms/UniversalThings/SectionTittle";
import TechTag from "~/components/atoms/Project/TechTag";

const { Paragraph, Text, Title } = Typography;

interface ProjectData {
    id: number;
    title: string;
    description: string;
    longDescription?: string;
    gallery: string[];
    technologies?: string[];
}

const projects: ProjectData[] = [
    {
        id: 1,
        title: "EcoMarket",
        description: "E-commerce \"EcoMarket\": portal de clientes con autenticación y panel admin para gestión de productos y tiendas.",
        longDescription: "Plataforma e-commerce \"EcoMarket\", implementando una interfaz web para clientes con navegación por Productos, Tiendas y Pedidos, además de autenticación de usuarios. El backend, desarrollado en Java, expone una API RESTful que gestiona la lógica de negocio y se comunica con una base de datos H2. Incluye un robusto sistema de gestión interna con funcionalidades administrativas para realizar operaciones CRUD completas sobre Productos (agregar, buscar, visualizar con precio y gestión de stock) y Tiendas (agregar, visualizar detalles de ubicación). Diseñada para la administración eficiente del catálogo, inventario, ubicaciones y cuentas de usuario.",
        gallery: [
            "assets/images/carousel/web_ecomarket.png",
            "assets/images/ecomarket_project/home_ecomarket.png",
            "assets/images/ecomarket_project/login_ecomarket.png",
            "assets/images/ecomarket_project/product_ecomarket.png"
        ],
        technologies: ["Java", "API RESTful", "H2 Database", "Spring Boot", "HTML", "CSS","Maven", "Git"]
    },
    {
        id: 2,
        title: "Base de Datos EcoMarket",
        description: "E-commerce \"EcoMarket\" con gestión avanzada de inventario multi-tienda mediante Oracle Database y PL/SQL",
        longDescription: "La plataforma cuenta con una interfaz web funcional para clientes (con navegación por Productos, Tiendas, Pedidos y autenticación de usuarios) y un panel administrativo para operaciones CRUD (productos, tiendas, usuarios), cuyo funcionamiento se basa en la lógica de negocio implementada en el backend. Destaca un proceso automatizado en PL/SQL para la gestión avanzada del inventario: utiliza cursores para recorrer datos de tiendas, inventario y productos, y records para estructurar la información. Este proceso genera reportes de stock por tienda, clasifica el estado de cada producto ('SIN STOCK', 'BAJO', 'OK') basado en umbrales configurables por tienda, y calcula sugerencias de reposición para minimizar quiebres de stock. El sistema incluye manejo de excepciones (como VALUE_ERROR, DUP_VAL_ON_INDEX, OTHERS) para robustez.",
        gallery: [
            "assets/images/carousel/database_ecomarket.png",
            "assets/images/ecomarket_database/data_table.png",
            "assets/images/ecomarket_database/loop.png",
            "assets/images/ecomarket_database/math_operations.png"
        ],
        technologies: ["Oracle Database","Oracle SQL Developer Data Modeler","PL/SQL","Oracle SQL Developer"]
    },
    {
        id: 3,
        title: "Tienda Huerto Hogar",
        description: "Tienda online \"Huerto Hogar\" con catálogo de productos y panel de control administrativo.",
        longDescription: "Plataforma e-commerce para \"Huerto Hogar\", tienda online chilena de productos orgánicos. Implementa una interfaz web para clientes que permite explorar el catálogo y gestionar un carrito de compras. Incluye un sistema de gestión interna (backend) con panel de administración que permite realizar operaciones CRUD sobre productos (incluyendo gestión de stock y categorías) y usuarios (con administración de roles y datos). La aplicación fue desarrollada para optimizar tanto la experiencia de compra como la administración logística de la tienda.",
        gallery: [
            "assets/images/carousel/huerto_hogar.png",
            "assets/images/huertohogar-project/home-huertohogar.png",
            "assets/images/huertohogar-project/adminproduct-huertohogar.png",
            "assets/images/huertohogar-project/contact-huertohogar.png",
            "assets/images/huertohogar-project/adminusers-huertohogar.png"
        ],
        technologies: ["JavaScript","H2 Database","HTML","CSS"]
    },
];

const ProjectsSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    const showModal = (project: ProjectData) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <section id="portafolio" className="py-20 px-4 ">
            <div className="container mx-auto max-w-4xl text-center">
                <div className="mb-12">
                    <SectionTitle>Mis Proyectos</SectionTitle>
                </div>

                <Row gutter={[24, 24]} justify="center">
                    {projects.map((project) => (
                        <Col key={project.id} xs={24} sm={12} md={8}>
                            <ProjectCard
                                title={project.title}
                                onClick={() => showModal(project)}
                            />
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Modal */}
            <Modal
                title={
                    <Title level={3} style={{ color: '#f04299', textAlign: 'center', marginBottom: '1.5rem' }}>
                        {selectedProject?.title}
                    </Title>
                }
                open={isModalOpen}
                onCancel={handleCancel}
                footer={[ <div key="footer-wrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Button
                        key="back"
                        onClick={handleCancel}
                        size="large"
                        style={{
                            backgroundColor: '#f04299',
                            borderColor: '#f04299',
                            color: 'white',
                            paddingLeft: '2rem',
                            paddingRight: '2rem',
                            height: 'auto'
                        }}
                    >
                        Cerrar
                    </Button>
                </div>
                ]}
                width={800}
            >
                {selectedProject && (
                    <>

                        {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                            <Carousel
                                effect="fade"
                                autoplay
                                dots={true}
                                style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}
                            >
                                {selectedProject.gallery.map((imgUrl, index) => (
                                    <div key={index}>
                                        <Image
                                            width="100%"
                                            src={imgUrl}
                                            alt={`${selectedProject.title} - Imagen ${index + 1}`}
                                            style={{ borderRadius: '8px', objectFit: 'contain', maxHeight: '400px' }}
                                            preview={false}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        )}

                        {/* Título "Descripción" en Rosa */}
                        <Title level={4} style={{ color: '#f04299' }}>Descripción</Title>
                        <Paragraph>{selectedProject.longDescription}</Paragraph>

                        {selectedProject.technologies && (
                            <div style={{ marginTop: '1rem' }}>
                                {/* Título "Tecnologías Utilizadas" en Rosa */}
                                <Title level={4} style={{ color: '#f04299' }}>Tecnologías Utilizadas</Title>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <Space size={[0, 8]} wrap>
                                        {selectedProject.technologies.map(tech => (
                                            <TechTag key={tech}>{tech}</TechTag>
                                        ))}
                                    </Space>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </Modal>
        </section>
    );
};

export default ProjectsSection;
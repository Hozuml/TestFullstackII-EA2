import React from 'react';

import { Form, Button } from 'react-bootstrap';
import SectionTitle from "~/components/atoms/UniversalThings/SectionTittle";

const ContactSection: React.FC = () => {
    return (
        <section id="contacto" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-2xl text-center">

                {/* --- Título y Subtítulo --- */}
                <div className="mb-12">
                    <SectionTitle>Contacto</SectionTitle>
                    <p className="text-[#f04299] mt-2">En caso de tener dudas o estar interesado!</p>
                </div>

                {/* --- Formulario de Contacto --- */}
                <Form>
                    <Form.Group className="mb-3 text-start" controlId="formGroupName">
                        <Form.Control type="text" placeholder="Nombre completo" className="rounded-md p-3" />
                    </Form.Group>

                    <Form.Group className="mb-3 text-start" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Correo Electrónico" className="rounded-md p-3" />
                    </Form.Group>

                    <Form.Group className="mb-3 text-start" controlId="formGroupSubject">
                        <Form.Control type="text" placeholder="Asunto" className="rounded-md p-3" />
                    </Form.Group>

                    <Form.Group className="mb-4 text-start" controlId="formGroupMessage">
                        <Form.Control as="textarea" rows={5} placeholder="Tu mensaje" className="rounded-md p-3" />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        className="w-100 rounded-lg py-3 fw-bold"
                        style={{ backgroundColor: '#f04299', borderColor: '#f04299', fontSize: '1rem' }}
                    >
                        Enviar Mensaje
                    </Button>
                </Form>

                {/* --- Texto Alternativo --- */}
                <p className="mt-8 text-gray-500">
                    O contáctame directamente a: <a href="mailto:camilasotorojas77@gmail.com" className="text-[#f04299] font-medium">sophia.tech@email.com</a>
                </p>

            </div>
        </section>
    );
};

export default ContactSection;
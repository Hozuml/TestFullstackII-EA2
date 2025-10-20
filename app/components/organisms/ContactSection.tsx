import React from 'react';
import { Form, Button, Input } from 'antd';
import SectionTitle from "~/components/atoms/UniversalThings/SectionTittle";

const { TextArea } = Input;

const ContactSection: React.FC = () => {
    return (
        <section id="contacto" className="py-20 px-4 ">
            <div className="container mx-auto max-w-2xl text-center">

                <div className="mb-12">
                    <SectionTitle>Contacto</SectionTitle>
                    <p className="text-[#f04299] mt-2">¡En caso de tener dudas o estar interesado!</p>
                </div>

                {/* --- Formulario de Contacto --- */}
                <Form layout="vertical">
                    <Form.Item name="name">
                        <Input placeholder="Nombre completo" size="large" />
                    </Form.Item>

                    <Form.Item name="email">
                        <Input type="email" placeholder="Correo Electrónico" size="large" />
                    </Form.Item>

                    <Form.Item name="subject">
                        <Input placeholder="Asunto" size="large" />
                    </Form.Item>

                    <Form.Item name="message">
                        <TextArea rows={5} placeholder="Tu mensaje" />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            block
                            style={{ backgroundColor: '#f04299', height: 'auto', padding: '0.75rem 0', fontWeight: 'bold' }}
                        >
                            Enviar Mensaje
                        </Button>
                    </Form.Item>
                </Form>


                <p className="mt-8 text-gray-500">
                    O contáctame directamente a: <a href="mailto:camilasotorojas77@gmail.com" className="text-[#f04299] font-medium">camilasotorojas77@gmail.com</a>
                </p>

            </div>
        </section>
    );
};

export default ContactSection;
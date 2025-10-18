import React from 'react';
import { Button, Space, Flex, Typography, Avatar } from 'antd';

const { Title, Text } = Typography;

const MainBanner: React.FC = () => {
    return (
        <Flex
            justify="center"
            align="center"
            style={{ minHeight: '100vh', paddingTop: '5rem', padding: '1rem' }}
        >
            <Flex
                vertical
                align="center"
                style={{ maxWidth: '32rem', textAlign: 'center' }}
            >

                <Avatar
                    size={160}
                    src="assets/images/avatar/yo2.jpg"
                />

                <Space direction="vertical" size="middle" style={{ marginTop: '2rem' }}>

                    <Title level={1} style={{ marginBottom: 0 }}>Camila Soto Rojas</Title>
                    <Text style={{ fontSize: '1.125rem', color: '#f04299' }}>
                        Estudiante de Ingeniería en Informática
                    </Text>

                    <Text type="secondary" style={{ marginTop: '1rem', maxWidth: '28rem' }}>
                        Estudiante de Ingeniería en Informática en Duoc UC, San Joaquín, especializándome en el desarrollo de software y la gestión de bases de datos. Me apasiona transformar ideas en soluciones tecnológicas robustas y eficientes.
                    </Text>

                    <Space direction="horizontal" size="large" wrap style={{ marginTop: '1rem' }}>
                        <Button
                            type="primary"
                            size="large"
                            href="#portafolio"
                            style={{ borderRadius: '9999px', fontWeight: 'bold', padding: '0 2rem', background: '#f04299' }}
                        >
                            Ver Portafolio
                        </Button>
                        <Button
                            size="large"
                            href="#contacto"
                            style={{ borderRadius: '9999px', fontWeight: 'bold', padding: '0 2rem' }}
                        >
                            Contacto
                        </Button>
                    </Space>

                </Space>

            </Flex>
        </Flex>
    );
};

export default MainBanner;
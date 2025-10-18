import React from 'react';
import Logo from '../atoms/Header/Logo';


const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#fceef5] py-6 px-4 sm:px-6 lg:px-8 mt-16">
            <div className="container mx-auto max-w-7xl">
                <hr className="border-t border-gray-300 mb-6"/>

                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">

                    <div className="mb-4 md:mb-0">
                        <div className="flex justify-center md:justify-start text-xl">
                            <Logo text="Camila Soto Rojas" />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            © {currentYear} Camila Soto Rojas. Todos los derechos reservados.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm">
                        <a href="#inicio" className="text-gray-600 hover:text-[#f04299] transition-colors duration-300">
                            Inicio
                        </a>
                        <a href="#proyectos" className="text-gray-600 hover:text-[#f04299] transition-colors duration-300">
                            Proyectos
                        </a>
                        <a href="#sobre-mi" className="text-gray-600 hover:text-[#f04299] transition-colors duration-300">
                            Sobre Mí
                        </a>
                        <a href="#contacto" className="text-gray-600 hover:text-[#f04299] transition-colors duration-300">
                            Contacto
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
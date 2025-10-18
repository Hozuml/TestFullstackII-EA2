import React from 'react';
import Logo from '~/components/atoms/Header/Logo';
import NavBarLinks from '~/components/atoms/Header/NavBarLinks';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-[#f8f6f7]/80 backdrop-blur-sm z-50">
            <div className="container mx-auto h-20 flex items-center justify-between px-4">
                <Logo text="Mi Portafolio" />
                <div className="flex items-center gap-6 main-nav">
                    <NavBarLinks href="#inicio">Inicio</NavBarLinks>
                    <NavBarLinks href="#sobre-mi">Sobre mi</NavBarLinks>
                    <NavBarLinks href="#proyectos">Mis proyectos</NavBarLinks>
                    <NavBarLinks href="#contacto">Contacto</NavBarLinks>
                </div>
            </div>
        </header>
    );
};

export default Header;
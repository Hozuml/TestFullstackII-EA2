import React from 'react';

import Logo from '../atoms/Header/Logo';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#fceef5] py-8 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">

                <div className="mb-4 md:mb-0">
                    <div className="flex justify-center md:justify-start">
                        {/* Reutilizamos el átomo Logo */}
                        <Logo text="Camila Soto Rojas" />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">© 2025 Camila Soto Rojas. Todos los derechos reservados.</p>
                </div>

                <div className="flex gap-6 text-sm">
                    <a href="#" className="text-gray-600 hover:text-[#f04299]">Home</a>
                    <a href="#" className="text-gray-600 hover:text-[#f04299]">Privacy Policy</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
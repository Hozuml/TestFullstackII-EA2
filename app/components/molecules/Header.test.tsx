import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Header from './Header';


vi.mock('../atoms/Header/Logo', () => {
    return {
        default: ({ text }: { text: string }) => <div data-testid="mock-logo">{text}</div>
    };
});

vi.mock('../atoms/Header/NavBarLinks', () => {
    return {
        default: ({ href, children }: { href: string; children: React.ReactNode }) => (
            <a data-testid={`mock-navlink-${href}`} href={href}>
                {children}
            </a>
        )
    };
});



describe('Componente Header', () => {

    it('debería renderizar el componente correctamente', () => {
        render(<Header />);
        const headerElement = screen.getByRole('banner');
        expect(headerElement).toBeInTheDocument();
    });

    it('debería renderizar el Logo simulado con el texto correcto', () => {
        render(<Header />);
        const logoSimulado = screen.getByTestId('mock-logo');
        expect(logoSimulado).toBeInTheDocument();
        expect(logoSimulado).toHaveTextContent('Mi Portafolio');
    });

    it('debería renderizar todos los NavBarLinks simulados con sus props correctas', () => {
        render(<Header />);

        const linkInicio = screen.getByTestId('mock-navlink-#inicio');
        expect(linkInicio).toBeInTheDocument();
        expect(linkInicio).toHaveAttribute('href', '#inicio');
        expect(linkInicio).toHaveTextContent('Inicio');

        const linkSobreMi = screen.getByTestId('mock-navlink-#sobre-mi');
        expect(linkSobreMi).toBeInTheDocument();
        expect(linkSobreMi).toHaveAttribute('href', '#sobre-mi');
        expect(linkSobreMi).toHaveTextContent('Sobre mi');

        const linkProyectos = screen.getByTestId('mock-navlink-#proyectos');
        expect(linkProyectos).toBeInTheDocument();
        expect(linkProyectos).toHaveAttribute('href', '#proyectos');
        expect(linkProyectos).toHaveTextContent('Mis proyectos');

        const linkContacto = screen.getByTestId('mock-navlink-#contacto');
        expect(linkContacto).toBeInTheDocument();
        expect(linkContacto).toHaveAttribute('href', '#contacto');
        expect(linkContacto).toHaveTextContent('Contacto');
    });

    it('debería tener las clases CSS correctas para el estilo y layout', () => {
        const { container } = render(<Header />);
        const headerElement = container.firstChild as HTMLElement;

        expect(headerElement).toHaveClass('fixed', 'top-0', 'left-0', 'w-full');
        expect(headerElement).toHaveClass('bg-[#f8f6f7]/80');
        expect(headerElement).toHaveClass('backdrop-blur-sm');
        expect(headerElement).toHaveClass('z-50');

        const innerDiv = headerElement.querySelector('div');
        expect(innerDiv).toHaveClass('container', 'mx-auto', 'h-20', 'flex', 'items-center', 'justify-between', 'px-4');

        const navDiv = screen.getByTestId('mock-navlink-#inicio').parentElement;
        expect(navDiv).toHaveClass('flex', 'items-center', 'gap-6', 'main-nav');
    });
});
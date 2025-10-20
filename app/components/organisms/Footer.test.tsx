import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Footer from './Footer';


vi.mock('../atoms/Header/Logo', () => {
    return {
        default: ({ text }: { text: string }) => <div data-testid="mock-logo">{text}</div>
    };
});

describe('Componente Footer', () => {

    const textoLogo = 'Camila Soto Rojas';
    const anoActual = new Date().getFullYear();

    beforeEach(() => {
        render(<Footer />);
    });

    it('debería renderizar el elemento footer', () => {
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });

    it('debería renderizar el Logo simulado con el texto correcto', () => {
        // Buscamos el Logo simulado por su data-testid
        const logoSimulado = screen.getByTestId('mock-logo');
        expect(logoSimulado).toBeInTheDocument();
        // Verificamos que tenga el texto esperado
        expect(logoSimulado).toHaveTextContent(textoLogo);
    });

    it('debería renderizar el texto de copyright con el año actual', () => {

        const copyrightText = screen.getByText(`© ${anoActual} ${textoLogo}. Todos los derechos reservados.`);
        expect(copyrightText).toBeInTheDocument();
        expect(copyrightText.tagName).toBe('P');
    });

    it('debería renderizar todos los enlaces de navegación del footer', () => {
        const linkInicio = screen.getByRole('link', { name: 'Inicio' });
        expect(linkInicio).toBeInTheDocument();
        expect(linkInicio).toHaveAttribute('href', '#inicio');

        const linkProyectos = screen.getByRole('link', { name: 'Proyectos' });
        expect(linkProyectos).toBeInTheDocument();
        expect(linkProyectos).toHaveAttribute('href', '#proyectos');

        const linkSobreMi = screen.getByRole('link', { name: 'Sobre Mí' });
        expect(linkSobreMi).toBeInTheDocument();
        expect(linkSobreMi).toHaveAttribute('href', '#sobre-mi');

        const linkContacto = screen.getByRole('link', { name: 'Contacto' });
        expect(linkContacto).toBeInTheDocument();
        expect(linkContacto).toHaveAttribute('href', '#contacto');
    });

    it('debería tener las clases CSS correctas para el estilo', () => {
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toHaveClass('bg-[#fceef5]'); // Color de fondo
        expect(footerElement).toHaveClass('py-6', 'px-4', 'sm:px-6', 'lg:px-8'); // Paddings
        expect(footerElement).toHaveClass('mt-16'); // Margen superior

        const hrElement = footerElement.querySelector('hr');
        expect(hrElement).toBeInTheDocument();
        expect(hrElement).toHaveClass('border-t', 'border-gray-300', 'mb-6');
    });

});
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import NavBarLinks from './NavBarLinks'; // Importa el componente

describe('Componente NavBarLinks', () => {
    // Datos de prueba
    const textoPrueba = 'Inicio';
    const hrefPrueba = '#inicio';

    it('debería renderizar un enlace (<a>)', () => {
        render(<NavBarLinks href={hrefPrueba}>{textoPrueba}</NavBarLinks>);
        const elementoEnlace = screen.getByRole('link');
        expect(elementoEnlace).toBeInTheDocument();
        expect(elementoEnlace.tagName).toBe('A');
    });

    it('debería mostrar el texto pasado como children', () => {
        render(<NavBarLinks href={hrefPrueba}>{textoPrueba}</NavBarLinks>);
        const elementoTexto = screen.getByText(textoPrueba);
        expect(elementoTexto).toBeInTheDocument();
    });

    it('debería tener el atributo href correcto', () => {
        render(<NavBarLinks href={hrefPrueba}>{textoPrueba}</NavBarLinks>);
        const elementoEnlace = screen.getByRole('link');
        expect(elementoEnlace.getAttribute('href')).toBe(hrefPrueba);
    });

    it('debería tener la clase CSS "nav-link"', () => {
        render(<NavBarLinks href={hrefPrueba}>{textoPrueba}</NavBarLinks>);
        const elementoEnlace = screen.getByRole('link');
        expect(elementoEnlace).toHaveClass('nav-link');
    });
});
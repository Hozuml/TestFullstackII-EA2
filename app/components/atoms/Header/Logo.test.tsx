import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Logo from './Logo';

describe('Componente Logo', () => {
    const textoPrueba = 'Mi Portafolio';

    it('debería renderizar un enlace (<a>)', () => {
        render(<Logo text={textoPrueba} />);
        const elementoEnlace = screen.getByRole('link');
        expect(elementoEnlace).toBeInTheDocument();
        expect(elementoEnlace.tagName).toBe('A');
    });

    it('debería mostrar el texto pasado como prop', () => {
        render(<Logo text={textoPrueba} />);
        const elementoTexto = screen.getByText(textoPrueba);
        expect(elementoTexto).toBeInTheDocument();
    });

    it('debería tener el atributo href apuntando a la raíz ("/")', () => {
        render(<Logo text={textoPrueba} />);
        const elementoEnlace = screen.getByRole('link');
        expect(elementoEnlace.getAttribute('href')).toBe('/');
    });

    it('debería tener las clases CSS correctas para el estilo', () => {
        render(<Logo text={textoPrueba} />);
        const elementoEnlace = screen.getByRole('link');
        // Verificamos que tenga las clases de Tailwind esperadas
        expect(elementoEnlace).toHaveClass('logo');
        expect(elementoEnlace).toHaveClass('text-2xl');
        expect(elementoEnlace).toHaveClass('font-bold');
    });
});
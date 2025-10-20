import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Name from './Name';

describe('Componente Name', () => {
    const textoPrueba = 'Camila Soto Rojas';

    it('debería renderizar un elemento de título principal (<h1>)', () => {
        render(<Name>{textoPrueba}</Name>);
        const elementoTitulo = screen.getByText(textoPrueba);
        expect(elementoTitulo).toBeInTheDocument();
        expect(elementoTitulo.tagName).toBe('H1');
    });

    it('debería mostrar el texto pasado como children', () => {
        render(<Name>{textoPrueba}</Name>);
        const elementoTexto = screen.getByText(textoPrueba);
        expect(elementoTexto).toBeInTheDocument();
    });

    it('debería tener las clases CSS correctas para el estilo', () => {
        render(<Name>{textoPrueba}</Name>);
        const elementoTitulo = screen.getByText(textoPrueba);
        expect(elementoTitulo).toHaveClass('text-4xl');
        expect(elementoTitulo).toHaveClass('font-bold');
        expect(elementoTitulo).toHaveClass('text-gray-900');
    });
});
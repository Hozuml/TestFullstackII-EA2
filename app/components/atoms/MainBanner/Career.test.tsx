import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Career from './Career';

describe('Componente Career', () => {
    const textoPrueba = 'Estudiante de Ingeniería en Informática';

    it('debería renderizar un elemento de párrafo (<p>)', () => {
        render(<Career>{textoPrueba}</Career>);
        const elementoParrafo = screen.getByText(textoPrueba);
        expect(elementoParrafo).toBeInTheDocument();
        expect(elementoParrafo.tagName).toBe('P');
    });

    it('debería mostrar el texto pasado como children', () => {
        render(<Career>{textoPrueba}</Career>);
        const elementoTexto = screen.getByText(textoPrueba);
        expect(elementoTexto).toBeInTheDocument();
    });

    it('debería tener las clases CSS correctas', () => {
        render(<Career>{textoPrueba}</Career>);
        const elementoParrafo = screen.getByText(textoPrueba);
        expect(elementoParrafo).toHaveClass('text-lg');
        expect(elementoParrafo).toHaveClass('career-subtitle');
    });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import ProjectPageTitle from './ProjectPageTitle';

describe('Componente ProjectPageTitle', () => {

    const textoPrueba = 'Título del Proyecto';

    it('debería renderizar un elemento de título principal (H1)', () => {
        render(<ProjectPageTitle>{textoPrueba}</ProjectPageTitle>);

        const elementoTitulo = screen.getByRole('heading', { level: 1 });

        expect(elementoTitulo).toBeInTheDocument();
        expect(elementoTitulo.tagName).toBe('H1');
    });

    it('debería mostrar el texto pasado como children', () => {
        render(<ProjectPageTitle>{textoPrueba}</ProjectPageTitle>);
        const elementoTexto = screen.getByText(textoPrueba);
        expect(elementoTexto).toBeInTheDocument();
    });

    it('debería tener los estilos en línea correctos', () => {
        render(<ProjectPageTitle>{textoPrueba}</ProjectPageTitle>);

        const elementoTitulo = screen.getByRole('heading', { level: 1 });

        expect(elementoTitulo).toHaveStyle('text-align: center');
        expect(elementoTitulo).toHaveStyle('font-weight: bold');
    });

});
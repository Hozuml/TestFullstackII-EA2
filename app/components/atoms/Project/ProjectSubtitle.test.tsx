import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import ProjectSubtitle from './ProjectSubtitle';

describe('Componente ProjectSubtitle', () => {

    const textoPrueba = 'Este es un subtítulo de prueba';

    it('debería renderizar un elemento de texto (SPAN)', () => {
        render(<ProjectSubtitle>{textoPrueba}</ProjectSubtitle>);


        const elementoTexto = screen.getByText(textoPrueba);

        expect(elementoTexto).toBeInTheDocument();
        expect(elementoTexto.tagName).toBe('SPAN');
    });

    it('debería mostrar el texto pasado como children', () => {
        render(<ProjectSubtitle>{textoPrueba}</ProjectSubtitle>);

        const elementoTexto = screen.getByText(textoPrueba);

        expect(elementoTexto).toBeInTheDocument();
    });

    it('debería tener los estilos en línea correctos', () => {
        render(<ProjectSubtitle>{textoPrueba}</ProjectSubtitle>);

        const elementoTexto = screen.getByText(textoPrueba);


        expect(elementoTexto).toHaveStyle('font-size: 1.125rem');
        expect(elementoTexto).toHaveStyle('color: rgb(240, 66, 153)');
        expect(elementoTexto).toHaveStyle('text-align: center');
        expect(elementoTexto).toHaveStyle('display: block');
        expect(elementoTexto).toHaveStyle('margin-top: 0.5rem');
    });

});
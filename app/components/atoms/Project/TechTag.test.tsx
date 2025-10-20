import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import TechTag from './TechTag';

describe('Componente TechTag', () => {

    const textoPrueba = 'Python';

    it('debería renderizar un elemento (probablemente DIV o SPAN)', () => {
        render(<TechTag>{textoPrueba}</TechTag>);

        const elementoTexto = screen.getByText(textoPrueba);

        expect(elementoTexto).toBeInTheDocument();

    });

    it('debería mostrar el texto pasado como children', () => {
        // Arrange
        render(<TechTag>{textoPrueba}</TechTag>);

        const elementoTexto = screen.getByText(textoPrueba);

        expect(elementoTexto).toBeInTheDocument();
    });


    it('debería tener los estilos en línea correctos', () => {

        const { container } = render(<TechTag>{textoPrueba}</TechTag>);

        const elementoTag = container.querySelector('.ant-tag');

        expect(elementoTag?.getAttribute('style')).toContain('padding');
        expect(elementoTag?.getAttribute('style')).toContain('0.25rem');
        expect(elementoTag?.getAttribute('style')).toContain('0.75rem');

        expect(elementoTag?.getAttribute('style')).toContain('font-size: 0.875rem');
    });

});
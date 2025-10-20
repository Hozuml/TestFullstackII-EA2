import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import ProjectCard from './ProjectCard';
import { LaptopOutlined } from '@ant-design/icons';

vi.mock('@ant-design/icons', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@ant-design/icons')>();
    return {

        LaptopOutlined: () => <span data-testid="mock-laptop-icon" />,
    };
});

describe('Componente ProjectCard', () => {
    const tituloPrueba = 'Mi Proyecto Increíble';
    const mockOnClick = vi.fn();

    beforeEach(() => {
        mockOnClick.mockClear();
        render(<ProjectCard title={tituloPrueba} onClick={mockOnClick} />);
    });

    it('debería renderizar el componente Card de Ant Design', () => {
        // Ant Design Card renderiza como un div con clase 'ant-card'
        const cardElement = screen.getByText(tituloPrueba).closest('.ant-card');
        expect(cardElement).toBeInTheDocument();
    });

    it('debería mostrar el título del proyecto', () => {
        const titleElement = screen.getByText(tituloPrueba);
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveClass('font-bold', 'text-lg', 'text-gray-800');
    });

    it('debería renderizar el icono (simulado)', () => {
        const iconElement = screen.getByTestId('mock-laptop-icon');
        expect(iconElement).toBeInTheDocument();
    });

    it('debería llamar a la función onClick cuando se hace clic en la tarjeta', () => {
        const cardElement = screen.getByText(tituloPrueba).closest('.ant-card');

        if (cardElement) {
            fireEvent.click(cardElement);
        }

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('debería tener los estilos en línea correctos aplicados', () => {
        const cardElement = screen.getByText(tituloPrueba).closest('.ant-card');
        expect(cardElement).toHaveStyle('text-align: center');

    });

});
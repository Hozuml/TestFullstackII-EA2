import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Avatar from './Avatar'; // Importa el componente

describe('Componente Avatar', () => {
    const urlImagenPrueba = 'imagen-de-prueba.jpg';

    it('debería renderizar un div', () => {
        render(<Avatar imageUrl={urlImagenPrueba} />);
        // Usamos data-testid para encontrar el div de forma segura
        const elementoAvatar = screen.getByTestId('avatar-div');
        expect(elementoAvatar).toBeInTheDocument(); // Verifica que el elemento exista
    });

    it('debería aplicar la URL de la imagen como estilo de fondo', () => {
        render(<Avatar imageUrl={urlImagenPrueba} />);
        const elementoAvatar = screen.getByTestId('avatar-div');
        // Verifica que el estilo 'backgroundImage' contenga la URL correcta
        expect(elementoAvatar).toHaveStyle(`background-image: url('${urlImagenPrueba}')`);
    });

    it('debería tener las clases CSS correctas para el estilo y tamaño', () => {
        // Renderizamos y obtenemos el contenedor principal
        const { container } = render(<Avatar imageUrl={urlImagenPrueba} />);
        const elementoAvatar = container.firstChild;

        // Verificamos las clases esenciales de Tailwind
        expect(elementoAvatar).toHaveClass('w-32');
        expect(elementoAvatar).toHaveClass('h-32');
        expect(elementoAvatar).toHaveClass('md:w-40');
        expect(elementoAvatar).toHaveClass('md:h-40');
        expect(elementoAvatar).toHaveClass('rounded-full');
        expect(elementoAvatar).toHaveClass('bg-cover');
        expect(elementoAvatar).toHaveClass('bg-center');
        expect(elementoAvatar).toHaveClass('shadow-md');
    });
});
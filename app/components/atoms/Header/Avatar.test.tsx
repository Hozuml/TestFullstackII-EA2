import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Avatar from './Avatar';

describe('Componente Avatar', () => {
    const urlImagenPrueba = 'imagen-de-prueba.jpg';

    it('debería renderizar un div', () => {
        render(<Avatar imageUrl={urlImagenPrueba} />);
        // Buscamos el div usando su rol implícito cuando tiene imagen de fondo
        // Se usa { hidden: true } porque a veces estos roles no son expuestos a herramientas de accesibilidad
        const elementoAvatar = screen.getByRole('img', { hidden: true });
        expect(elementoAvatar).toBeInTheDocument(); // Verifica que el elemento exista
    });

    it('debería aplicar la URL de la imagen como estilo de fondo', () => {
        render(<Avatar imageUrl={urlImagenPrueba} />);
        const elementoAvatar = screen.getByRole('img', { hidden: true });
        // Verifica que el estilo 'backgroundImage' contenga la URL correcta
        expect(elementoAvatar).toHaveStyle(`background-image: url('${urlImagenPrueba}')`);
    });

    it('debería tener las clases CSS correctas para el estilo y tamaño', () => {
        // Renderizamos y obtenemos el contenedor principal
        const { container } = render(<Avatar imageUrl={urlImagenPrueba} />);
        const elementoAvatar = container.firstChild; // El div principal

        // Verificamos las clases esenciales de Tailwind
        expect(elementoAvatar).toHaveClass('w-32');       // Ancho base
        expect(elementoAvatar).toHaveClass('h-32');       // Alto base
        expect(elementoAvatar).toHaveClass('md:w-40');    // Ancho en pantallas medianas
        expect(elementoAvatar).toHaveClass('md:h-40');    // Alto en pantallas medianas
        expect(elementoAvatar).toHaveClass('rounded-full');// Círculo
        expect(elementoAvatar).toHaveClass('bg-cover');   // Cubrir fondo
        expect(elementoAvatar).toHaveClass('bg-center');  // Centrar fondo
        expect(elementoAvatar).toHaveClass('shadow-md');  // Sombra
    });
});
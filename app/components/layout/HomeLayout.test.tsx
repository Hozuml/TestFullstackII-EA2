import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import HomeLayout from './HomeLayout';


vi.mock('~/components/molecules/Header', () => {
    return { default: (props: any) => <div data-testid="mock-header" {...props}>Header Simulado</div> };
});

describe('Componente HomeLayout', () => {

    const textoChildrenPrueba = 'Contenido Principal de Prueba';

    it('debería renderizar el componente Header (simulado)', () => {
        render(
            <HomeLayout>
                <p>{textoChildrenPrueba}</p>
            </HomeLayout>
        );
        const headerSimulado = screen.getByTestId('mock-header');
        expect(headerSimulado).toBeInTheDocument();
        expect(headerSimulado).toHaveTextContent('Header Simulado');
    });

    it('debería renderizar el contenido (children) dentro de <main>', () => {
        render(
            <HomeLayout>
                <p>{textoChildrenPrueba}</p>
            </HomeLayout>
        );
        const mainElement = screen.getByRole('main');
        const contenidoChildren = screen.getByText(textoChildrenPrueba);
        expect(mainElement).toBeInTheDocument();
        expect(contenidoChildren).toBeInTheDocument();
        expect(mainElement).toContainElement(contenidoChildren);
    });

    it('debería tener las clases CSS correctas en el contenedor principal', () => {
        const { container } = render(
            <HomeLayout>
                <p>{textoChildrenPrueba}</p>
            </HomeLayout>
        );
        const divPrincipal = container.firstChild as HTMLElement;
        expect(divPrincipal).toHaveClass('min-h-screen');
        expect(divPrincipal).toHaveClass('font-display');
    });

});
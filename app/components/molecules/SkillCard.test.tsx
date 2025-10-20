import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import SkillCard from './SkillCard';

const IconoPrueba = () => <span data-testid="mock-icon">Icono</span>;

describe('Componente SkillCard', () => {
    const tituloPrueba = 'Habilidad de Prueba';
    const nivelPrueba = 'Intermedio';

    describe('cuando se proporciona el nivel', () => {
        beforeEach(() => {
            render(
                <SkillCard icon={<IconoPrueba />} title={tituloPrueba} level={nivelPrueba} />
            );
        });

        it('debería renderizar el icono', () => {
            expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
        });

        it('debería renderizar el título', () => {
            expect(screen.getByText(tituloPrueba)).toBeInTheDocument();
        });

        it('debería renderizar el nivel', () => {
            expect(screen.getByText(nivelPrueba)).toBeInTheDocument();
            expect(screen.getByText(nivelPrueba)).toHaveClass('text-gray-500', 'text-sm');
        });

        it('debería tener las clases y estilos correctos en el contenedor', () => {
            const contenedor = screen.getByText(tituloPrueba).closest('div.bg-\\[\\#FCEFF5\\]');
            expect(contenedor).toBeInTheDocument();
            expect(contenedor).toHaveClass('p-6', 'rounded-2xl', 'flex', 'flex-col', 'gap-2', 'text-left');
        });
    });

    describe('cuando NO se proporciona el nivel', () => {
        beforeEach(() => {
            render(
                <SkillCard icon={<IconoPrueba />} title={tituloPrueba} />
            );
        });

        it('debería renderizar el icono y el título', () => {
            expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
            expect(screen.getByText(tituloPrueba)).toBeInTheDocument();
        });

        it('NO debería renderizar el nivel', () => {
            const nivelElemento = screen.queryByText(nivelPrueba);
            expect(nivelElemento).toBeNull();
        });

        it('debería tener las clases y estilos correctos en el contenedor', () => {
            const contenedor = screen.getByText(tituloPrueba).closest('div.bg-\\[\\#FCEFF5\\]');
            expect(contenedor).toBeInTheDocument();
            expect(contenedor).toHaveClass('p-6', 'rounded-2xl', 'flex', 'flex-col', 'gap-2', 'text-left');
        });
    });
});
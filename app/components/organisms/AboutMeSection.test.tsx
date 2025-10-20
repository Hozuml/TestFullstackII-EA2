import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AboutMeSection from './AboutMeSection';


vi.mock('../atoms/UniversalThings/SectionTittle', () => ({
    default: ({ children }: { children: React.ReactNode }) => <h2 data-testid="mock-section-title">{children}</h2>
}));

vi.mock('../atoms/AboutMe/SectionSubtitle', () => ({
    default: ({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) => (
        <div data-testid="mock-section-subtitle">
            <span data-testid="mock-subtitle-icon">{icon}</span>
            <h3>{children}</h3>
        </div>
    )
}));

vi.mock('../molecules/SkillCard', () => ({
    default: ({ title, level }: { title: string, level?: string }) => (
        <div data-testid="mock-skill-card">
            <h4>{title}</h4>
            {level && <p>{level}</p>}
        </div>
    )
}));

describe('Componente AboutMeSection', () => {
    beforeEach(() => {
        render(<AboutMeSection />);
    });

    it('debería renderizar el título principal "Sobre Mí"', () => {
        const titulo = screen.getByTestId('mock-section-title');
        expect(titulo).toBeInTheDocument();
        expect(titulo).toHaveTextContent('Sobre Mí');
    });

    it('debería renderizar el párrafo introductorio', () => {
        const parrafo = screen.getByText(/bla bla bla bla/i);
        expect(parrafo).toBeInTheDocument();
        expect(parrafo.tagName).toBe('P');
    });

    it('debería renderizar el subtítulo "Habilidades y Conocimientos"', () => {
        const subtitulo = screen.getByText('Habilidades y Conocimientos');

        expect(subtitulo.tagName).toBe('H3');
        expect(subtitulo.closest('[data-testid="mock-section-subtitle"]')).toBeInTheDocument();
    });

    it('debería renderizar 6 tarjetas de habilidad', () => {
        // Buscamos todas las tarjetas simuladas
        const skillCards = screen.getAllByTestId('mock-skill-card');
        // Filtramos para contar solo las que están en la sección de Habilidades
        const habilidadCards = skillCards.slice(0, 6);
        expect(habilidadCards).toHaveLength(6);

        // Verificamos el contenido de algunas tarjetas de habilidad
        expect(habilidadCards[0]).toHaveTextContent('Programación (Python, Java)');
        expect(habilidadCards[0]).toHaveTextContent('Intermedio');
        expect(habilidadCards[5]).toHaveTextContent('Comunicación');
        expect(habilidadCards[5]).toHaveTextContent('nosé');
    });

    it('debería renderizar el subtítulo "Intereses"', () => {
        const subtitulo = screen.getByText('Intereses');
        expect(subtitulo.tagName).toBe('H3');
        expect(subtitulo.closest('[data-testid="mock-section-subtitle"]')).toBeInTheDocument();
    });

    it('debería renderizar 3 tarjetas de interés (sin nivel)', () => {
        const skillCards = screen.getAllByTestId('mock-skill-card');
        const interesCards = skillCards.slice(6);
        expect(interesCards).toHaveLength(3);

        expect(interesCards[0]).toHaveTextContent('Desarrollo de Software');
        expect(interesCards[0].querySelector('p')).toBeNull();
    });

});
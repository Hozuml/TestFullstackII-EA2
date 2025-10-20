import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ContactSection from './ContactSection';

vi.mock('../atoms/UniversalThings/SectionTittle', () => ({ // ¿Es "Tittle" o "Title"?
    default: ({ children }: { children: React.ReactNode }) => <h2 data-testid="mock-section-title">{children}</h2>
}));

describe('Componente ContactSection', () => {
    beforeEach(() => {
        render(<ContactSection />);
    });

    it('debería renderizar el título principal "Contacto"', () => {
        // Buscamos el título simulado por su data-testid
        const titulo = screen.getByTestId('mock-section-title'); // Ahora debería encontrarlo
        expect(titulo).toBeInTheDocument();
        expect(titulo).toHaveTextContent('Contacto');
    });

    // ... (El resto de las pruebas para ContactSection se quedan igual) ...

    it('debería renderizar el subtítulo', () => {
        const subtitulo = screen.getByText('¡En caso de tener dudas o estar interesado!');
        expect(subtitulo).toBeInTheDocument();
        expect(subtitulo.tagName).toBe('P');
    });

    it('debería renderizar los campos del formulario con sus placeholders', () => {
        expect(screen.getByPlaceholderText('Nombre completo')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Correo Electrónico')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Asunto')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Tu mensaje')).toBeInTheDocument();
    });

    it('debería renderizar el botón de envío', () => {
        const botonEnviar = screen.getByRole('button', { name: 'Enviar Mensaje' });
        expect(botonEnviar).toBeInTheDocument();
        expect(botonEnviar).toHaveAttribute('type', 'submit');
    });

    it('debería renderizar el texto de contacto alternativo y el enlace de email', () => {
        const textoAlternativo = screen.getByText(/O contáctame directamente a:/i);
        expect(textoAlternativo).toBeInTheDocument();
        const enlaceEmail = screen.getByRole('link', { name: 'camilasotorojas77@gmail.com' });
        expect(enlaceEmail).toBeInTheDocument();
        expect(enlaceEmail).toHaveAttribute('href', 'mailto:camilasotorojas77@gmail.com');
    });
});
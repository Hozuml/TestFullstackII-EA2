import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Importa el componente que vamos a probar
import MainBanner from './MainBanner';

// 'describe' agrupa las pruebas para este componente
describe('Componente MainBanner', () => {

    // Definimos los textos que esperamos encontrar
    const nombre = 'Camila Soto Rojas';
    const carrera = 'Estudiante de Ingeniería en Informática';
    const descripcion = /Estudiante de Ingeniería en Informática en Duoc UC/i; // Usamos regex para buscar una parte del texto
    const textoBotonPortafolio = 'Ver Portafolio';
    const textoBotonContacto = 'Contacto';

    // Renderizamos el componente antes de cada prueba para no repetir código
    beforeEach(() => {
        render(<MainBanner />);
    });

    it('debería renderizar el componente Avatar', () => {
        // Ant Design Avatar renderiza una <img> si se le pasa 'src'
        // Buscamos la imagen por el 'alt' text que Antd suele generar a partir del 'name' o 'src'
        // O podemos buscar por la estructura si eso falla.
        // Una forma más robusta podría ser buscar por la clase 'ant-avatar'
        const avatarElement = screen.getByRole('img'); // Asumiendo que antd renderiza img
        // Alternativa: const avatarElement = document.querySelector('.ant-avatar');
        expect(avatarElement).toBeInTheDocument();
    });

    it('debería renderizar el nombre principal', () => {
        // Buscamos el título principal por el texto y el rol de heading
        const nombreElement = screen.getByRole('heading', { name: nombre, level: 1 });
        expect(nombreElement).toBeInTheDocument();
    });

    it('debería renderizar la carrera', () => {
        // Buscamos el texto de la carrera
        const carreraElement = screen.getByText(carrera);
        expect(carreraElement).toBeInTheDocument();
    });

    it('debería renderizar la descripción', () => {
        // Buscamos la descripción usando una expresión regular parcial
        const descripcionElement = screen.getByText(descripcion);
        expect(descripcionElement).toBeInTheDocument();
    });

    it('debería renderizar el botón "Ver Portafolio" con el href correcto', () => {
        // Buscamos el botón/enlace por su texto
        const botonPortafolio = screen.getByRole('link', { name: textoBotonPortafolio });
        expect(botonPortafolio).toBeInTheDocument();
        // Verificamos que sea un enlace (<a>) y tenga el href correcto
        expect(botonPortafolio.tagName).toBe('A');
        expect(botonPortafolio).toHaveAttribute('href', '#portafolio');
    });

    it('debería renderizar el botón "Contacto" con el href correcto', () => {
        // Buscamos el botón/enlace por su texto
        const botonContacto = screen.getByRole('link', { name: textoBotonContacto });
        expect(botonContacto).toBeInTheDocument();
        // Verificamos que sea un enlace (<a>) y tenga el href correcto
        expect(botonContacto.tagName).toBe('A');
        expect(botonContacto).toHaveAttribute('href', '#contacto');
    });

});
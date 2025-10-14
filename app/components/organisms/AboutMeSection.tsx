import React from 'react';

import { HiOutlineCode, HiOutlineDatabase, HiOutlineCloud, HiOutlinePencil, HiOutlineUsers, HiOutlineChatAlt2 } from 'react-icons/hi';
import { IoGameControllerOutline, IoBulbOutline, IoStarOutline } from 'react-icons/io5';

import SkillCard from '../molecules/SkillCard';
import SectionTitle from "~/components/atoms/UniversalThings/SectionTittle";
import SectionSubtitle from "~/components/atoms/AboutMe/SectionSubtittle";

const AboutMeSection: React.FC = () => {
    return (
        // 2. Creamos la sección con su ID para que el enlace del header funcione.
        <section id="sobre-mi" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">

                {/* --- Título Principal --- */}
                <SectionTitle>Sobre Mí</SectionTitle>

                {/* --- Párrafo Introductorio --- */}
                <p className="text-center text-gray-600 mt-4 mb-16 max-w-2xl mx-auto">
                    bla bla bla bla
                </p>

                {/* --- Sección de Habilidades --- */}
                <div className="mb-16">
                    <SectionSubtitle icon={<HiOutlinePencil />}>
                        Habilidades y Conocimientos
                    </SectionSubtitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        <SkillCard icon={<HiOutlineCode />} title="Programación (Python, Java)" level="Intermedio" />
                        <SkillCard icon={<HiOutlineDatabase />} title="Bases de Datos (SQL)" level="Intermedio" />
                        <SkillCard icon={<HiOutlineCloud />} title="Cloud Computing (AWS)" level="Intermedio" />
                        <SkillCard icon={<HiOutlinePencil />} title="Diseño de Software" level="Intermedio" />
                        <SkillCard icon={<HiOutlineUsers />} title="Trabajo en Equipo" level="nosé" />
                        <SkillCard icon={<HiOutlineChatAlt2 />} title="Comunicación" level="nosé" />
                    </div>
                </div>

                {/* --- Sección de Intereses --- */}
                <div>
                    <SectionSubtitle icon={<IoStarOutline />}>
                        Intereses
                    </SectionSubtitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        <SkillCard icon={<IoGameControllerOutline />} title="Desarrollo de Software" />
                        <SkillCard icon={<IoBulbOutline />} title="Inteligencia Artificial" />
                        <SkillCard icon={<IoStarOutline />} title="Bases de Datos" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMeSection;
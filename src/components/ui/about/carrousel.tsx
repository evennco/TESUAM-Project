"use client"
import { useState } from "react";
import phrases from '@/assets/locales/es.json';
import DonateButton from '@/components/ui/common/DonateButton';
import MoreButton from '@/components/ui/common/MoreButton';

export default function Carrousel() {
    const [activeSection, setActiveSection] = useState<string>("");

    const getLinkClass = (section: string) =>
        activeSection === section
            ? "bg-foundationcolorred1 text-foundationcoloryellow1 px-6 py-3 rounded-full transition-colors"
            : "bg-foundationcolorwhite bg-opacity-70 text-foundationcolorred2 px-6 py-3 rounded-full transition-colors hover:bg-[#d3d0cc]";

    const handleClick = (section: string) => {
        setActiveSection(section);
    };

    return (
        <section className="w-full h-[85vh] bg-foundationcolorred2 text-white flex items-end lg:px-8">
            <footer className=" bg-foundationcolorred2 text-white py-10 mb-0- w-full">
                <div className="container mx-auto flex justify-between items-center ">
                    <div className="flex flex-col items-start">
                        <h1 className="text-5xl font-bold mb-2">Amazonia, Colombia</h1>
                        <p className="text-2xl">📍 San José del Guaviare, Guaviare</p>
                    </div>
                    <div className="flex">
                        <MoreButton text={phrases.buttons[0].more || 'Redes Sociales'} />
                        <DonateButton text={phrases.buttons[1].donate || 'Contáctanos'} />
                    </div>
                </div>
                <div className="w-full container px-10 py-10 mt-10 mb-0 flex justify-between bg-foundationcolorred1">
                    <div>
                        <h2 className="font-bold text-3x1">Nuestra Misión</h2>
                        <p className="text-sm">Conoce nuestra fundación y <br /> nuestro impacto en las comunidades.</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-3x1">Nuestro Equipo</h2>
                        <p className="text-sm">Conoce las personas que contribuyen <br /> diariamente a nuestra misión y propósito.</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-3x1">Nuestra Fundación</h2>
                        <p className="text-sm">Conoce notas de prensa e imágenes <br /> de nuestra acción social.</p>
                    </div>
                </div>
            </footer>
        </section >
    );
}


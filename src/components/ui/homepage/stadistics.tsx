"use client"
import CountUp from 'react-countup';
import React from 'react';
import StadisticsCard from '../common/stadisticscard';
import BigTitle from "../common/bigtitle";
import phrases from '@/assets/locales/es.json';

const Stadistics: React.FC = () => {
    return (
        <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
            <div className="py-8 px-8 mx-auto sm:py-16 lg:px-20 items-center">
                <div className="mb-8 lg:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <BigTitle title={phrases.titles[0].stadisticsyellow || "Default Title"} subtitle={phrases.titles[0].stadisticsred || "Default Subtitle"} />
                    <div className="flex flex-col justify-center items-center text-center px-10">
                        <p className="text-foundationcolorblack sm:text-xl px-8 dark:text-foundationcolorblack font-montserrat text-center">Te presentamos los resultados de nuestros esfuerzos, una prueba tangible de nuestro compromiso con el cambio positivo. Cada número representa una vida transformada y un paso más cerca de nuestro objetivo de hacer del mundo un lugar mejor.</p>
                    </div>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                    <StadisticsCard value={110} text="Niñas y adolescentes en condición de vulnerabilidad ayudadas por medio de nuestra fundación." />
                    <StadisticsCard value={13} text="Alianzas con instituciones nacionales e internacionales para lograr nuestros objetivos." />
                    <StadisticsCard value={7410} text="Comidas brindadas mensualmente para la seguridad alimentaria de nuestras niñas." />
                    <StadisticsCard value={2} text="Años de servicio y ayuda en nuestra comunidad del departamento del Guaviare en Colombia." />
                </div>
            </div>
        </section>
    );
};

export default Stadistics;
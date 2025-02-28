"use client"
import CountUp from 'react-countup';
import React from 'react';
import StadisticsCard from '../common/stadisticscard';
import BigTitle from "../common/bigtitle";
import phrases from '@/assets/locales/es.json';
import Image from "next/image";
import LogoMariposa from "../../../../public/Tesuam_logo_mariposa.png";

const Stadisticsprojects: React.FC = () => {
    return (
        <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite text-center items-center">
            <div className="py-8 px-4 sm:px-8 mx-auto sm:py-16 lg:px-20 items-center">
                <div className="mb-8 lg:mb-16 grid sm:grid-cols-1 sm:items-center justify-center md:grid-cols-2 md:gap-8 sm:gap-0">
                    <BigTitle title={phrases.titles[1].projectsyellow || "Default Title"} subtitle={phrases.titles[4].projectspagestadisticsred || "Default Subtitle"} />
                    <div className="flex justify-center items-center md:justify-end sm:mt-4 md:mt-0">
                        <Image src={LogoMariposa} alt="Contact Image" className="w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/3 rounded-lg" />
                    </div>
                </div>
                <div className="space-y-1 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                    <StadisticsCard value={30} text="Proyectos culminados" />
                    <StadisticsCard value={23} text="Proyectos en desarrollo" />
                    <StadisticsCard value={5} text="Proyectos en planeación y viabilidad" />
                    <StadisticsCard value={3} text="Objetivos de desarrollo sostenible priorizados" />
                </div>
            </div>
        </section>
    );
};

export default Stadisticsprojects;
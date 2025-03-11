"use client"
import React, { useState } from 'react';
import StadisticsCard from '../common/stadisticscard';
import BigTitle from "../common/bigtitle";
import phrases from '@/assets/locales/es.json';
import Image from "next/image";
import LogoMariposa from "/public/Tesuam_logo_mariposa.png";
import Modal from "@/components/ui/common/supportmodal";

const Stadisticsprojects: React.FC = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

    const handleOpenModal = (index: number) => {
        setSelectedCardIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedCardIndex(null);
    };

    return (
        <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite text-center items-center">
            <div className="py-8 px-4 sm:px-8 mx-auto sm:py-16 lg:px-20 items-center">
                <div className="mb-8 lg:mb-16 grid sm:grid-cols-1 sm:items-center justify-center md:grid-cols-2 md:gap-8 sm:gap-0">
                    <BigTitle 
                      title={phrases.projects.stadisticsprojects.title || "Default Title"} 
                      subtitle={phrases.projects.stadisticsprojects.subtitle || "Default Subtitle"} 
                    />
                    <div className="flex justify-center items-center md:justify-end sm:mt-4 md:mt-0">
                        <Image 
                          src={LogoMariposa} 
                          alt="Contact Image" 
                          className="w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/3 rounded-lg" 
                        />
                    </div>
                </div>
                <div className="space-y-1 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                    {phrases.projects.stadisticsprojectsCards.map((item: any, index: number) => (
                      <StadisticsCard 
                        key={index} 
                        value={item.value} 
                        text={item.text} 
                        onOpenModal={() => handleOpenModal(index)}
                      />
                    ))}
                </div>
            </div>
            {selectedCardIndex !== null && (
              <Modal onClose={handleCloseModal}>
                <div className="p-4">
                  <h2 className="text-3xl font-extrabold mb-4 text-foundationcolorred1">
                    {phrases.projects.stadisticsprojectsCards[selectedCardIndex].modalContent.title}
                  </h2>
                  <ol className="text-lg text-justify">
                    {phrases.projects.stadisticsprojectsCards[selectedCardIndex].modalContent.content.map((item: string, i: number) => (
                      <li key={i} className="my-2">- {item}</li>
                    ))}
                  </ol>
                </div>
              </Modal>
            )}
        </section>
    );
};

export default Stadisticsprojects;
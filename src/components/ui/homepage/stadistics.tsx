"use client"
import React, { useState } from 'react';
import StadisticsCard from '../common/stadisticscard';
import BigTitle from "../common/bigtitle";
import phrases from '@/assets/locales/es.json';
import Modal from "@/components/ui/common/supportmodal";
import { STADISTICS_DATA } from '@/components/ui/common/stadisticsData';

const Stadistics: React.FC = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

    const handleOpenModal = (index: number) => {
        setSelectedCardIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedCardIndex(null);
    };

    return (
        <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
            <div className="py-8 px-8 mx-auto sm:py-16 lg:px-20 items-center">
                <div className="mb-8 lg:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <BigTitle title={phrases.homepage.stadistics.titles[0].stadisticsyellow || "Default Title"} subtitle={phrases.homepage.stadistics.titles[0].stadisticsred || "Default Subtitle"} />
                    <div className="flex flex-col justify-center items-center text-center px-10">
                        <p className="sm:text-xl px-8 dark:text-foundationcolorblack text-foundationcolorblack font-montserrat text-center">{phrases.homepage.stadistics.description}</p>
                    </div>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                    {STADISTICS_DATA.map((data, index) => (
                        <StadisticsCard
                            key={index}
                            value={data.value}
                            text={data.text}
                            onOpenModal={() => handleOpenModal(index)}
                        />
                    ))}
                </div>
                {selectedCardIndex !== null && (
                    <Modal onClose={handleCloseModal}>
                        {STADISTICS_DATA[selectedCardIndex].modalContent}
                    </Modal>
                )}
            </div>
        </section>
    );
};

export default Stadistics;
"use client"
import Image from 'next/image';
import React, { memo } from 'react';
import phrases from '@/assets/locales/es.json';
import carrousel1 from '../../../../public/carrousel1.png';


const SupportBanner: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center full-screen-height">
            <div className='w-full h-screen overflow-hidden relative full-screen-height'>
                <div
                    className='w-full absolute flex transition-transform duration-300 full-screen-height'>
                        <div className='relative shrink-0 w-full h-full'>
                            <Image
                                className='pointer-events-none object-cover opacity-70 h-full'
                                alt= "Sisas pa"
                                fill
                                src={carrousel1}
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                            />
                        </div>
                </div>
                <div className='absolute lg:left-8 left-8 sm:left-4 right-8 sm:right-auto flex flex-col justify-center space-y-8 lg:w-1/3 sm:w-full md:w-1/2 h-full z-10'>
                    <h1 className='text-white text-start text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>Sisas</h1>
                    <p className='text-white text-start text-base sm:text-lg md:text-xl xl:text-2xl'>No puede ser</p>
                    <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:w-full lg:w-full'>
                        <button className='bg-foundationcolorred1 hover:bg-foundationcoloryellow2 text-gray-800 dark:text-foundationcoloryellow2 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm md:px-6 md:py-4 px-4 py-2 sm:w-full md:w-full dark:hover:bg-white dark:hover:text-foundationcolorred1 focus:outline-none dark:focus:ring-foundationcolorred1 border-2 hover:border-foundationcolorred1'>{phrases.buttons[0].more}</button>
                        <button className='bg-white hover:bg-foundationcolorred1 dark:text-foundationcolorred1 focus:ring-4 font-medium rounded-full text-sm w-full dark:hover:bg-foundationcolorred1 md:px-6 md:py-4 px-4 py-2 sm:w-full md:w-full focus:outline-none dark:focus:ring-foundationcolorred1 dark:hover:text-foundationcoloryellow1 border-2 border-foundationcolorred1'>{phrases.buttons[1].donate}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(SupportBanner);
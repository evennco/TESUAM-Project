"use client"
import Image from 'next/image';
import React, { memo } from 'react';
import phrases from '@/assets/locales/es.json';
import carrousel2 from '../../../../public/carrousel2.png';
import MoreButton from '@/components/ui/common/MoreButton';
import DonateButton from '@/components/ui/common/DonateButton';

const Projectsbanner: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center full-screen-height">
            <div className='w-full h-screen overflow-hidden relative full-screen-height'>
                <div className='w-full absolute flex transition-transform duration-300 full-screen-height'>
                    <div className='relative shrink-0 w-full h-full'>
                        <Image
                            className='pointer-events-none object-cover opacity-70 h-full'
                            alt="Sisas pa"
                            fill
                            src={carrousel2}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                        />
                    </div>
                </div>
                <div className='absolute bottom-8 left-8 sm:left-4 right-8 sm:right-auto flex flex-col justify-end space-y-8 lg:w-1/3 sm:w-full md:w-1/2 h-full z-10 mb-10 ml-8'>
                    <h1 className='text-white text-start text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>
                        {phrases.projects.projectsbanner.title}
                    </h1>
                    <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:w-full lg:w-full'>
                        <MoreButton text={phrases.projects.projectsbanner.buttons[0].more ?? 'Haz tu donación'} />
                        <DonateButton text={phrases.projects.projectsbanner.buttons[1].donate ?? 'Donar'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Projectsbanner);
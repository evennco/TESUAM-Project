"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { CarouselProps } from '@/lib/definitions';
import phrases from '@/assets/locales/es.json';
import DonateButton from '@/components/ui/common/DonateButton';
import MoreButton from '@/components/ui/common/MoreButton';

const InfiniteCarousel = lazy(() => import('./infinitecarrousel'));

const Carousel: React.FC<CarouselProps> = ({ data }) => {
    const [currentImg, setCurrentImg] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImg(prev => (prev + 1) % data.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [data.length]);

    return (
        <div className="w-full flex flex-col items-center full-screen-height">
            <div className='w-full h-screen overflow-hidden relative full-screen-height'>
                <div ref={carouselRef}
                    style={{ transform: `translateX(-${currentImg * 100}%)` }}
                    className='w-full absolute flex transition-transform duration-300 full-screen-height'>
                    {data.map((v, i) => (
                        <div key={i} className='relative shrink-0 w-full h-full'>
                            <Image
                                className='pointer-events-none object-cover opacity-70 h-full'
                                alt={v.title}
                                src={v.image}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                                loading="eager"
                            />
                        </div>
                    ))}
                </div>
                <div className='absolute lg:left-8 left-8 sm:left-4 right-8 sm:right-auto flex flex-col justify-center space-y-8 lg:w-1/3 sm:w-full md:w-1/2 h-full z-10'>
                    <h1 className='text-white text-start text-lg sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>{data[currentImg].title}</h1>
                    <p className='text-white text-start text-base sm:text-lg md:text-xl xl:text-2xl'>{data[currentImg].text}</p>
                    <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:w-full lg:w-full'>
                    <MoreButton text={phrases.buttons[0].more || 'Conoce más'} />
                    <DonateButton text={phrases.buttons[1].donate || 'Haz tu donación'} />
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center space-x-2'>
                <Suspense fallback={<div>Loading...</div>}>
                    <InfiniteCarousel />
                </Suspense>
            </div>
        </div>
    );
};

export default Carousel;
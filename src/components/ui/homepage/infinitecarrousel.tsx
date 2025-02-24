import Image from 'next/image';
import React, { memo } from 'react';
import { infiniteCarrouselData } from '@/lib/infiniteCarrouselData';
import { InfiniteCarouselItem } from '@/lib/definitions';

const InfiniteCarousel: React.FC = () => {
    return (
        <div className='slider overflow-hidden'>
            <div className='slide-track flex bg-slate-200'>
                {infiniteCarrouselData.map((logo: InfiniteCarouselItem, index: number) => (
                    <div key={index} className='slide p-2 flex items-center justify-center'>
                        <div className='relative w-32 h-32'>
                            <Image src={logo.src} alt={`logo-${index}`} fill sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, (max-width: 1024px) 15vw, 10vw"  />
                        </div>
                    </div>
                ))}
                {infiniteCarrouselData.map((logo: InfiniteCarouselItem, index: number) => (
                    <div key={index + infiniteCarrouselData.length} className='slide p-2 flex items-center justify-center'>
                        <div className='relative w-32 h-32'>
                            <Image src={logo.src} alt={`logo-${index + infiniteCarrouselData.length}`} fill sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, (max-width: 1024px) 15vw, 10vw"  />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(InfiniteCarousel);
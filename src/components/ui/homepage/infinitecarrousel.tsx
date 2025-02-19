import Image from 'next/image';
import React, { memo } from 'react';
import { infiniteCarrouselData } from '@/lib/infiniteCarrouselData';
import { InfiniteCarouselItem } from '@/lib/definitions';

const InfiniteCarousel: React.FC = () => {
    return (
        <div className='slider overflow-hidden'>
            <div className='slide-track flex bg-slate-200'>
                {infiniteCarrouselData.map((logo: InfiniteCarouselItem, index: number) => (
                    <div key={index} className='slide'>
                        <Image src={logo.src} alt={`logo-${index}`} />
                    </div>
                ))}
                {infiniteCarrouselData.map((logo: InfiniteCarouselItem, index: number) => (
                    <div key={index + infiniteCarrouselData.length} className='slide'>
                        <Image src={logo.src} alt={`logo-${index + infiniteCarrouselData.length}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(InfiniteCarousel);
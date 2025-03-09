import React from 'react';
import { BigMiniTitleProps } from '@/lib/definitions';

const BigMiniTitle = ({ title, subtitle }: BigMiniTitleProps) => {
    return (
        <div className='bg-foundationcolorwhite dark:bg-foundationcolorwhite'>
            <div className="mx-auto max-w-screen-md text-start mb-8 lg:mb-12">
                <p className="font-urbanist text-center mb-4 text-xl sm:text-2xl md:text-2xl tracking-tight font-semibold text-foundationcoloryellow1 dark:text-foundationcoloryellow1">
                    {title}
                    <b className="text-foundationcolorred2 text-3xl sm:text-4xl md:text-5xl block font-semibold px-4 sm:px-8 md:px-16">
                        {subtitle}
                    </b>
                </p>
            </div>
        </div>
    );
}
export default BigMiniTitle;
import React from 'react';
import { BigTitleProps } from '@/lib/definitions';

const BigTitle = ({ title, subtitle }: BigTitleProps) => {
    return (
        <div className='bg-white dark:bg-foundationcolorwhite'>
            <div className="mx-auto max-w-screen-md text-start mb-8 lg:mb-12">
                <p className="font-urbanist text-center mb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold text-foundationcoloryellow1 dark:text-foundationcoloryellow1">
                    {title}
                    <b className="text-foundationcolorred2 block my-3 font-semibold px-4 sm:px-8 md:px-16">
                        {subtitle}
                    </b>
                </p>
            </div>
        </div>
    );
}
export default BigTitle;
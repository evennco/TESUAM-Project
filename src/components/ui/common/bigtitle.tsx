import React from 'react';
import { BigTitleProps } from '@/lib/definitions';

const BigTitle = ({ title, subtitle }: BigTitleProps) => {
    return (
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <p className="font-urbanist text-center mb-4 text-5xl tracking-tight font-semibold text-foundationcoloryellow1 dark:text-foundationcoloryellow1">{title}<b className="text-foundationcolorred2 block my-3 font-semibold px-16">{subtitle}</b></p>
        </div>
    );
}
export default BigTitle;
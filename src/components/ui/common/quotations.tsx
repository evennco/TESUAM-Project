import React from 'react';
import { bibleQuotationProps } from '@/lib/definitions';

const BibleQuotations = ({ title, quotation }: bibleQuotationProps) => {
    return (
        <div className="w-full mb-8 lg:mb-12">
            <p className="font-urbanist w-full mb-4 text-2xl sm:text-3xl md:text-5xl tracking-tight font-semibold text-foundationcoloryellow1 dark:text-foundationcoloryellow1 text-center">
                {title}
            </p>
            <p className="font-urbanist text-xl sm:text-2xl md:text-3xl font-semibold text-foundationcolorred2 text-center">
                {quotation}
            </p>
        </div>
    );
}
export default BibleQuotations;
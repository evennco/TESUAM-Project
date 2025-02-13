"use client"
import React from 'react';
import BigTitle from "@/components/ui/common/bigtitle";
import phrases from '@/assets/locales/es.json';
import { volunteer } from '@/lib/faqs';
import FAQ from '@/components/ui/common/FAQ'
import Donatebuttons from '@/components/ui/common/moneydonatebutton';

const Donatemethods: React.FC = () => {

    return (
        <section className="bg-white dark:bg-foundationcolorwhite">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <BigTitle title={phrases.titles[3].volunteeryellow || "Default Title"} subtitle={phrases.titles[3].volunteerred || "Default Subtitle"} />
                <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <Donatebuttons />
                    <FAQ data={volunteer} />
                </div>
            </div>
        </section>
    );
}

export default Donatemethods;
"use client"
import React from 'react';
import VideoCard from '../common/videocard';
import BigTitle from "@/components/ui/common/bigtitle";
import phrases from '@/assets/locales/es.json';
import { volunteer } from '@/lib/faqs';
import { useState } from 'react';

const Volunteer: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white dark:bg-foundationcolorwhite">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <BigTitle title={phrases.titles[3].volunteeryellow || "Default Title"} subtitle={phrases.titles[3].volunteerred || "Default Subtitle"} />
                <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <VideoCard
                        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Titulo 1"
                        description="Descripcion 1"
                        buttonText="Conoce más"
                    />
                    <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-6 lg:px-6">
                            <div className="grid pt-8 text-left border-t border-foundationcolorblack dark:border-foundationcolorblack md:grid-cols-1">
                                {volunteer.map((faq, index) => (
                                    <div key={index} className={`mb-10 ${index !== volunteer.length ? 'border-b border-foundationcolorblack dark:border-foundationcolorblack pb-4' : ''}`}>
                                        <h3
                                            className="flex justify-between items-center mb-4 text-lg font-medium text-foundationcolorblack dark:text-foundationcolorblack cursor-pointer"
                                            onClick={() => toggleOpen(index)}
                                        >
                                            {faq.question}
                                            <svg className={`flex-shrink-0 ml-2 w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707A1 1 0 014.293 8.293l5-5A1 1 0 0110 3z" clipRule="evenodd"></path>
                                            </svg>
                                        </h3>
                                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <p className="text-foundationcolorblack dark:text-foundationcolorblack">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Volunteer;
"use client";
import React from 'react';
import VideoCard from '../common/videocard';
import BigTitle from "@/components/ui/common/bigtitle";
import phrases from '@/assets/locales/es.json';
import { volunteer } from '@/lib/faqs';
import FAQ from '@/components/ui/common/FAQ';

const Volunteer: React.FC = () => {
  return (
    <section className="bg-white dark:bg-foundationcolorwhite bg-foundationcolorwhite">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <BigTitle title={phrases.titles[3].volunteeryellow || "Default Title"} subtitle={phrases.titles[3].volunteerred || "Default Subtitle"} />
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          <VideoCard
            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Titulo 1"
            description="Descripcion 1"
            buttonText="Conoce más"
          />
          <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite bg-foundationcolorwhite">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-6 lg:px-6">
              <FAQ data={volunteer} />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
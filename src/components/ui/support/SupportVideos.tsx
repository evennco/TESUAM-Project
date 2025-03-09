"use client"
import React from 'react';
import VideoCard from '../common/videocard';
import BigTitle from "@/components/ui/common/bigtitle";
import phrases from '@/assets/locales/es.json';

const SupportVideos: React.FC = () => {
  return (
    <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          <VideoCard
            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Voluntariado presencial"
            description="Sé parte del cambio viviendo la experiencia TESUAM en la Amazonía colombiana."
            buttonText="Conoce más"
          />
          <VideoCard
            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Voluntariado virtual"
            description="Ayuda desde cualquier parte del mundo con tu talento y conocimientos."
            buttonText="Conoce más"
          />
        </div>
      </div>
    </section>
  );
}

export default SupportVideos;
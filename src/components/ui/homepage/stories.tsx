import React from 'react';
import VideoCard from '../common/videocard';
import BigTitle from "@/components/ui/common/bigtitle";
import phrases from '@/assets/locales/es.json';

const Stories: React.FC = () => {
  return (
    <section className="bg-white dark:bg-foundationcolorwhite">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <BigTitle title={phrases.titles[2].videosyellow || "Default Title"} subtitle={phrases.titles[2].videosred || "Default Subtitle"} />
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          <VideoCard
            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Titulo 1"
            description="Descripcion 1"
            buttonText="Conoce más"
          />
          <VideoCard
            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Titulo 2"
            description="Descripcion 2"
            buttonText="Conoce más"
          />
        </div>
      </div>
    </section>
  );
}

export default Stories;
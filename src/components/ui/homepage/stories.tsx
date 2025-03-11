"use client"
import React from 'react';
import VideoCard from '../common/videocard';
import BigTitle from "@/components/ui/common/bigtitle";
import phrases from '@/assets/locales/es.json';

const Stories: React.FC = () => {
  return (
    <section className="dark:bg-foundationcolorwhite bg-foundationcolorwhite">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <BigTitle title={phrases.homepage.stories.titles[0].videosyellow || "Default Title"} subtitle={phrases.homepage.stories.titles[0].videosred || "Default Subtitle"} />
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          {phrases.homepage.stories.videos.map((video, index) => (
            <VideoCard
              key={index}
              videoUrl={index === 0 ? "https://www.youtube.com/embed/xiLEIyYWmd0" : "https://www.youtube.com/embed/A59BBxBCIAM"}
              title={video.title}
              description={video.description}
              buttonText={video.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stories;
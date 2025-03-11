"use client"
import React, { useState } from 'react';
import VideoCard from '../common/videocard';
import Modal from "@/components/ui/common/supportmodal";
import phrases from '@/assets/locales/es.json';

const SupportVideos: React.FC = () => {
  const videos = phrases.support.supportVideos.videos;
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setSelectedVideoIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedVideoIndex(null);
  };

  return (
    <section id="volunteervideos" className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          {videos.map((video: any, index: number) => (
            <VideoCard
              key={index}
              videoUrl={video.videoUrl}
              title={video.title}
              description={video.description}
              buttonText={video.buttonText}
              onButtonClick={() => handleOpenModal(index)}
            />
          ))}
        </div>
      </div>
      {selectedVideoIndex !== null && (
        <Modal onClose={handleCloseModal}>
          <div className="p-4">
            <h2 className="text-3xl font-extrabold mb-4 text-foundationcolorred1">
              {videos[selectedVideoIndex].modalContent.title}
            </h2>
            <ol className="text-justify p-4">
              {videos[selectedVideoIndex].modalContent.content.map((item: string, i: number) => (
                <li key={i}>- {item}</li>
              ))}
            </ol>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default SupportVideos;
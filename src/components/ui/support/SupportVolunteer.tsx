"use client"
import React from 'react';
import VideoCard from '../common/videocard';
import BigTitle from "@/components/ui/common/bigtitle";
import phrases from '@/assets/locales/es.json';
import FAQ from '@/components/ui/common/FAQ';
import BibleQuotations from '@/components/ui/common/quotations';

const SupportVolunteer: React.FC = () => {
  const handleScrollToVideos = () => {
    const element = document.getElementById("volunteervideos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
      <div className="pb-8 px-4 mx-auto max-w-screen-xl lg:pb-16">
        <BigTitle
          title={phrases.support.supportVolunteer.title || "Default Title"}
          subtitle={phrases.support.supportVolunteer.subtitle || "Default Subtitle"}
        />
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          <VideoCard
            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Titulo 1"
            description="Descripcion 1"
            buttonText="Conoce más"
            onButtonClick={handleScrollToVideos}
          />
          <section className="dark:bg-foundationcolorwhite">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-6 lg:px-6">
              <FAQ data={phrases.support.supportVolunteer.faqs} />
            </div>
          </section>
        </div>
      </div>
      <BibleQuotations
        title={phrases.support.bibleQuotation.title || "Default Bible Quotation Title"}
        quotation={phrases.support.bibleQuotation.quotation || "Default Bible Quotation"}
      />
    </section>
  );
};

export default SupportVolunteer;
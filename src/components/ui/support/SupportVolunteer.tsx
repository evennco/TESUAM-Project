"use client";
import React from 'react';
import VideoCard from '../common/videocard';
import BigTitle from "@/components/ui/common/bigtitle";
import phrases from '@/assets/locales/es.json';
import { supportvolunteer } from '@/lib/faqs';
import FAQ from '@/components/ui/common/FAQ';
import BibleQuotations from '@/components/ui/common/quotations';

const SupportVolunteer: React.FC = () => {
  return (
    <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
      <div className="pb-8 px-4 mx-auto max-w-screen-xl lg:pb-16">
        <BigTitle title={phrases.titles[3].volunteeryellow || "Default Title"} subtitle={phrases.titles[3].volunteerred || "Default Subtitle"} />
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          <VideoCard
            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Titulo 1"
            description="Descripcion 1"
            buttonText="Conoce más"
          />
          <section className="dark:bg-foundationcolorwhite">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-6 lg:px-6">
              <FAQ data={supportvolunteer} />
            </div>
          </section>
        </div>
      </div>
      <BibleQuotations title='"Cada uno debe dar según lo que haya decidido en su corazón, no de mala gana ni por obligación, porque Dios ama al que da con alegría"' quotation="- 2 Corintios 9:7" />
    </section>
  );
};

export default SupportVolunteer;
import React from 'react';
import ProjectsComponent from '@/components/ui/projects/ProjectsComponent';
import StadisticsProjects from '@/components/ui/projects/stadisticsprojects';
import Projectsform from '@/components/ui/projects/projectsform';
import Projectsbanner from '@/components/ui/projects/projectsbanner';
import HashtagBanner from '@/components/ui/common/HashtagBanner';
import phrases from '@/assets/locales/es.json';
import BigMiniTitle from "@/components/ui/common/bigminititle";
import { imagesSet1, imagesSet2, imagesSet3, imagesSet4 } from '@/lib/cardsprojectsimages';

export default function Projectspage() {
  return (
    <main className="flex flex-col">
      <div className="w-full flex-grow dark:bg-foundationcolorwhite bg-foundationcolorwhite">
        <Projectsbanner />
        <StadisticsProjects />
        <HashtagBanner text="#TejiendoCambios" />
        <BigMiniTitle title={phrases.titles[1].projectsyellow || "Default Title"} subtitle={phrases.titles[1].projectsred || "Default Subtitle"} />
        <ProjectsComponent images={imagesSet1} />
        <HashtagBanner text="#TejiendoCambios" />
        <BigMiniTitle title={phrases.titles[1].projectsyellow || "Default Title"} subtitle={phrases.titles[1].projectsred || "Default Subtitle"} />
        <ProjectsComponent images={imagesSet2} />
        <HashtagBanner text="#TejiendoCambios" />
        <BigMiniTitle title={phrases.titles[1].projectsyellow || "Default Title"} subtitle={phrases.titles[1].projectsred || "Default Subtitle"} />
        <ProjectsComponent images={imagesSet3} />
        <BigMiniTitle title={phrases.titles[1].projectsyellow || "Default Title"} subtitle={phrases.titles[1].projectsred || "Default Subtitle"} />
        <ProjectsComponent images={imagesSet4} />
        <Projectsform />
      </div>
    </main>
  );
}
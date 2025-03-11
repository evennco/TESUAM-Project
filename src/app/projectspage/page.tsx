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
        <BigMiniTitle title={phrases.projects.bigminititle.title || "Default Title"} subtitle={phrases.projects.bigminititle.subtitle || "Default Subtitle"} />
        <ProjectsComponent images={imagesSet1} offset={0} />
        <HashtagBanner text="#TejiendoCambios" />
        <BigMiniTitle title={phrases.projects.bigminititle.title || "Default Title"} subtitle={phrases.projects.bigminititle.subtitle || "Default Subtitle"} />
        <ProjectsComponent images={imagesSet2} offset={3} />
        <HashtagBanner text="#TejiendoCambios" />
        <BigMiniTitle title={phrases.projects.bigminititle.title || "Default Title"} subtitle={phrases.projects.bigminititle.subtitle || "Default Subtitle"} />
        <ProjectsComponent images={imagesSet3} offset={6} />
        <BigMiniTitle title={phrases.projects.bigminititle.title || "Default Title"} subtitle={phrases.projects.bigminititle.subtitle || "Default Subtitle"} />
        <ProjectsComponent images={imagesSet4} offset={9} />
        <Projectsform />
      </div>
    </main>
  );
}
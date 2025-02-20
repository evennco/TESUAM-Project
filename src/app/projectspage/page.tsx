import Carousel from '@/components/ui/homepage/carrousel';
import InfiniteCarousel from '@/components/ui/homepage/infinitecarrousel';
import StadisticsProjects from '@/components/ui/projects/stadisticsprojects';
import Stories from '@/components/ui/homepage/stories';
import Volunteer from '@/components/ui/homepage/volunteer';
import Faq from '@/components/ui/homepage/faq';
import Contact from '@/components/ui/homepage/contact';
import ProjectsComponent from '@/components/ui/projects/ProjectsComponent';
import Projectsform from '@/components/ui/projects/projectsform';
import Projectsbanner from '@/components/ui/projects/projectsbanner';
import HashtagBanner from '@/components/ui/common/HashtagBanner';
import phrases from '@/assets/locales/es.json';
import BigTitle from "@/components/ui/common/bigtitle";
import BigMiniTitle from "@/components/ui/common/bigminititle";

export default function Projectspage() {
    return (
      <main className="flex flex-col">
        <div className="w-full flex-grow bg-white dark:bg-foundationcolorwhite">
            <Projectsbanner />
            <StadisticsProjects />
            <HashtagBanner text="#TejiendoCambios" />
            <BigMiniTitle title = {phrases.titles[1].projectsyellow || "Default Title"} subtitle={phrases.titles[1].projectsred || "Default Subtitle"} />
            <ProjectsComponent />
            <HashtagBanner text="#TejiendoCambios" />
            <BigMiniTitle title = {phrases.titles[1].projectsyellow || "Default Title"} subtitle={phrases.titles[1].projectsred || "Default Subtitle"} />
            <ProjectsComponent />
            <HashtagBanner text="#TejiendoCambios" />
            <BigMiniTitle title = {phrases.titles[1].projectsyellow || "Default Title"} subtitle={phrases.titles[1].projectsred || "Default Subtitle"} />
            <ProjectsComponent />
            <Projectsform />
        </div>
      </main>
    );
  }
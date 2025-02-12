import Carousel from '@/components/ui/homepage/carrousel';
import InfiniteCarousel from '@/components/ui/homepage/infinitecarrousel';
import StadisticsProjects from '@/components/ui/projects/stadisticsprojects';
import Stories from '@/components/ui/homepage/stories';
import Volunteer from '@/components/ui/homepage/volunteer';
import Faq from '@/components/ui/homepage/faq';
import Contact from '@/components/ui/homepage/contact';
import Projects from '@/components/ui/homepage/projects';
import Projectsform from '@/components/ui/projects/projectsform';
import Projectsbanner from '@/components/ui/projects/projectsbanner';

export default function Projectspage() {
    return (
      <main className="flex flex-col text-center justify-center items-center">
        <div className="w-full flex-grow">
            <Projectsbanner />
            <StadisticsProjects />
            <Projects />
            <Projects />
            <Projects />
            <Projectsform />
        </div>
      </main>
    );
  }
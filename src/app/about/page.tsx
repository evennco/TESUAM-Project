import SupportForm from '@/components/ui/support/SupportForm';
import Faq from '@/components/ui/homepage/faq';
import Mision from '@/components/ui/about/mission';
import Quienes from '@/components/ui/about/whoarewe';
import SupportVideos from '@/components/ui/support/SupportVideos';
import Carrousel from '@/components/ui/about/carrousel';
import {imagesSet1} from '@/lib/cardslinksimages';
import Links from '@/components/ui/common/LinksComponent';
import BigTitle from '@/components/ui/common/bigtitle';
import HashtagBanner from '@/components/ui/common/HashtagBanner';

export default function About() {
  return (
    <main className="flex flex-col text-center justify-center items-center bg-foundationcolorwhite">
      <div className="w-full flex-grow">
        <Carrousel />
        <HashtagBanner text="#TejiendoSueños" />
        <Quienes />
        <Mision />
        <SupportVideos />
        {/* Equipo de trabajo en planta */}
        {/* Equipo de trabajo ambulatorio */}
        <Faq />
        <BigTitle title="Enlaces de interés" subtitle="" />
            <Links images={imagesSet1} />
        <SupportForm />
      </div>
    </main>
  );
}
import SupportForm from '@/components/ui/support/SupportForm';
import Faq from '@/components/ui/homepage/faq';
import Mision from '@/components/ui/about/mision';
import Quienes from '@/components/ui/about/quienessomos';
import SupportVideos from '@/components/ui/support/SupportVideos';

export default function About() {
  return (
    <main className="flex flex-col text-center justify-center items-center">
      <div className="w-full flex-grow">
        <Quienes />
        {/* datos random*/}
        <Mision />
        <SupportVideos />
        {/* Equipo de trabajo en planta */}
        {/* Equipo de trabajo ambulatorio */}
        <Faq />
        {/* Enlaces de interes */}
        <SupportForm />
      </div>
    </main>
  );
}
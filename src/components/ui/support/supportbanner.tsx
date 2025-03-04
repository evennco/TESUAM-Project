import Image from "next/image";
import phrases from "@/assets/locales/es.json";
import carrousel2 from "../../../../public/main/ninas.jpg";
import MoreButton from "@/components/ui/common/MoreButton";
import DonateButton from "@/components/ui/common/DonateButton";

const SupportBanner: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center full-screen-height relative">
      <div className="w-full h-screen overflow-hidden relative full-screen-height">
        <Image
          alt="Sisas pa"
          src={carrousel2}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 640px) 100vw,
                 (max-width: 768px) 100vw,
                 (max-width: 1024px) 100vw,
                 100vw"
        />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 sm:right-0 sm:bottom-0 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 sm:w-full sm:ml-8 md:ml-8 lg:md-0">
          <h1 className="text-white text-xl sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pb-4 sm:w-2/3">
            Conoce nuestros proyectos de impacto y acción social
          </h1>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto justify-end">
            <MoreButton text={phrases.buttons[0].more ?? "Conoce más"} />
            <DonateButton text={phrases.buttons[1].donate ?? "Haz tu donación"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;
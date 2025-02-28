import Image from "next/image";
import phrases from "@/assets/locales/es.json";
import carrousel2 from "../../../../public/carrousel2.png";

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
            <button className="w-full sm:w-full md:w-auto bg-foundationcolorred1 hover:bg-foundationcoloryellow2 text-gray-800 dark:text-foundationcoloryellow2 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm md:px-6 md:py-4 px-4 py-2 dark:hover:bg-white dark:hover:text-foundationcolorred1 focus:outline-none dark:focus:ring-foundationcolorred1 border-2 hover:border-foundationcolorred1">
              {phrases.buttons[0].more}
            </button>
            <button className="w-full sm:w-full md:w-auto bg-white hover:bg-foundationcolorred1 dark:text-foundationcolorred1 focus:ring-4 font-medium rounded-full text-sm dark:hover:bg-foundationcolorred1 md:px-6 md:py-4 px-4 py-2 focus:outline-none dark:focus:ring-foundationcolorred1 dark:hover:text-foundationcoloryellow1 border-2 border-foundationcolorred1">
              {phrases.buttons[1].donate}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;
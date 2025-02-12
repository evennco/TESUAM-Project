import Image from "next/image";
import phrases from "@/assets/locales/es.json";
import carrousel2 from "../../../../public/carrousel2.png";

const SupportBanner: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Imagen de fondo */}
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

      {/* Contenedor absoluto para el texto y los botones */}
      <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
        {/* Texto a la izquierda */}
        <h1 className="text-white text-xl sm:text-2xl md:text-6xl font-bold pb-4 w-2/3">
          Conoce nuestros proyectos de impacto y acción social
        </h1>

        {/* Botones a la derecha */}
        <div className="flex space-x-4 w-full justify-end">
          <button className="w-1/4 bg-foundationcolorred1 hover:bg-foundationcoloryellow2 text-gray-800 dark:text-foundationcoloryellow2 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm md:px-6 md:py-4 px-4 py-2 dark:hover:bg-white dark:hover:text-foundationcolorred1 focus:outline-none dark:focus:ring-foundationcolorred1 border-2 hover:border-foundationcolorred1">
            {phrases.buttons[0].more}
          </button>

          <button className="bg-white w-1/4 hover:bg-foundationcolorred1 dark:text-foundationcolorred1 focus:ring-4 font-medium rounded-full text-sm dark:hover:bg-foundationcolorred1 md:px-6 md:py-4 px-4 py-2 focus:outline-none dark:focus:ring-foundationcolorred1 dark:hover:text-foundationcoloryellow1 border-2 border-foundationcolorred1">
            {phrases.buttons[1].donate}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;

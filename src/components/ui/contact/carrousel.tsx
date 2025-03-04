"use client"
import { useState } from "react";

export default function Carrousel() {
  const [activeSection, setActiveSection] = useState<string>("");

  const getLinkClass = (section: string) =>
    activeSection === section
      ? "bg-foundationcolorred1 text-foundationcoloryellow1 px-6 py-3 rounded-full transition-colors"
      : "bg-foundationcolorwhite bg-opacity-70 text-foundationcolorred2 px-6 py-3 rounded-full transition-colors hover:bg-[#d3d0cc]";

  const handleClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <section className="w-full h-[85vh] bg-foundationcolorred2 text-white flex items-center px-6 lg:px-8">
      <div className="py-8 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-6">
          Conéctate con TESUAM
          <br className="sm:hidden lg:block" />
          Juntos hacemos la diferencia.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-snug">
          Siempre estamos disponibles para escucharte, responder tus inquietudes
          y trabajar juntos por una causa más grande.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#redes-sociales"
            onClick={() => handleClick("redes-sociales")}
            className={getLinkClass("redes-sociales")}
          >
            Redes Sociales
          </a>
          <a
            href="#enviar-correo"
            onClick={() => handleClick("enviar-correo")}
            className={getLinkClass("enviar-correo")}
          >
            Enviar un Correo
          </a>
          <a
            href="#boletin"
            onClick={() => handleClick("boletin")}
            className={getLinkClass("boletin")}
          >
            Suscribirme al Boletín
          </a>
          <a
            href="#pqrsf"
            onClick={() => handleClick("pqrsf")}
            className={getLinkClass("pqrsf")}
          >
            PQRSF
          </a>
        </div>
      </div>
    </section>
  );
}
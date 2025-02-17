"use client";

import React from "react";

export default function Carrousel() {
  return (
    <section className="relative w-full h-[85vh] bg-foundationcolorred2 text-white flex items-center px-6 lg:px-8">
      <div className="py-8 px-4max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Conéctate con TESUAM
          <br className="hidden lg:block" />
          Juntos hacemos la diferencia.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-snug">
          Siempre estamos disponibles para escucharte, responder tus inquietudes
          y trabajar juntos por una causa más grande.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#redes-sociales"
            className="bg-foundationcolorred1 text-foundationcoloryellow1 px-6 py-3 rounded-full transition-colors"
          >
            Redes Sociales
          </a>
          <a
            href="#enviar-correo"
            className="bg-foundationcolorwhite bg-opacity-70 text-foundationcolorred2 px-6 py-3 rounded-full transition-colors hover:bg-[#d3d0cc]"
          >
            Enviar un Correo
          </a>
          <a
            href="#boletin"
            className="bg-foundationcolorwhite bg-opacity-70 text-foundationcolorred1 px-6 py-3 rounded-full transition-colors hover:bg-[#d3d0cc]"
          >
            Suscribirme al Boletín
          </a>
          <a
            href="#pqrsf"
            className="bg-foundationcolorwhite bg-opacity-70 text-foundationcolorred1 px-6 py-3 rounded-full transition-colors hover:bg-[#d3d0cc]"
          >
            PQRSF
          </a>
        </div>
      </div>
    </section>
  );
}

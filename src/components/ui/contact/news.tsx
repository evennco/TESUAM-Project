"use client";

import React from "react";

export default function News() {
  return (
    <section id="boletin" className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
      <div className="py-8 px-4 max-w-5xl mx-auto">
        <span className="bg-foundationcolorred1 text-white py-1 px-3 rounded-full text-sm font-semibold">
          #TESUAM
        </span>
        <p className="text-sm text-foundationcoloryellow2 mt-2">Suscríbete a nuestro</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foundationcolorred1">
          Boletín de Novedades
        </h2>
        <p className="text-base sm:text-lg mb-4">
          Recibe inspiración, noticias y oportunidades para ayudar.
        </p>
        <p className="text-base sm:text-lg font-bold mb-4">
          Únete a nuestra comunidad y sé el primero en recibir:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Noticias y testimonios de las niñas y familias que apoyamos.</li>
          <li>Oportunidades para participar en eventos solidarios.</li>
          <li>Reflexiones y mensajes de fe para fortalecer tu espíritu.</li>
          <li>Formas prácticas de contribuir a nuestra misión.</li>
        </ul>

        <div className="flex flex-wrap items-center gap-4">
          <input
            type="email"
            placeholder="Ingresa tu correo"
            className="bg-white bg-opacity-70 rounded-full px-4 py-2 w-64 focus:outline-none"
          />
          <button className="bg-foundationcolorred1 text-white px-6 py-2 rounded-full transition-colors">
            Suscribirme
          </button>
        </div>
        <p className="text-xs mt-2 text-foundationcolorblack text-opacity-50">
          Al suscribirte al boletín de novedades estás aceptando nuestros
          términos y condiciones y nuestra política de tratamiento de datos.
        </p>
      </div>
    </section>
  );
}

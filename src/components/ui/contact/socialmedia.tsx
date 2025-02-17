"use client";

import React from "react";
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function SocialMedia() {
  return (
    <section
      id="redes-sociales"
      className="bg-foundationcolorwhite dark:bg-foundationcolorwhite"
    >
      <div className="py-8 px-4 max-w-5xl mx-auto">

        <span className="bg-foundationcolorred1 text-white py-1 px-3 rounded-full text-sm font-semibold">
          #TESUAM
        </span>

        <p className="text-sm text-foundationcoloryellow2 mt-2">
          Échale un vistazo a nuestras
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foundationcolorred1">
          Redes Sociales
        </h2>

        <p className="text-base sm:text-lg font-medium mb-4">
          <span className="mr-2" role="img" aria-label="handshake">
            🤝
          </span>
          Síguenos ahora y únete a nuestra misión.
        </p>
        <p className="text-base sm:text-lg mb-4">
          Tu voz y tu apoyo amplifican nuestro impacto.
        </p>
        <p className="text-foundationcolorred1 sm:text-lg font-semibold mb-4">
          Seguirnos en redes sociales significa:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>Conocer historias reales y testimonios de vida.</li>
          <li>Estar al tanto de nuestros proyectos y eventos.</li>
          <li>Inspirarte con mensajes de fe, solidaridad y transformación.</li>
          <li>Compartir esperanza con tu comunidad.</li>
        </ul>

        <div className="flex flex-wrap gap-6 text-3xl justify-start">
          <a href="https://youtube.com" className="bg-white text-foundationcolorred1 w-16 h-16 flex items-center justify-center rounded-lg hover:text-foundationcolorred1">
            <FaYoutube size={32} />
          </a>
          <a href="https://facebook.com" className="bg-white text-foundationcolorred1 w-16 h-16 flex items-center justify-center rounded-lg hover:text-foundationcolorred1">
            <FaFacebook size={32} />
          </a>
          <a href="https://instagram.com" className="bg-white text-foundationcolorred1 w-16 h-16 flex items-center justify-center rounded-lg hover:text-foundationcolorred1">
            <FaInstagram size={32} />
          </a>
          <a href="https://linkedin.com" className="bg-white text-foundationcolorred1 w-16 h-16 flex items-center justify-center rounded-lg hover:text-foundationcolorred1">
            <FaLinkedin size={32} />
          </a>
          <a href="https://twitter.com" className="bg-white text-foundationcolorred1 w-16 h-16 flex items-center justify-center rounded-lg hover:text-foundationcolorred1">
            <FaXTwitter size={32} />
          </a>
        </div>

      </div>
    </section>
  );
}

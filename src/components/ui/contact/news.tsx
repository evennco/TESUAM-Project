"use client";

import { useState } from "react";
import HashtagBanner from "@/components/ui/common/HashtagBanner";

export default function News() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Por favor, ingresa un correo válido.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("¡Te has suscrito exitosamente!");
        setEmail(""); 
      } else {
        setMessage(data.message || "Hubo un error al suscribirte.");
      }
    } catch (error) {
      setMessage("Error de conexión. Inténtalo de nuevo.");
    }
  };

  return (
    <section id="boletin" className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
      <HashtagBanner text="#TESUAM" />
      <div className="py-8 px-4 max-w-5xl mx-auto">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
            className="bg-white bg-opacity-70 rounded-full px-4 py-2 w-64 focus:outline-none"
          />
          <button
            onClick={handleSubscribe}
            className="bg-foundationcolorred1 text-white px-6 py-2 rounded-full transition-colors"
          >
            Suscribirme
          </button>
        </div>
        {message && <p className="text-sm mt-2 text-foundationcolorblack">{message}</p>}
        <p className="text-xs mt-2 text-foundationcolorblack text-opacity-50">
          Al suscribirte al boletín de novedades estás aceptando nuestros
          términos y condiciones y nuestra política de tratamiento de datos.
        </p>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export default function Emails() {
  return (
    <section
      id="enviar-correo"
      className="bg-foundationcolorwhite dark:bg-foundationcolorwhite"
    >
      <div className="py-8 px-4 max-w-5xl mx-auto">
        <span className="bg-foundationcolorred1 text-white py-1 px-3 rounded-full text-sm font-semibold">
          #TESUAM
        </span>
        <p className="text-sm text-foundationcoloryellow2 mt-2">
          Contáctanos o escríbenos por correo
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foundationcolorred1">
          Correos
        </h2>
        <p className="text-base sm:text-lg mb-6">
          Para responder mejor tu solicitud, selecciona el correo adecuado:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-lg shadow-sm text-left">
            <thead>
            <tr className="bg-[#D39346] bg-opacity-70 text-foundationcolorblack font-bold">
                <th className="px-4 py-3">Dirección Correo</th>
                <th className="px-4 py-3">Motivo Contacto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 text-foundationcolorblack">
              <tr>
                <td className="px-4 py-3">contacto@tesuam.org</td>
                <td className="px-4 py-3">Consultas Generales</td>
              </tr>
              <tr>
                <td className="px-4 py-3">alianzas@tesuam.org</td>
                <td className="px-4 py-3">Propuestas y Alianzas</td>
              </tr>
              <tr>
                <td className="px-4 py-3">donaciones@tesuam.org</td>
                <td className="px-4 py-3">Donaciones</td>
              </tr>
              <tr>
                <td className="px-4 py-3">prensa@tesuam.org</td>
                <td className="px-4 py-3">Prensa y Comunicaciones</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs mt-4 text-foundationcolorblack text-opacity-50">
          Recuerda que nuestros tiempos de respuesta pueden variar; responderemos
          a tu solicitud a la mayor brevedad posible.
        </p>
      </div>
    </section>
  );
}

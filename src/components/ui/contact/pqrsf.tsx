import HashtagBanner from '@/components/ui/common/HashtagBanner';

export default function Pqrsf() {
  return (
    <section id="pqrsf" className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
      <HashtagBanner text="#TESUAM" />
      <div className="py-8 px-4 max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <p className="text-sm text-foundationcoloryellow2 mt-2">
            Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foundationcolorred1">
            PQRSF
          </h2>
          <p className="mb-4">
            Queremos escucharte y mejorar continuamente.
          </p>
          <p>
            En TESUAM, valoramos tu opinión. Si tienes alguna inquietud,
            sugerencia o felicitación, por favor completa el siguiente
            formulario y te responderemos lo más pronto posible.
          </p>
        </div>
        <form className="md:w-1/2 flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Asunto"
            className="bg-gray-500 rounded-md px-4 py-2 focus:outline-none"
          />
          <input
            type="text"
            placeholder="¿Cuál es tu nombre?"
            className="bg-gray-500 rounded-md px-4 py-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="¿Cuál es tu correo?"
            className="bg-gray-500 rounded-md px-4 py-2 focus:outline-none"
          />
          <textarea
            placeholder="Escríbenos tu mensaje"
            className="bg-gray-500 rounded-md px-4 py-2 h-24 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-foundationcolorred1 text-white px-6 py-2 rounded-full transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
      <p className="text-xs max-w-5xl mx-auto text-foundationcolorblack text-opacity-50 ">
        Recuerda que nuestros tiempos de respuesta pueden variar; responderemos a
        tu solicitud a la mayor brevedad posible.
      </p>
    </section>
  );
}
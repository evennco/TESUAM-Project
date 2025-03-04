import HashtagBanner from '@/components/ui/common/HashtagBanner';
import ContactForm from "@/components/ui/common/contactform";

export default function Pqrsf() {
  return (
    <section id="pqrsf" className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
      <HashtagBanner text="#TESUAM" />
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
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
          <div className="lg:col-span-1">
            <ContactForm />
          </div>
        </div>
      <p className="text-xs max-w-5xl mx-auto text-foundationcolorblack text-opacity-50 text-end">
        Recuerda que nuestros tiempos de respuesta pueden variar; responderemos a
        tu solicitud a la mayor brevedad posible.
      </p>
      </div>
    </section>
  );
}
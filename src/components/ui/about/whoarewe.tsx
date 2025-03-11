import HashtagBanner from "../common/HashtagBanner";
import phrases from '@/assets/locales/es.json';

export default function WhoAreWe() {
  return (
    <section
      id="redes-sociales"
      className="bg-foundationcolorwhite dark:bg-foundationcolorwhite"
    >
      <div className="py-8 px-4 max-w-5xl mx-auto">
        <p className="text-sm text-foundationcoloryellow1 mt-2">
          ¿Quienes somos?
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-foundationcolorred1">
          {phrases.about.whoarewe.title}
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-foundationcoloryellow1 mt-2">
          {phrases.about.whoarewe.description}
        </p>
        <p className="text-base sm:text-lg lg:text-xl font-medium mb-4">
          <span className="mr-2" role="img" aria-label="handshake">
            ➤
          </span>
          En TESUAM, rescatamos y restauramos la vida de niñas en situación de vulnerabilidad
          en la Amazonía colombiana. A través de un modelo integral basado en educación, identidad cultural,
          atención psicológica, fe y alianzas estratégicas, les brindamos un hogar seguro, amor y
          oportunidades para transformar sus vidas. Nuestro compromiso es fortalecer su dignidad, autonomía
          y liderazgo, impulsándolos a convertirse en agentes de cambio en sus comunidades y más allá.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-5xl mx-auto text-center py-8">
        {phrases.about.whoarewe.sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-md sm:text-lg lg:text-xl text-foundationcolorred1 font-bold">{section.title}</h3>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foundationcolorred1 font-bold">{section.subtitle}</h1>
            <p className="text-base sm:text-lg lg:text-xl mb-10">{section.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
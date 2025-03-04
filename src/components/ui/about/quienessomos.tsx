import HashtagBanner from "../common/HashtagBanner";

export default function SocialMedia() {
    return (
      <section
        id="redes-sociales"
        className="bg-foundationcolorwhite dark:bg-foundationcolorwhite"
      >
        <HashtagBanner text="Tejiendo Sueños" />
        <div className="py-8 px-4 max-w-5xl mx-auto">
          <p className="text-sm text-foundationcoloryellow1 mt-2">
            ¿Quienes somos?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foundationcolorred1">
            Fundación Tejiendo Sueños en la Amazonia
          </h2>
          <p className="text-lg text-foundationcoloryellow1 mt-2">
            En TESUAM, transformamos vidas y tejemos esperanza.
          </p>
          <p className="text-base sm:text-lg font-medium mb-4">
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
      </section>
    );
  }
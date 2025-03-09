import HashtagBanner from "../common/HashtagBanner";

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
          Fundación Tejiendo Sueños en la Amazonia
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-foundationcoloryellow1 mt-2">
          En TESUAM, transformamos vidas y tejemos esperanza.
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
        <div>
          <h3 className="text-md sm:text-lg lg:text-xl text-foundationcolorred1 font-bold">Ubicados en</h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foundationcolorred1 font-bold">Guaviare, Colombia</h1>
          <p className="text-base sm:text-lg lg:text-xl mb-10">Nuestra sede de operaciones.</p>
        </div>
        <div>
          <h3 className="text-md sm:text-lg lg:text-xl text-foundationcoloryellow1 font-bold">Acciones con</h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foundationcoloryellow1 font-bold">Impacto Social</h1>
          <p className="text-base sm:text-lg lg:text-xl mb-10">Por el bienestar de nuestra comunidad.</p>
        </div>
        <div>
          <h3 className="text-md sm:text-lg lg:text-xl text-foundationcolorred1 font-bold">Revisa la</h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foundationcolorred1 font-bold">Historia de la Fundación</h1>
          <p className="text-base sm:text-lg lg:text-xl mb-10">Transformando vidas desde 2022.</p>
        </div>
        <div>
          <h3 className="text-md sm:text-lg lg:text-xl text-foundationcoloryellow1 font-bold">Infórmate sobre</h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foundationcoloryellow1 font-bold">Donaciones</h1>
          <p className="text-base sm:text-lg lg:text-xl">Tienes el poder de cambiar una vida.</p>
        </div>
        <div>
          <h3 className="text-md sm:text-lg lg:text-xl text-foundationcolorred1 font-bold">Trabajando por</h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foundationcolorred1 font-bold">Desarrollo Sostenible</h1>
          <p className="text-base sm:text-lg lg:text-xl">Juntos construimos un mejor país.</p>
        </div>
        <div>
          <h3 className="text-md sm:text-lg lg:text-xl text-foundationcoloryellow1 font-bold">Infórmate sobre</h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foundationcoloryellow1 font-bold">Voluntariado</h1>
          <p className="text-base sm:text-lg lg:text-xl">Y otras maneras de ayudar.</p>
        </div>
      </div>
    </section>
  );
}
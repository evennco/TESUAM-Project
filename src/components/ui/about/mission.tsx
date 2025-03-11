import HashtagBanner from "../common/HashtagBanner";
import phrases from '@/assets/locales/es.json';

export default function Mission() {
    return (
      <section
        id="redes-sociales"
        className="bg-foundationcolorwhite dark:bg-foundationcolorwhite"
      >
        <HashtagBanner text="Mision" />
        <div className="py-8 px-4 max-w-5xl mx-auto">
          <p className="text-4x1 text-foundationcoloryellow1 mt-2">
            Nuestro proposito y accion socual se refleja con
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foundationcolorred1">
            {phrases.about.mission.title}
          </h2>
          <p className="text-lg text-foundationcoloryellow1 mt-2">
            Mision Tejiendo Sueños en la Amazonía
          </p>
          <p className="text-base sm:text-lg font-medium mb-4">
            <span className="mr-2" role="img" aria-label="handshake">
              ➤
            </span>
            {phrases.about.mission.description}
          </p>
        </div>
      </section>
    );
}
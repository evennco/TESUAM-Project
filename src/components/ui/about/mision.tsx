import HashtagBanner from "../common/HashtagBanner";

export default function SocialMedia() {
    return (
      <section
        id="redes-sociales"
        className="bg-foundationcolorwhite dark:bg-foundationcolorwhite"
      >
        <HashtagBanner text="Mision" />
        <div className="py-8 px-4 max-w-5xl mx-auto">
          <p className="text-sm text-foundationcoloryellow1 mt-2">
            Nuestro proposito y accion socual se refleja con
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 text-foundationcolorred1">
            Nuestra Mision
          </h2>
          <p className="text-lg text-foundationcoloryellow1 mt-2">
            Mision Tejiendo Sueños en la Amazonía
          </p>
          <p className="text-base sm:text-lg font-medium mb-4">
            <span className="mr-2" role="img" aria-label="handshake">
              ➤
            </span>
            Proveer un entorno de amor, seguridad y reconstrucción para niñas y adolescentes víctimas de
            distintos tipos de violencia, enfocado inicialmente en la Amazonía  colombiana. Nuestra labor
            se fundamenta en el fortalecimiento de la identidad cultural, la educación inclusiva y la
            protección integral, con el compromiso de  articular esfuerzos entre la sociedad civil,
            la cooperación internacional y el sector público, para que esta respuesta sea replicada en todo
            el país y, gradualmente,  en las comunidades más desatendidas de América.
          </p>
        </div>
      </section>
    );
  }
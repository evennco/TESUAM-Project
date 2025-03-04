import comedor1 from "../../../../public/main/comedor1.jpg";
import vivita_galpones from "../../../../public/main/vivita a galpones.jpg";
import actividades_ninas from "../../../../public/main/actividades_ninas.jpg";
import ProjectsCards from '../common/projectscards';
import BigMiniTitle from "../common/bigminititle";
import phrases from '@/assets/locales/es.json';
const Projects: React.FC = () => {
    return (
        <section className="dark:bg-foundationcolorwhite bg-foundationcolorwhite">
            <div className="pb-8 px-4 mx-auto max-w-screen-xl lg:pb-16">
                <BigMiniTitle title = {phrases.titles[1].projectsyellow || "Default Title"} subtitle={phrases.titles[1].projectsred || "Default Subtitle"} />
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <ProjectsCards image={comedor1} title="Panadería: Sabores de Nuestra Tierra" text="En TESUAM, nuestra panadería transforma ingredientes amazónicos en pan y repostería artesanal para consumo propio." />
                    <ProjectsCards image={actividades_ninas} title="Educación Formal" text="Cada día, nuestras niñas asisten a una escuela rural que les ofrece educación de calidad, empoderando su futuro" />
                    <ProjectsCards image={vivita_galpones} title="Educación Formal" text="Cada día, nuestras niñas asisten a una escuela rural que les ofrece educación de calidad, empoderando su futuro" />
                </div>
            </div>
        </section>
    )
}
export default Projects;
import comedor1 from "../../../../public/main/comedor1.jpg";
import vivita_galpones from "../../../../public/main/vivita a galpones.jpg";
import actividades_ninas from "../../../../public/main/actividades_ninas.jpg";
import ProjectsCards from '../common/projectscards';
import BigMiniTitle from "../common/bigminititle";
import phrases from '@/assets/locales/es.json';
const Projects: React.FC = () => {
    return (
        <section className="bg-white dark:bg-foundationcolorwhite">
            <div className="pb-8 px-4 mx-auto max-w-screen-xl lg:pb-16">
                <BigMiniTitle title = {phrases.titles[1].projectsyellow || "Default Title"} subtitle={phrases.titles[1].projectsred || "Default Subtitle"} />
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <ProjectsCards image={comedor1} title="titulo 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique suscipit metus, sed sagittis sem pellentesque ut. Sed sit amet nulla euismod odio finibus pharetra volutpat nec tellus." />
                    <ProjectsCards image={actividades_ninas} title="titulo 2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique suscipit metus, sed sagittis sem pellentesque ut. Sed sit amet nulla euismod odio finibus pharetra volutpat nec tellus." />
                    <ProjectsCards image={vivita_galpones} title="titulo 3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique suscipit metus, sed sagittis sem pellentesque ut. Sed sit amet nulla euismod odio finibus pharetra volutpat nec tellus." />
                </div>
            </div>
        </section>
    )
}
export default Projects;
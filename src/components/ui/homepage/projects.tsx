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
                <BigMiniTitle title={phrases.homepage.projects.titles[0].projectsyellow || "Default Title"} subtitle={phrases.homepage.projects.titles[0].projectsred || "Default Subtitle"} />
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {phrases.homepage.projects.cards.map((card, index) => (
                        <ProjectsCards
                            key={index}
                            image={index === 0 ? comedor1 : index === 1 ? actividades_ninas : vivita_galpones}
                            title={card.title}
                            text={card.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
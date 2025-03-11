"use server"
import phrases from '@/assets/locales/es.json';
import DonateButton from '@/components/ui/common/DonateButton';
import MoreButton from '@/components/ui/common/MoreButton';

export default async function Carrousel() {
    return (
        <section className="w-full h-[85vh] bg-foundationcolorred2 text-white flex items-end mb-5">
            <footer className="bg-foundationcolorred2 text-white w-full">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center px-4 sm:px-10 py-10">
                    <div className="flex flex-col items-start mb-4 lg:mb-0">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{phrases.about.carrousel.location}</h1>
                        <p className="text-lg sm:text-xl lg:text-2xl">{phrases.about.carrousel.address}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <MoreButton text={phrases.about.carrousel.buttons[0].more || 'Redes Sociales'} />
                        <DonateButton text={phrases.about.carrousel.buttons[1].donate || 'Contáctanos'} />
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between px-4 sm:px-10 py-10 bg-foundationcolorred1">
                    {phrases.about.carrousel.sections.map((section, index) => (
                        <div key={index} className="mb-4 lg:mb-0">
                            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">{section.title}</h2>
                            <p className="text-sm sm:text-base lg:text-lg">{section.description}</p>
                        </div>
                    ))}
                </div>
            </footer>
        </section>
    );
}
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
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Amazonia, Colombia</h1>
                        <p className="text-lg sm:text-xl lg:text-2xl">📍 San José del Guaviare, Guaviare</p>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <MoreButton text={phrases.buttons[0].more || 'Redes Sociales'} />
                        <DonateButton text={phrases.buttons[1].donate || 'Contáctanos'} />
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between px-4 sm:px-10 py-10 bg-foundationcolorred1">
                    <div className="mb-4 lg:mb-0">
                        <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">Nuestra Misión</h2>
                        <p className="text-sm sm:text-base lg:text-lg">Conoce nuestra fundación y <br /> nuestro impacto en las comunidades.</p>
                    </div>
                    <div className="mb-4 lg:mb-0">
                        <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">Nuestro Equipo</h2>
                        <p className="text-sm sm:text-base lg:text-lg">Conoce las personas que contribuyen <br /> diariamente a nuestra misión y propósito.</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl">Nuestra Fundación</h2>
                        <p className="text-sm sm:text-base lg:text-lg">Conoce notas de prensa e imágenes <br /> de nuestra acción social.</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}
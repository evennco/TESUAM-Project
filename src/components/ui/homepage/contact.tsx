import Image from "next/image";
import carrousel1 from "../../../../public/carrousel1.png";
import BigTitle from "../common/bigtitle";
import MoreButton from '@/components/ui/common/MoreButton';

const Contact = () => {
    return (
        <section className="bg-foundationcolorwhite grid grid-cols-1 md:grid-cols-2 gap-1 md:pr-0 sm:pr-0 py-4 xl:pr-4">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <BigTitle title="Comunicate con nosotros" subtitle="para darte información" />
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="text" className="block mb-2 text-md font-medium text-foundationcolorblack text-left">Asunto</label>
                        <input type="text" id="text" className="shadow-sm bg-gray-500 border text-foundationcolorblack text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Petición para..." required />
                    </div>
                    <div>
                        <label htmlFor="text" className="block mb-2 text-md font-medium text-foundationcolorblack text-left">Nombre</label>
                        <input type="text" id="text" className="shadow-sm bg-gray-500 border text-foundationcolorblack text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Juanito alimaña" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-md font-medium text-foundationcolorblack text-left">Correo</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-500 border text-foundationcolorblack text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Tucorreo@gmail.com" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-foundationcolorblack text-left">Mensaje</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-foundationcolorblack bg-gray-500 rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 resize-none" placeholder="Dejanos tu comentario"></textarea>
                    </div>
                    <MoreButton text="Enviar" />
                </form>
            </div>
            <div className="flex items-center justify-center sm:w-fit md:w-fit w-full h-full">
                <Image src={carrousel1} alt="Contact Image" className="sm:w-fit w-full h-fit rounded-lg" />
            </div>
        </section>
    );
};

export default Contact;
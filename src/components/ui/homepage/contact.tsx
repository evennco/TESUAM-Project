import Image from "next/image";
import carrousel1 from "../../../../public/carrousel1.png";
import BigTitle from "../common/bigtitle";
import MoreButton from '@/components/ui/common/MoreButton';
import ContactForm from "@/components/ui/common/contactform";
import phrases from '@/assets/locales/es.json';

const Contact = () => {
    return (
        <section className="bg-white dark:bg-foundationcolorwhite">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 bg-white dark:bg-foundationcolorwhite">
                <BigTitle title={phrases.titles[3].volunteeryellow || "Default Title"} subtitle={phrases.titles[3].volunteerred || "Default Subtitle"} />
            <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
                <ContactForm />
                <Image src={carrousel1} alt="Contact Image" className="sm:w-fit w-full h-fit rounded-lg" />
            </div>
        </div>
        </section>
    );
};

export default Contact;
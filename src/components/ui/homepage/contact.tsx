import Image from "next/image";
import carrousel1 from "../../../../public/carrousel1.png";
import BigTitle from "../common/bigtitle";
import MoreButton from '@/components/ui/common/MoreButton';
import ContactForm from "@/components/ui/common/contactform";

const Contact = () => {
    return (
        <section className="bg-foundationcolorwhite grid grid-cols-1 md:grid-cols-2 gap-1 md:pr-0 sm:pr-0 py-4 xl:pr-4">
            <ContactForm />
            <div className="flex items-center justify-center sm:w-fit md:w-fit w-full h-full">
                <Image src={carrousel1} alt="Contact Image" className="sm:w-fit w-full h-fit rounded-lg" />
            </div>
        </section>
    );
};

export default Contact;
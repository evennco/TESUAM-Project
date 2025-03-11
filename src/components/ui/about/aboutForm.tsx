import React from 'react';
import BigTitle from "@/components/ui/common/bigtitle";
import phrases from '@/assets/locales/es.json';
import { volunteer } from '@/lib/faqs';
import FAQ from '@/components/ui/common/FAQ'
import ContactForm from '@/components/ui/common/contactform';

const AboutForm: React.FC = () => {

    return (
        <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <BigTitle title={phrases.about.aboutForm.title || "Default Title"} subtitle={phrases.about.aboutForm.subtitle || "Default Subtitle"} />
                <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <ContactForm />
                    <FAQ data={volunteer} />
                </div>
            </div>
        </section>
    );
}

export default AboutForm;
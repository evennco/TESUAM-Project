"use client"
import BigTitle from '@/components/ui/common/bigtitle';
import { questionfaqs, volunteer } from '@/lib/faqshomepage';
import FAQ from '@/components/ui/common/FAQ';
import phrases from '@/assets/locales/es.json';

const Faq = () => {
    return (
        <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <BigTitle title={phrases.homepage.faq.title} subtitle={phrases.homepage.faq.subtitle} />
                <div className="grid pt-8 text-left border-foundationcolorblack dark:border-foundationcolorblack border-foundationcolorblack md:gap-16 md:grid-cols-2">
                    <FAQ data={questionfaqs} />
                    <FAQ data={volunteer} />
                </div>
            </div>
        </section>
    );
};

export default Faq;
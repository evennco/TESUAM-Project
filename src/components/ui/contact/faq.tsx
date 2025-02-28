"use client"
import BigTitle from '@/components/ui/common/bigtitle';
import { questionfaqs } from '@/lib/faqs';
import FAQ from '@/components/ui/common/FAQ';
const Faq = () => {
    return (
        <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
                <BigTitle title="Respuestas a" subtitle="Preguntas de interés" />
                <div className="grid pt-1 text-left border-foundationcolorblack dark:border-foundationcolorblack md:gap-16 md:grid-cols-2">
                    <FAQ data={questionfaqs} />
                    <FAQ data={questionfaqs} />
                </div>
            </div>
        </section>
    );
};

export default Faq;
"use client"
import BigTitle from '@/components/ui/common/bigtitle';
import FAQ from '@/components/ui/common/FAQ';
import phrases from '@/assets/locales/es.json';

// Definición de las propiedades
interface FaqProps {
  title?: string;
  subtitle?: string;
  data?: { question: string; answer: string }[];
}

const Faq: React.FC<FaqProps> = ({ title, subtitle, data }) => {
    const faqData = data || phrases.homepage.faq.data || [];
    const midPoint = Math.ceil(faqData.length / 2);
    const firstHalf = faqData.slice(0, midPoint);
    const secondHalf = faqData.slice(midPoint);
  
  return (
    <section className="bg-foundationcolorwhite dark:bg-foundationcolorwhite">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <BigTitle 
          title={title || phrases.homepage.faq.title} 
          subtitle={subtitle || phrases.homepage.faq.subtitle} 
        />
        <div className="grid pt-8 text-left md:gap-16 md:grid-cols-2">
            <FAQ data={firstHalf} />
            <FAQ data={secondHalf} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
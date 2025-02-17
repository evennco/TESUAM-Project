import Carrousel from '@/components/ui/contact/carrousel';
import SocialMedia from '@/components/ui/contact/socialmedia';
import Emails from '@/components/ui/contact/emails';
import News from '@/components/ui/contact/news';
import Faq from '@/components/ui/contact/faq';
import Pqrsf from '@/components/ui/contact/pqrsf';

export default function ContactPage() {
  return (
    <main>
      <Carrousel />
      <SocialMedia />
      <Emails />
      <News />
      <Faq />
      <Pqrsf />
    </main>
  );
}

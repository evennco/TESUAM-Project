"use client"
import React, { memo } from 'react';
import SupportBanner from '@/components/ui/support/supportbanner';
import SupportDonation from '@/components/ui/support/Donationsupport';
import SupportDonateMoney from '@/components/ui/support/DonationMoney';
import HashtagBanner from '@/components/ui/common/HashtagBanner';
import SupportVolunteer from '@/components/ui/support/SupportVolunteer';
import SupportVideos from '@/components/ui/support/SupportVideos';
import Faq from '@/components/ui/homepage/faq';
import SupportForm from '@/components/ui/support/SupportForm';
import {imagesSet1} from '@/lib/cardslinksimages';
import Links from '@/components/ui/common/LinksComponent';
import BigTitle from '@/components/ui/common/bigtitle';
import phrases from '@/assets/locales/es.json';


const Support: React.FC = () => {
    return (
        <main className="flex flex-col">
          <div className="w-full flex-grow bg-foundationcolorwhite dark:bg-foundationcolorwhite">
            <SupportBanner />
            <SupportDonation />
            <HashtagBanner text="#TejiendoCambios" />
            <SupportDonateMoney />
            <HashtagBanner text="#TejiendoCambios" />
            <SupportVolunteer />
            <BigTitle title="Sé parte del cambio viviendo la experiencia" subtitle="TESUAM en la Amazonía colombiana." />
            <SupportVideos />
            <Faq 
              title={phrases.support.faq.title} 
              subtitle={phrases.support.faq.subtitle} 
              data={phrases.support.faq.data} 
            />
            <BigTitle title="Enlaces de interés" subtitle="" />
            <Links images={imagesSet1} />
            <SupportForm />
          </div>
        </main>
    );
};

export default memo(Support);
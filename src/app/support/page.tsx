"use client"
import React, { memo } from 'react';
import SupportBanner from '@/components/ui/support/supportbanner';
import SupportDonation from '@/components/ui/support/Donationsupport';
import SupportButtons from '@/components/ui/support/Donationsbuttons';
import SupportDonateMoney from '@/components/ui/support/DonationMoney';
import HashtagBanner from '@/components/ui/common/HashtagBanner';
import SupportVolunteer from '@/components/ui/support/SupportVolunteer';
import SupportVideos from '@/components/ui/support/SupportVideos';
import Faq from '@/components/ui/homepage/faq';
import SupportForm from '@/components/ui/support/SupportForm';


const Support: React.FC = () => {
    return (
        <main className="flex flex-col">
        <div className="w-full flex-grow bg-white dark:bg-foundationcolorwhite">
            <SupportBanner />
            <SupportDonation />
            <SupportButtons />
            <HashtagBanner text="#TejiendoCambios" />
            <SupportDonateMoney />
            <HashtagBanner text="#TejiendoCambios" />
            <SupportVolunteer />
            <SupportVideos />
            <Faq />
            <SupportForm />
        </div>
      </main>
    );
};

export default memo(Support);
"use client"
import React, { memo } from 'react';
import SupportBanner from '@/components/ui/support/supportbanner';
import SupportDonation from '@/components/ui/support/Donationsupport';
import SupportButtons from '@/components/ui/support/Donationsbuttons';
import SupportDonateMoney from '@/components/ui/support/DonationMoney';
import HashtagBanner from '@/components/ui/common/HashtagBanner';


const Support: React.FC = () => {
    return (
        <main className="flex flex-col">
        <div className="w-full flex-grow bg-white dark:bg-foundationcolorwhite">
            <SupportBanner />
            <SupportDonation />
            <HashtagBanner text="#TejiendoCambios" />
            <SupportButtons />
            <SupportDonateMoney />
        </div>
      </main>
    );
};

export default memo(Support);
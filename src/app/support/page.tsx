"use client"
import React, { memo } from 'react';
import SupportBanner from '@/components/ui/support/supportbanner';
import SupportDonation from '@/components/ui/support/Donationsupport';
import SupportButtons from '@/components/ui/support/Donationsbuttons';
import SupportDonateMoney from '@/components/ui/support/DonationMoney';



const Support: React.FC = () => {
    return (
        <main className="flex flex-col text-center justify-center items-center">
        <div className="w-full flex-grow">
            <SupportBanner />
            <SupportDonation />
            <SupportButtons />
            <SupportDonateMoney />
        </div>
      </main>
    );
};

export default memo(Support);
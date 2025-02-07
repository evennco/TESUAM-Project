"use client"
import React, { memo } from 'react';
import SupportBanner from '@/components/ui/support/supportbanner';



const Support: React.FC = () => {
    return (
        <main className="flex flex-col text-center justify-center items-center">
        <div className="w-full flex-grow">
            <SupportBanner />
        </div>
      </main>
    );
};

export default memo(Support);
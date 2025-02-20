import React from 'react';
import { HashtagBannerProps } from '@/lib/definitions';

const HashtagBanner: React.FC<HashtagBannerProps> = ({ text }) => {
    return (
        <div className="bg-white dark:bg-foundationcolorwhite">
            <div className='px-4 mx-auto max-w-screen-xl'>
                <span className="bg-foundationcolorred1 text-white py-1 px-3 rounded-full text-sm font-semibold">
                    {text}
                </span>
            </div>
        </div>
    );
};
export default HashtagBanner;
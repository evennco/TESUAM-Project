import React from 'react';
import { DonateButtonProps } from '@/lib/definitions';

const DonateButton: React.FC<DonateButtonProps> = ({ text }) => {
  return (
    <button className='bg-white hover:bg-foundationcolorred1 dark:text-foundationcolorred1 focus:ring-4 font-medium rounded-full text-sm w-full dark:hover:bg-foundationcolorred1 md:px-6 md:py-4 px-4 py-2 sm:w-full md:w-full focus:outline-none dark:focus:ring-foundationcolorred1 dark:hover:text-foundationcoloryellow1 border-2 border-foundationcolorred1'>
      {text}
    </button>
  );
};

export default DonateButton;
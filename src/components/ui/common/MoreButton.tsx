import React from 'react';
import { MoreButtonProps } from '@/lib/definitions';

const MoreButton: React.FC<MoreButtonProps> = ({ text }) => {
  return (
    <button className='bg-foundationcolorred1 hover:bg-foundationcoloryellow2 text-gray-800 dark:text-foundationcoloryellow2 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm md:px-6 md:py-4 px-4 py-2 sm:w-full md:w-full dark:hover:bg-white dark:hover:text-foundationcolorred1 focus:outline-none dark:focus:ring-foundationcolorred1 border-2 hover:border-foundationcolorred1'>
      {text}
    </button>
  );
};

export default MoreButton;
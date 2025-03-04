import React from 'react';
import Image from 'next/image';
import MoreButton from '@/components/ui/common/MoreButton';
import { LinksProps } from '@/lib/definitions';

const Links: React.FC<LinksProps> = ({ images }) => {
  return (
    <section className="bg-white dark:bg-foundationcolorwhite">
      <div className="pb-8 px-4 mx-auto max-w-screen-xl lg:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full h-64">
                <Image
                  src={image.src}
                  alt={`Image ${index}`}
                  fill
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4 w-full">
                <MoreButton text="Conoce más" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;
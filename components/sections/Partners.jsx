import React from 'react';
import Image from 'next/image';

const Partners = ({}) => {
  return (
    <div id="partners" className="">
      <div className="container mx-auto px-7 lg:px-10">
        <div className="grid grid-cols-3 gap-x-7 max-w-2xl mx-auto">
          <div>
            <Image
              src="/images/logo-1.png"
              width={250}
              height={120}
              className="object-contain grayscale hover:grayscale-0"
            />
          </div>
          <Image
            src="/images/logo-2.png"
            width={360}
            height={120}
            className="object-contain grayscale hover:grayscale-0"
          />
          <Image
            src="/images/logo-3.png"
            width={300}
            height={120}
            className="object-contain grayscale hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;

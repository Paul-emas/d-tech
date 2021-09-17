import React from 'react';
import Image from 'next/image';

import { CameraIcon } from '@heroicons/react/outline';

const ProfileCard = ({ children }) => {
  return (
    <div className="w-full bg-white shadowed overflow-hidden rounded-2xl clear-both">
      <div className="h-80 2xl:h-96 w-full bg-cover relative">
        <div className="overlay w-full h-full absolute bg-black opacity-40 z-10"></div>
        <Image src="/images/user-profile-banner.jpg" layout="fill" className="object-cover object-left-top" />
      </div>
      <div className="content px-10">
        <div className="user-details flex z-20 -mt-16">
          <div className="w-32 rounded-full gradient overflow-hidden h-32 z-20 object-cover relative">
            <Image src="/images/profile.jpg" layout="fill" className="object-cover object-top" />
          </div>
          <div className="ml-7 z-20">
            <h1 className="text-white mt-3 text-2xl">James Smith</h1>
            {children}
          </div>
          <button className="bg-gray-700 ml-auto z-20 h-12 py-3 rounded-lg px-5 flex text-white">
            <CameraIcon className="w-6 h-6" />
            <span className="text-base ml-1 mt-0.5">Edit Cover</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

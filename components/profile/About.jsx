import React from 'react';
import Image from 'next/image';

import { MailIcon, PhoneIcon, HomeIcon, MapIcon } from '@heroicons/react/outline';

const About = ({}) => {
  return (
    <div className="rounded-2xl shadowed mt-10 pb-8 bg-white">
      <h1 className="pt-4 px-10 text-gray-800 font-bold text-xl">About</h1>
      <p className="text-gray-500 px-10 py-5 border-b ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis libero quasi ratione, sit harum
        eveniet molestiae aliquid dolor, quas soluta quae facere!
      </p>
      <div className="grid grid-cols-2 gap-x-6 py-3 px-10">
        <div className="flex py-5 border-b">
          <div>
            <div className="w-12 h-12 rounded-full font-bold text-center py-3 text-white gradient">FD</div>
          </div>
          <div className="ml-3">
            <h2 className="text-gray-700">
              Frontend Developer at <span className="text-gray-900 font-semibold">Lagos Innovates</span>
            </h2>
            <p className="text-gray-400 text-sm mt-0.5">Past: UI/UX Designer at BookingsAfrica</p>
          </div>
        </div>
        <div className="flex items-center py-5 border-b">
          <div>
            <Image
              src="/images/profile-2.jpg"
              width={60}
              height={60}
              className="w-12 h-12 object-cover object-top-center rounded-full gradient"
            />
          </div>
          <div className="ml-3">
            <h2 className="text-gray-700">
              Frontend Developer at <span className="text-gray-900 font-semibold">Lagos Innovates</span>
            </h2>
            <p className="text-gray-400 text-sm mt-0.5">Past: UI/UX Designer at BookingsAfrica</p>
          </div>
        </div>
        <div className="flex items-center py-5 border-b">
          <div className="w-12 h-12 rounded-full text-center py-2.5 text-white gradient">
            {' '}
            <MapIcon className="w-7 h-7 text-white mx-auto" />
          </div>
          <div className="ml-3">
            <h2 className="text-gray-700">Lagos, Nigeria</h2>
          </div>
        </div>
        <div className="flex items-center py-5 border-b">
          <div className="w-12 h-12 rounded-full text-center py-2.5 text-white gradient">
            {' '}
            <PhoneIcon className="w-7 h-7 text-white mx-auto" />
          </div>
          <div className="ml-3">
            <h2 className="text-gray-700">
              Phone: <span className="text-gray-900 font-semibold">+234 7059 42 1153</span>
            </h2>
            <p className="text-gray-400 text-sm mt-0.5">Phone 2: +234 9023 22 1237</p>
          </div>
        </div>
        <div className="flex items-center py-5 border-b">
          <div className="w-12 h-12 rounded-full text-center py-2.5 text-white gradient">
            {' '}
            <MailIcon className="w-7 h-7 text-white mx-auto" />
          </div>
          <div className="ml-3">
            <h2 className="text-gray-700">Email: jamessmith@gmail.com</h2>
          </div>
        </div>
        <div className="flex items-center py-5 border-b">
          <div>
            <div className="w-12 h-12 rounded-full text-center py-2.5 text-white gradient">
              {' '}
              <HomeIcon className="w-7 h-7 text-white mx-auto" />
            </div>
          </div>
          <div className="ml-3">
            <h2 className="text-gray-700">
              Address: <span className="text-gray-900 font-semibold">St Anderson, Igando Lagos express way, </span>
            </h2>
          </div>
        </div>
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
        <div className="div"></div>
      </div>
    </div>
  );
};

export default About;

import React, { useState } from 'react';
import Button from '../Button';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Menu = ({}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div onClick={() => setOpenMenu(!openMenu)} className="flex lg:hidden items-center">
        {openMenu ? <XIcon className="w-7 h-7 text-gray-600" /> : <MenuIcon className="w-7 h-7 text-gray-600" />}
      </div>
      <div
        className={`${
          openMenu ? 'h-auto py-10' : 'h-0 lg:h-auto'
        } flex flex-col xl:flex-row items-start overflow-hidden duration-300 absolute xl:relative w-full xl:w-auto left-0 top-16 px-10 xl:top-0 bg-white xl:bg-transparent gap-x-5 text-base font-medium text-gray-500 xl:items-center`}
      >
        <div className="flex flex-col xl:flex-row gap-y-4 xl:gap-x-7">
          <a href="/#explore" className="hover:text-gray-600">
            Explore
          </a>
          <a className="hover:text-gray-600">FAQs</a>
          <a href="/#about" className="hover:text-gray-600">
            About us
          </a>
          <a className="hover:text-gray-600">Contact us</a>
        </div>
        <div className="flex flex-col mt-10 xl:mt-0 w-full xl:w-auto xl:flex-row gap-y-6 gap-x-4">
          <Link href="/login">
            <a>
              <Button className="bg-primary w-full xl:w-auto border-primary text-white">Login</Button>
            </a>
          </Link>
          <Link href="/register">
            <a>
              <Button className="border-primary w-full xl:w-auto text-primary">Register</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;

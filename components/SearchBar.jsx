import React from 'react';
import Image from 'next/image';

import NavBar from './Navbar';
import { SearchIcon, GlobeAltIcon, BellIcon, ChatAltIcon, ChevronDownIcon } from '@heroicons/react/outline';

const SearchBar = ({}) => {
  return (
    <NavBar align="justify-between" className="border-b bg-white">
      <div className="flex justify-end">
        <div className="flex w-full mr-5">
          <div className="w-96 flex relative">
            <SearchIcon className="w-6 h-6 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search here for something ..."
              className="py-2.5 px-11 w-full outline-none border rounded-lg"
            />
          </div>
        </div>
        <div className="flex gap-x-3 items-center w-full">
          <GlobeAltIcon className="w-7 h-7 text-gray-500 hover:text-primary cursor-pointer" />
          <div className="relative">
            <span className="counter w-6 h-6 absolute -right-2 -top-2.5 text-xs py-0.5  border-white border-2 text-white text-center rounded-full bg-primary">
              14
            </span>
            <BellIcon className="w-7 h-7 text-gray-500 cursor-pointer hover:text-primary" />
          </div>
          <ChatAltIcon className="w-7 h-7 text-gray-500 cursor-pointer hover:text-primary" />
          <div className="profile cursor-pointer flex ml-3">
            <div className="w-12 h-12 relative shadow-2xl rounded-2xl">
              <Image src="/images/profile.jpg" layout="fill" className="object-cover rounded-2xl" />
            </div>
            <div className="text-md mt-3 flex ml-2 font-semibold">
              <span>James Smith</span>
              <ChevronDownIcon className="w-6 h-6 ml-1 text-gray-500 cursor-pointer hover:text-primary" />
            </div>
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default SearchBar;

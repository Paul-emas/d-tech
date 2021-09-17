import React from 'react';
import Link from 'next/link';

const routes = [
  { name: 'Dashboard', link: '' },
  { name: 'Mentors', link: '' },
  { name: 'Events', link: '' },
  { name: 'Services', link: '' },
  { name: 'Profile', link: '', active: true },
  { name: 'Settings', link: '' },
];

const SideBar = ({}) => {
  return (
    <div className="sticky h-screen sidebar bg-white border-r">
      <div className="pt-5">
        <div className="sticky h-screen sidebar bg-white border-r">
          <div className="caption py-5 text-sm text-gray-400">Menu</div>
          <div className="links flex flex-col gap-y-4">
            {routes.map(({ name, link, active }) => (
              <Link href={link} key={name}>
                <a className={`${active ? 'text-primary font-medium' : 'text-gray-700 hover:text-black'}`}>{name}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

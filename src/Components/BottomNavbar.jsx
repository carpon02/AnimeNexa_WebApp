import React from 'react';
import { HomeIcon, VideoCameraIcon, PlusIcon, BellIcon, UserGroupIcon, MenuIcon } from '@heroicons/react/solid';

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white text-gray-500 flex justify-around items-center py-3  z-50">
      <HomeIcon className="w-6 h-6 text-gray-500" />
      <VideoCameraIcon className="w-6 h-6" />
      <div className="bg-purple-600 p-2 rounded-full">
        <PlusIcon className="w-6 h-6 text-white" />
      </div>
      <BellIcon className="w-6 h-6" />
      <UserGroupIcon className="w-6 h-6" />
      <MenuIcon className="w-6 h-6" />
    </div>
  );
};

export default BottomNavbar;

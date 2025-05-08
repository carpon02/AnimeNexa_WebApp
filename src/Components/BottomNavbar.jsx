import React from 'react';
import { HomeIcon, PlusIcon } from '@heroicons/react/solid';
import { CiSearch } from "react-icons/ci";
import { FaMessage } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const BottomNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate()
  
  // Check if the user is viewing a specific message by looking for a dynamic route parameter (e.g. /messages/:messageId)
  const isViewingMessage = location.pathname.includes('/messages/') 

  // If a specific message is being viewed, hide the BottomNavbar
  if (isViewingMessage) {
    return null;
  }

  const isReelsPage = location.pathname === '/reels';
  const isCreatePotsPage = location.pathname === '/create-post';
  if (isCreatePotsPage) {
    return null;
  }

  const navItems = [
    { to: '/news-feed', icon: <HomeIcon className="w-6 h-6" />, label: 'Home' },
    { to: '/reels', icon: <CiSearch className="w-6 h-6" />, label: 'Discover' },
    { to: '/messages', icon: <FaMessage className="w-6 h-6" />, label: 'Messages' },
    { to: '/profile-view', icon: <IoPersonSharp className="w-6 h-6" />, label: 'Profile' },
  ];

  

  return (
    <div className={`fixed bottom-0 left-0 right-0 flex justify-around items-center py-3 mx-5 z-50 
      ${isReelsPage ? 'bg-transparent text-white' : 'bg-white text-gray-500 border-t border-gray-200'}`}
    >
      {navItems.map((item, index) => (
        index === 2 ? (
          <React.Fragment key="plus-button">
            <div className="bg-purple-600 p-2 rounded-full mt-4 shadow-md" onClick={() => navigate("/create-post")} >
              <PlusIcon className="w-12 h-6 text-white" />
            </div>
            <NavLink
              to={item.to}
              className={`flex flex-col items-center justify-center ${location.pathname === item.to ? 'text-purple-600' : isReelsPage ? 'text-white hover:text-purple-300' : 'text-gray-500 hover:text-purple-600'}`}
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </NavLink>
          </React.Fragment>
        ) : (
          <NavLink
            key={item.to}
            to={item.to}
            className={`flex flex-col items-center justify-center ${location.pathname === item.to ? 'text-purple-600' : isReelsPage ? 'text-white hover:text-purple-300' : 'text-gray-500 hover:text-purple-600'}`}
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </NavLink>
        )
      ))}
    </div>
  );
};

export default BottomNavbar;

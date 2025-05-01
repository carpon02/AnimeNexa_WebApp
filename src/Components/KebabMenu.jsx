import { useState, useEffect, useRef } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiUserPlus, FiSettings, FiUsers } from 'react-icons/fi';
import { MdArchive, MdBlock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function KebabMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Kebab Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
      >
        <BsThreeDotsVertical size={20} />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border z-50 animate-fadeIn">
          <ul className="text-gray-700 text-sm py-1">
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate("/messages/add-friends")}>
              <FiUserPlus className="mr-2" />
              Add Friends
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate("/messages/create-groups")}>
              <FiUsers className="mr-2" />
              Create Group
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate("/messages/archive-chats")}>
              <MdArchive className="mr-2" />
              Archived Chats
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer" onClick={() => navigate("/messages/blocked-users")}>
              <MdBlock className="mr-2" />
              Blocked Users
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate("/messages/settings")}>
              <FiSettings className="mr-2" />
              Settings
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

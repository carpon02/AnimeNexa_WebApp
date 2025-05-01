import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaSearch,
  FaSignOutAlt,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import { FaChevronRight } from "react-icons/fa6";

const Settings = () => {
  const settingsOptions = [
    { name: "Account", icon: <img src={assets.account} alt="" />, path: "/messages/settings/account" },
    { name: "Notifications", icon: <img src={assets.notification} alt="" />, path: "/messages/settings/notifications" },
    { name: "Content Preference", icon: <img src={assets.content} alt="" />, path: "/messages/settings/content" },
    { name: "Privacy", icon: <img src={assets.privacy} alt="" />, path: "/messages/settings/privacy" },
    { name: "Rewards and Blockchain", icon: <img src={assets.rewards} alt="" />, path: "/messages/settings/rewards" },
    { name: "Community Features", icon: <img src={assets.community} alt="" />, path: "/messages/settings/community" },
    { name: "Display", icon: <img src={assets.display} alt="" />, path: "/messages/settings/display" },
    { name: "Help & Support", icon: <img src={assets.help} alt="" />, path: "/messages/settings/help" },
    { name: "About AnimeNexa", icon: <img src={assets.about} alt="" />, path: "/messages/settings/about" },
  ]
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex items-start justify-center">
      <div className="bg-white rounded-t-xl p-4 w-full h-full flex flex-col">
        <div className="flex items-center mb-4">
          <button className="text-gray-500 hover:text-gray-700 mr-2">
            <FaArrowLeft  onClick={() => navigate(-1)}/>
          </button>
          <h2 className="text-lg font-semibold flex-1 text-center">Settings</h2>
        </div>
        <div className="flex items-center p-2 mb-4 bg-gray-100 rounded-lg">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search settings"
            className="w-full bg-transparent outline-none text-gray-500"
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {settingsOptions.map((option, index) => (
            <Link
              key={index}
              to={option.path}
              className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-50"
            >
              <div className="w-6 h-6 mr-4 text-gray-600">{option.icon}</div>
              <span className="flex-1">{option.name}</span>
              <FaChevronRight/>
            </Link>
          ))}
          <div className="flex items-center p-4 text-red-500 cursor-pointer hover:bg-red-50">
            <div className="w-6 h-6 mr-4">
              <FaSignOutAlt />
            </div>
            <span className="flex-1">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

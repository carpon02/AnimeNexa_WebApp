import React, { useState, useRef } from 'react';
import { FaTimes, FaGlobe } from 'react-icons/fa';
import { BsCardImage } from 'react-icons/bs';
import { MdGifBox } from 'react-icons/md';
import { LuClock3 } from 'react-icons/lu';
import { assets } from '../assets/assets';
import { HiOutlineGlobe } from "react-icons/hi";
import { GrGroup } from "react-icons/gr";
import { TbFriends } from "react-icons/tb";
import { CiLock } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'; 

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageTitle, setImageTitle] = useState('');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [privacyOption, setPrivacyOption] = useState('Public'); // Default to Public
  const [commentControl, setCommentControl] = useState('Default'); // Default comment control
  const [showScheduleModal, setShowScheduleModal] = useState(false); // Schedule modal state
  const [showDraftModal, setShowDraftModal] = useState(false); // Draft modal state
  const [showScheduleConfirmModal, setShowScheduleConfirmModal] = useState(false); // Schedule confirmation modal state
  const fileInputRef = useRef(null);

  const navigate = useNavigate();
  // Get current date and time for default values
  const now = new Date();
  const currentDate = now.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }); // e.g., "05/08/2025"
  const currentTime = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }); // e.g., "12:30 PM"
  const currentDay = now.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }); // e.g., "Wed, May 8"

  // State for schedule inputs
  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState(currentTime);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prev) => [...prev, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
  };

  // Handle privacy option selection
  const handlePrivacyChange = (option) => {
    setPrivacyOption(option);
  };

  // Handle comment control selection
  const handleCommentControlChange = (option) => {
    setCommentControl(option);
  };

  // Handle "Next" button in Schedule Modal
  const handleScheduleNext = () => {
    setShowScheduleModal(false);
    setShowScheduleConfirmModal(true);
  };

  // Check if "Post Now" button should be disabled
  const isPostNowDisabled = !content.trim() && selectedImages.length === 0;

  return (
    <div className="w-full min-h-screen mx-auto bg-white text-sm relative pb-28">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-8">
        <FaTimes className="text-xl text-black"  onClick={()=>navigate('/')}/>
        <div className="flex items-center gap-4 mr-5">
          <button onClick={() => setShowDraftModal(true)} className="text-purple-700 font-bold text-sm">
            Save as Draft
          </button>
          <button
            className={`text-sm font-semibold px-3 py-1 rounded-md ${
              isPostNowDisabled
                ? 'bg-purple-400 text-white cursor-not-allowed'
                : 'bg-purple-700 text-white'
            }`}
            disabled={isPostNowDisabled}
          >
            Post Now
          </button>
        </div>
      </div>

      {/* Profile + Visibility */}
      <div className="flex items-center px-4 mt-6">
        <img src={assets.nft9} alt="profile" className="w-9 h-9 rounded-full" />
        <div className="flex items-center ml-2 text-black font-semibold text-sm">
          {privacyOption}
          <button onClick={() => setShowPrivacyModal(true)}>
            {privacyOption === 'Public' && <HiOutlineGlobe className="ml-1 text-xs  text-gray-600" size={20} />}
            {privacyOption === 'Followers Only' && <IoPersonOutline className="ml-1 text-xs text-gray-600" size={20}/>}
            {privacyOption === 'Clan Members Only' && <GrGroup className="ml-1 text-xs text-gray-600" size={20} />}
            {privacyOption === 'Friends Only' && <TbFriends className="ml-1 text-xs text-gray-600" size={20}/>}
            {privacyOption === 'Private (only Me)' && <CiLock className="ml-1 text-xs text-black" size={20} />}
          </button>
        </div>
      </div>

      {/* Scheduled Post Notification */}
      {showScheduleConfirmModal && (
        <div className="px-4 mt-8 text-sm text-gray-600 flex items-center">
          <span><HiOutlineGlobe className='mr-1' size={16}/></span> Posting {currentDay} at {time}. <button className="ml-2 text-purple-700" onClick={() => setShowScheduleModal(true)}>Edit</button>
        </div>
      )}

      {/* Textarea */}
      <div className="px-4 mt-9">
        <textarea
          rows={3}
          className="w-full resize-none outline-none placeholder:text-gray-600 placeholder:text-base text-base rounded-md p-3 bg-gray-50"
          placeholder="What’s on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* Image Grid */}
      {selectedImages.length > 0 && (
        <div className="px-4 mt-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {selectedImages.map((image, index) => (
              <div key={index} className="relative rounded-md overflow-hidden">
                <img
                  src={image}
                  alt={`Selected ${index}`}
                  className="w-full h-40 object-cover rounded-md"
                />
                <button
                  className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
                  onClick={() => handleRemoveImage(index)}
                >
                  <FaTimes className="text-black text-sm" />
                </button>
              </div>
            ))}
          </div>

          {/* Single Title Input */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="TT Title"
              value={imageTitle}
              onChange={(e) => setImageTitle(e.target.value)}
              className="w-full p-2 border rounded-md text-sm font-bold focus:outline-none placeholder:text-purple-700"
            />
            <button className="mt-2 text-gray-600 text-sm flex items-center justify-center gap-2">
              <img src={assets.tag} className="w-4 h-4" alt="" />
              <span className="text-gray-500 text-[12px] font-light">Tag People</span>
            </button>
          </div>
        </div>
      )}

      {/* Privacy Modal (Bottom-Aligned) */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
          <div className="bg-white p-4 rounded-t-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => setShowPrivacyModal(false)}>
                <FaTimes className="text-gray-600 text-xl" />
              </button>
              <span className="text-sm font-semibold">Privacy Options - Who can see your posts?</span>
              <div className="w-6"></div>
            </div>
            <div className="space-y-3">
              {/* Public */}
              <label className="flex items-center justify-between cursor-pointer py-2">
                <div className="flex items-center justify-center gap-2">
                  <HiOutlineGlobe className="p-1 rounded-full bg-gray-200" size={30} />
                  <span className="font-bold">Public</span>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="privacy"
                    checked={privacyOption === 'Public'}
                    onChange={() => handlePrivacyChange('Public')}
                    className="hidden"
                  />
                  <span
                    className={`block w-5 h-5 rounded-full border-2 border-purple-700 ${
                      privacyOption === 'Public' ? 'bg-purple-700' : 'bg-white'
                    } relative`}
                  >
                    {privacyOption === 'Public' && (
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"></span>
                    )}
                  </span>
                </div>
              </label>

              {/* Followers Only */}
              <label className="flex items-center justify-between cursor-pointer py-2">
                <div className="flex items-center justify-center gap-2">
                  <IoPersonOutline className="p-1 rounded-full bg-gray-200" size={30} />
                  <span className="font-bold">Followers Only</span>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="privacy"
                    checked={privacyOption === 'Followers Only'}
                    onChange={() => handlePrivacyChange('Followers Only')}
                    className="hidden"
                  />
                  <span
                    className={`block w-5 h-5 rounded-full border-2 border-purple-700 ${
                      privacyOption === 'Followers Only' ? 'bg-purple-700' : 'bg-white'
                    } relative`}
                  >
                    {privacyOption === 'Followers Only' && (
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"></span>
                    )}
                  </span>
                </div>
              </label>

              {/* Clan Members Only */}
              <label className="flex items-center justify-between cursor-pointer py-2">
                <div className="flex items-center justify-center gap-2">
                  <GrGroup className="p-1 rounded-full bg-gray-200" size={30} />
                  <span className="font-bold">Clan Members Only</span>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="privacy"
                    checked={privacyOption === 'Clan Members Only'}
                    onChange={() => handlePrivacyChange('Clan Members Only')}
                    className="hidden"
                  />
                  <span
                    className={`block w-5 h-5 rounded-full border-2 border-purple-700 ${
                      privacyOption === 'Clan Members Only' ? 'bg-purple-700' : 'bg-white'
                    } relative`}
                  >
                    {privacyOption === 'Clan Members Only' && (
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"></span>
                    )}
                  </span>
                </div>
              </label>

              {/* Friends Only */}
              <label className="flex items-center justify-between cursor-pointer py-2">
                <div className="flex items-center justify-center gap-2">
                  <TbFriends className="p-1 rounded-full bg-gray-200" size={30} />
                  <span className="font-bold">Friends Only</span>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="privacy"
                    checked={privacyOption === 'Friends Only'}
                    onChange={() => handlePrivacyChange('Friends Only')}
                    className="hidden"
                  />
                  <span
                    className={`block w-5 h-5 rounded-full border-2 border-purple-700 ${
                      privacyOption === 'Friends Only' ? 'bg-purple-700' : 'bg-white'
                    } relative`}
                  >
                    {privacyOption === 'Friends Only' && (
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"></span>
                    )}
                  </span>
                </div>
              </label>

              {/* Private (only Me) */}
              <label className="flex items-center justify-between cursor-pointer py-2">
                <div className="flex items-center justify-center gap-2">
                  <CiLock className="p-1 rounded-full bg-gray-200" size={30} />
                  <span className="font-bold">Private (only Me)</span>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="privacy"
                    checked={privacyOption === 'Private (only Me)'}
                    onChange={() => handlePrivacyChange('Private (only Me)')}
                    className="hidden"
                  />
                  <span
                    className={`block w-5 h-5 rounded-full border-2 border-purple-700 ${
                      privacyOption === 'Private (only Me)' ? 'bg-purple-700' : 'bg-white'
                    } relative`}
                  >
                    {privacyOption === 'Private (only Me)' && (
                      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"></span>
                    )}
                  </span>
                </div>
              </label>

              {/* Comment Control */}
              <div className="flex items-center mt-2">
                <span className="text-purple-700 text-sm">Comment Control</span>
                <select
                  value={commentControl}
                  onChange={(e) => handleCommentControlChange(e.target.value)}
                  className="ml-1 text-gray-600 text-sm appearance-none focus:outline-none"
                >
                  <option value="Default">Default</option>
                  <option value="Everyone">Everyone</option>
                  <option value="People I Follow">People I Follow</option>
                  <option value="Off">Off</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Modal (Bottom-Aligned) */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
          <div className="bg-white p-4 rounded-t-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => setShowScheduleModal(false)}>
                <FaTimes className="text-gray-600 text-xl" />
              </button>
              <span className="text-sm font-semibold">Schedule</span>
              <button className="text-purple-700 text-sm">View All</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Date</label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2 mt-1 border rounded-md text-sm focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Time</label>
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full p-2 mt-1 border rounded-md text-sm focus:outline-none"
                />
              </div>
              <p className="text-sm text-gray-500">Based on your location: UTC+01:00, WAT</p>
              <button
                onClick={handleScheduleNext}
                className="w-full bg-purple-700 text-white text-sm font-semibold py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Draft Confirmation Modal (Bottom-Aligned) */}
      {showDraftModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
          <div className="bg-white p-4 rounded-t-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => setShowDraftModal(false)}>
                <FaTimes className="text-gray-600 text-xl" />
              </button>
              <div className="w-6"></div> {/* Spacer for alignment */}
            </div>
            <div className="space-y-4">
              <button className="w-full text-sm flex items-center justify-start gap-2">
                <span className="text-gray-600">☁️</span> Save as Draft
              </button>
              <button className="w-full text-sm flex items-center justify-start gap-2 text-red-500">
                <span className="text-red-500">🗑️</span> Delete
              </button>
              <button
                className="w-full bg-purple-400 text-white text-sm font-semibold py-2 rounded-md"
                onClick={() => setShowDraftModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Icons */}
      <div className="absolute bottom-0 w-full bg-white px-4 py-4 border-t border-gray-200">
        <input
          type="file"
          accept="image/*"
          multiple
          ref={fileInputRef}
          className="hidden"
          onChange={handleImageChange}
        />
        <div className="flex gap-6 text-black">
          <button onClick={handleImageClick}>
            <BsCardImage className="text-xl" />
          </button>
          <MdGifBox className="text-xl" />
          <button onClick={() => setShowScheduleModal(true)}>
            <LuClock3 className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
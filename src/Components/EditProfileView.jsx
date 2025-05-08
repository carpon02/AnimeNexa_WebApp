import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import { assets } from '../assets/assets';

const EditProfileView = () => {
  const [formData, setFormData] = useState({
    name: 'Mini_Kay',
    username: '@mini_kay',
    location: 'Nigeria',
    email: 'Minikay@gmail.com',
    birthday: '00/00/0000',
    bio: 'Anime enthusiast, world-builder, and part-time dreamer. Leveling up one episode at a time.',
  });

  const [profileImage, setProfileImage] = useState(null); // State for profile image
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Set the uploaded image as a preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <button onClick={() => navigate('/profile-view')} className="text-gray-500">Cancel</button>
        <h1 className="text-lg font-semibold">Edit profile</h1>
        <div></div>
      </div>
      {/* Header with Background Image */}
      <div className="relative">
        {/* Background Image */}
        <img
          src={assets.postImage}
          alt="Cover page"
          className="w-full h-28 object-cover"
        />
        
        {/* Profile Picture */}
        {/* Profile Picture */}
        <div className="absolute -bottom-16 left-4">
          <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center overflow-hidden relative">
            {profileImage && (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
                style={{ filter: 'brightness(0.6)' }} // Darken the profile image
              />
            )}
            {/* Camera Icon */}
            <FaCamera className="absolute text-white text-xl" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* Form */}
      <div className="p-4 mt-24">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">NAME</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b border-purple-600 py-2 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">USERNAME</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border-b border-purple-600 py-2 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">LOCATION</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border-b border-purple-600 py-2 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">EMAIL</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-purple-600 py-2 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">BIRTHDAY</label>
          <input
            type="text"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            className="w-full border-b border-purple-600 py-2 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">BIO</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full border-b border-purple-600 py-2 focus:outline-none resize-none"
            rows="3"
          ></textarea>
        </div>
        <button
          onClick={() => navigate('/profile-view')}
          className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default EditProfileView;
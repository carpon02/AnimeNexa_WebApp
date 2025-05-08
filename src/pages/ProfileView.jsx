import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '../Components/Post';
import { FaHome, FaSearch, FaPlus, FaComments, FaUser } from 'react-icons/fa';
import { assets } from '../assets/assets';

const ProfileView = () => {
  const [activeTab, setActiveTab] = useState('NFTs');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Background Image */}
      <div className="relative">
        <img
          src={assets.postImage}
          alt="Cover page"
          className="w-full h-28 object-cover"
        />
       
        {/* Profile Picture */}
        <div className="absolute -bottom-16 left-4">
          <img
            src={assets.postImage}
            alt="Profile picture"
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
          />
        </div>
        <div className="absolute -bottom-12 right-4">
          <button
            onClick={() => navigate('/edit-profile')}
            className="border border-purple-600 text-purple-600 text-sm font-bold px-3 py-2 rounded-xl hover:bg-purple-700 hover:text-white transition-all duration-300"
          >
            Edit profile
          </button>
        </div>
      </div>
      {/* Profile Info */}
      <div className="mt-20 px-4">
        <h1 className="text-2xl font-bold">MINI_KAY <span className="text-gray-500 text-sm font-normal">@mini_kay</span></h1>
        <p className="mt-2 text-gray-700 text-[16px]">
          Anime enthusiast, world-builder, and part-time dreamer. Leveling up one episode at a time.
        </p>

        {/* XP Bar */}
        <div className="mt-4">
          <p className="text-sm text-gray-800 font-bold">XP</p>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-1">
            <div
              className="bg-purple-600 h-4 rounded-full"
              style={{ width: "20%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">300/10,000</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-around mt-4 border-b">
          <button
            onClick={() => setActiveTab('Posts')}
            className={`pb-2 ${activeTab === 'Posts' ? 'text-purple-600 border-b-2 font-bold border-purple-600' : 'text-gray-500'}`}
          >
            Posts
          </button>
          <button
            onClick={() => setActiveTab('Shared')}
            className={`pb-2 ${activeTab === 'Shared' ? 'text-purple-600 border-b-2 font-bold border-purple-600 ' : 'text-gray-500'}`}
          >
            Shared
          </button>
          <button
            onClick={() => setActiveTab('NFTs')}
            className={`pb-2 ${activeTab === 'NFTs' ? 'text-purple-600 border-b-2 font-bold border-purple-600' : 'text-gray-500'}`}
          >
            NFTs
          </button>
          <button
            onClick={() => setActiveTab('Likes')}
            className={`pb-2 ${activeTab === 'Likes' ? 'text-purple-600 border-b-2 font-bold border-purple-600' : 'text-gray-500'}`}
          >
            Likes
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4 px-4">
          {activeTab === 'Posts' && (
            <Post
              author="Dante"
              time="5h"
              content="AN AWESOME GROWING COMMUNITY OF ANIME LOVERS IS WHAT I AM TRYING TO CREATE"
              image="https://via.placeholder.com/600x400?text=Anime+Street+Post"
              likes={4}
              dislikes={1}
              comments={6}
            />
          )}
          {activeTab === 'Shared' && (
            <Post
              author="SharedUser"
              time="3h"
              content="Just shared this amazing anime artwork! Loving the vibes."
              image="https://via.placeholder.com/600x400?text=Shared+Anime+Art"
              likes={10}
              dislikes={0}
              comments={3}
            />
          )}
          {activeTab === 'NFTs' && (
            <div className="flex items-center justify-center mt-40">  {/* or use another height like h-[400px] */}
              <p className="text-xl font-bold">COMING SOON!</p>
            </div>
          )}
          {activeTab === 'Likes' && (
            <Post
              author="LikedUser"
              time="2h"
              content="Loved this anime scene so much! Had to like it."
              image="https://via.placeholder.com/600x400?text=Liked+Anime+Scene"
              likes={15}
              dislikes={2}
              comments={5}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
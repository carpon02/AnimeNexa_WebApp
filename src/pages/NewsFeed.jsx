import React, { useState } from 'react'
import StoryCarousel from '../Components/StoryCarousel';
import Post from '../Components/Post';
import BottomNavbar from '../Components/BottomNavbar';


const NewsFeed = () => {

  const [activeTab, setActiveTab] = useState("For You");
  return (
    <div className="bg-wh ite min-h-screen text-black pb-20">
      <h2 className="text-2xl font-bold p-4">News Feed</h2>

      {/* Stories */}
      <StoryCarousel />

      {/* Tabs */}
      <div className="flex justify-around  text-sm text-black-400 mt-4">
        {["For You", "Following", "Trending"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 transition-all ${
              activeTab === tab
                ? "border-b-2 border-purple-500 text-black"
                : "text-black-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Posts */}
      <Post activeTab={activeTab} />

      {/* Bottom Navbar */}
      <BottomNavbar />
    </div>
  );
}
  


export default NewsFeed

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import { FaHeart,  FaShareAlt, FaSave } from 'react-icons/fa';
import { IoIosAdd } from 'react-icons/io';
import { reelsvideos as initialReels } from '../assets/assets';
import { FaBookmark } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaComment } from 'react-icons/fa6';
const Reels = () => {
  const [videos, setVideos] = useState(initialReels);

  const toggleFollow = (index) => {
    const updatedVideos = [...videos];
    updatedVideos[index].following = !updatedVideos[index].following;
    setVideos(updatedVideos);
  };

  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      className="h-screen w-full bg-black"
      mousewheel={{ forceToAxis: true }}
      modules={[Mousewheel]}
    >
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-screen w-full bg-black overflow-hidden">

            {/* Video */}
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
              <video
                src={video.url}
                className="w-full h-full object-cover"
                loop
                autoPlay
                muted
                playsInline
                controls={false}
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent z-10" />

            {/* Top Navigation */}
            <div className="absolute top-4 left-0 right-0 flex gap-5 items-center px-4 text-white z-20">
              <h1 className="text-lg font-bold">For You</h1>
              <span className="font-light">Following</span>
            </div>

            {/* Right Action Bar */}
            <div className="absolute right-4 bottom-1/3 flex flex-col items-center gap-6 text-white z-20">
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center">
                  <FaHeart className="text-2xl hover:text-pink-500 transition-colors" />
                  <span className="text-xs mt-1">{video.likes}</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaBookmark className="text-2xl hover:text-pink-500 transition-colors" />
                  <span className="text-xs mt-1">{video.likes}</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaRegComment className="text-2xl hover:text-blue-400 transition-colors" />
                  <span className="text-xs mt-1">{video.comments}</span>
                </div>
                <div className="flex flex-col items-center">
                  <FaShareAlt className="text-2xl hover:text-green-400 transition-colors" />
                  <span className="text-xs mt-1">{video.shares}</span>
                </div>
              </div>
            </div>

            {/* Bottom User Info */}
            <div className="absolute bottom-8 left-4 text-white z-20 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="relative">
                  <img
                    src={video.avatar}
                    alt={video.user}
                    className="w-12 h-12 rounded-full  object-cover"
                  />
                  
                </div>
                <span className="font-light text-lg">{video.user}</span>
                <button
                  onClick={() => toggleFollow(index)}
                  className={`text-xs px-2 py-0.5 rounded ${
                    video.following ? 'bg-transparent  text-purple-600' : 'border border-purple-600 text-white text-sm'
                  }`}
                >
                  {video.following ? 'Following' : 'Follow'}
                </button>
              </div>
              <p className="text-sm mb-20">{video.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Reels;

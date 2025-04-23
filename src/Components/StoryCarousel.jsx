import React from 'react';
import { stories } from '../assets/assets';

const StoryCarousel = () => {
  return (
    <div className="overflow-x-auto flex space-x-4 px-4 py-3 scrollbar-hide">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center text-black">
          <div className="w-16 h-16 rounded-full border-2 border-purple-500 p-1">
            <img
              src={story.avatar}
              alt={story.username}
              className="rounded-full object-cover w-full h-full cursor-pointer"
            />
          </div>
          <span className="text-xs mt-1">{story.username}</span>
        </div>
      ))}
    </div>
  );
};

export default StoryCarousel;

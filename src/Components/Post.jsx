import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaComment, FaShare, FaBookmark } from 'react-icons/fa';
import { assets, posts } from '../assets/assets';

const Post = () => {
  const [likes, setLikes] = useState(4); // Initial likes count
  const [dislikes, setDislikes] = useState(1); // Initial dislikes count

  const handleLike = () => setLikes((prev) => prev + 1);
  const handleDislike = () => setDislikes((prev) => prev + 1);

  return (
    <div className="px-4 space-y-6 pb-20">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded-lg text-black ">
          <div className="flex items-center gap-3">
            <img src={post.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
            <div>
              <div className="flex gap-1 items-center">
                <h4 className="font-bold">{post.username}</h4>
                <span className="text-blue-400">
                  <img src={assets.verified} alt="verified" className="w-4 h-4" />
                </span>
              </div>
              <span className="text-sm text-gray-400">{post.handle} · {post.time}</span>
            </div>
          </div>
          
          <p className="mt-2 text-sm">{post.content}</p>

          {post.image && (
            <img src={post.image} alt="post" className="mt-3 rounded-md w-full h-60 object-cover" />
          )}

          <div className="flex justify-between mt-3">
            <div className="flex gap-4 items-center">
              <div className="flex gap-1">
                <FaThumbsUp
                  className="cursor-pointer w-4 h-4 text-gray-500"
                  onClick={handleLike}
                />
                <span className="text-[10px] text-gray-500">{likes}</span>
              </div>
              <div className="flex gap-1">
                <FaThumbsDown
                  className="cursor-pointer w-4 h-4 text-gray-500"
                  onClick={handleDislike}
                />
                <span className="text-[10px] text-gray-500">{dislikes}</span>
              </div>
              <div className="flex gap-1">
                <FaComment className="cursor-pointer w-4 h-4 text-gray-500" />
                <span className="text-[10px] text-gray-500">6</span>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex gap-1">
                <FaBookmark className="cursor-pointer w-4 h-5 text-gray-500" />
              </div>
              <div className="flex gap-1">
                <img src={assets.Gift} alt="gift" className="cursor-pointer w-4 h-5" />
              </div>
              <div className="flex gap-1">
                <FaShare className="cursor-pointer w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;

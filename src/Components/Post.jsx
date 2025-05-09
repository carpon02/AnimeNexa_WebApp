import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaComment, FaShare, FaBookmark } from 'react-icons/fa';
import { assets, posts as initialPosts } from '../assets/assets';

const Post = () => {
  const [postData, setPostData] = useState(
    initialPosts.map(post => ({
      ...post,
      likes: 0,
      dislikes: 0,
      saved: false,
      giftSent: false, // Track if a gift has been sent
    }))
  );

  const [activeGiftPopup, setActiveGiftPopup] = useState(null);
  const [giftAmount, setGiftAmount] = useState('1');

  const handleLike = (id) => {
    setPostData(prevData =>
      prevData.map(post =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleDislike = (id) => {
    setPostData(prevData =>
      prevData.map(post =>
        post.id === id ? { ...post, dislikes: post.dislikes + 1 } : post
      )
    );
  };

  const handleSave = (id) => {
    setPostData(prevData =>
      prevData.map(post =>
        post.id === id ? { ...post, saved: !post.saved } : post
      )
    );
  };

  const toggleGiftPopup = (id) => {
    setActiveGiftPopup(prev => (prev === id ? null : id));
  };

  const handleGiftSend = (id) => {
    setPostData(prevData =>
      prevData.map(post =>
        post.id === id ? { ...post, giftSent: true } : post
      )
    );
    setActiveGiftPopup(null); // Close the popup after sending the gift
  };

  return (
    <div className="px-4 space-y-6 pb-20">
      {postData.map(post => (
        <div key={post.id} className="bg-white p-4 rounded-lg text-black relative">
          <div className="flex items-center gap-3">
            <img src={post.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
            <div>
              <div className="flex gap-1 items-center">
                <h4 className="font-bold">{post.username}</h4>
                {post.verified && (
                  <img src={assets.verified} alt="verified" className="w-4 h-4" />
                )}
              </div>
              <span className="text-sm text-gray-400">
                {post.handle} · {post.time}
              </span>
            </div>
          </div>

          <p className="mt-2 text-sm">{post.content}</p>

          {post.image && (
            <img
              src={post.image}
              alt="post"
              className="mt-3 rounded-md w-full h-60 object-cover"
            />
          )}

          <div className="flex justify-between mt-3">
            <div className="flex gap-4 items-center">
              <div className="flex gap-1 items-center">
                <FaThumbsUp
                  onClick={() => handleLike(post.id)}
                  className={`cursor-pointer w-4 h-4 ${
                    post.likes > 0 ? 'text-purple-700' : 'text-gray-500'
                  }`}
                />
                <span className="text-[10px] text-gray-500">{post.likes}</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaThumbsDown
                  onClick={() => handleDislike(post.id)}
                  className={`cursor-pointer w-4 h-4 ${
                    post.dislikes > 0 ? 'text-red-500' : 'text-gray-500'
                  }`}
                />
                <span className="text-[10px] text-gray-500">{post.dislikes}</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaComment className="cursor-pointer w-4 h-4 text-gray-500" />
                <span className="text-[10px] text-gray-500">6</span>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="flex gap-1 items-center">
                <FaBookmark
                  onClick={() => handleSave(post.id)}
                  className={`cursor-pointer w-4 h-5 ${
                    post.saved ? 'text-yellow-500' : 'text-gray-500'
                  }`}
                />
              </div>
              <div className="flex gap-1 relative">
                <img
                  src={assets.Gift}
                  alt="gift"
                  className="cursor-pointer w-4 h-5"
                  onClick={() => toggleGiftPopup(post.id)}
                />
              </div>
              <div className="flex gap-1">
                <FaShare className="cursor-pointer w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {activeGiftPopup && !postData.find(p => p.id === activeGiftPopup).giftSent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80 relative">
            <h2 className="text-lg font-semibold mb-3 text-black">
              Send SOL to {postData.find(p => p.id === activeGiftPopup)?.username}
            </h2>
            <img src={assets.solana} alt="Solana" className="w-10 h-10 mx-auto mb-2" />
            <p className="text-gray-600 text-sm mb-2">Solana</p>

            <label className="block text-gray-700 text-sm mb-1">Amount (SOL)</label>
            <input
              type="number"
              value={giftAmount}
              onChange={(e) => setGiftAmount(e.target.value)}
              className="w-full px-3 py-2 rounded border border-gray-300 mb-3"
            />

            <div className="flex justify-between gap-2">
              <button
                onClick={() => setActiveGiftPopup(null)}
                className="w-1/2 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => handleGiftSend(activeGiftPopup)}
                className="w-1/2 py-2 bg-purple-700 text-white rounded"
              >
                Send Gift
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;

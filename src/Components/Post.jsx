import React from 'react';
import { assets, posts } from '../assets/assets';



const Post = () => {
  return (
    <div className="px-4 space-y-6 pb-20">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 rounded-lg text-black">
            <div className="flex items-center gap-3">
                <img src={post.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                <div>
                    <div className="flex gap-1 items-center">
                        <h4 className="font-bold">{post.username}</h4>
                        <span className="text-blue-400"><img src={assets.verified} alt="" /></span>
                    </div>
                    <span className="text-sm text-gray-400">{post.handle} · {post.time}</span>
                </div>
            </div>
            <p className="mt-2 text-sm">{post.content}</p>
            {post.image && (
                <img src={post.image} alt="post" className="mt-3 rounded-md w-full h-60 object-cover" />
            )}
          
            <div className="flex justify-between mt-3 ">
                <div className="flex gap-4 items-center ">
                    <div className="flex gap-1">
                        <img src={assets.like} alt=""  className='cursor-pointer w-4 h-4'/>
                        <span className='text-[10px] text-gray-500 '>4</span>
                    </div>
                    <div className="flex gap-1">
                        <img src={assets.unlike} alt="" className='cursor-pointer  w-4 h-4' /><span  className='text-[10px] text-gray-500'>1</span>
                    </div>
                    <div className="flex gap-1">
                        <img src={assets.comment} alt=""   className='cursor-pointer  w-4 h-4'/><span  className='text-[10px] text-gray-500'>6</span>
                    </div>
                    
                </div>
                
                <div className="flex gap-5 items-center">
                    <div className="flex gap-1">
                        <img src={assets.save} alt=""  className='cursor-pointer  w-4 h-5 '/>
                    </div>
                    <div className="flex gap-1">
                        <img src={assets.Gift} alt=""  className='cursor-pointer  w-4 h-5'/>
                    </div>
                    <div className="flex gap-1">
                        <img src={assets.share} alt=""  className='cursor-pointer  w-4 h-4'/>
                    </div>
                    
                </div>

                
            </div>
          
        </div>
      ))}
    </div>
  );
};

export default Post;

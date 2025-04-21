import React from "react";
import { useNavigate } from "react-router-dom";
import {assets} from "../../assets/assets"; 

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <div className="flex justify-center items-center mb-5">
        <img src={assets.logo} className='drop-shadow'  alt="" />
      </div>
      <div className="flex justify-center items-center">
        <img src={assets.onboardingImage} className='w-[350px] md:w-[400px] xl:w-[450px] drop-shadow'  alt="" />
      </div>
      <h1 className="text-4xl font-bold text-center mt-6">
        Your Gateway to the <br /> Anime Universe
      </h1>
      <p className="text-center text-gray-800 mt-2 min-w-[300px] max-w-[400px] font-medium text-lg">
        Discover Anime, Connect with Fans, and Earn Rewards for Your Passion
      </p>
      <div className="w-full mt-8 space-y-5 flex flex-col sm:w-full">
        <button className="w-full bg-purple-600 text-white py-3 rounded-md font-medium cursor-pointer" onClick={() => navigate('/onboarding/sign-in')}>
          Sign in
        </button>
        <button className="w-full border border-gray-300 text-black py-3 rounded-md font-medium" onClick={() => navigate('/onboarding/create-account')}>
          Create an account
        </button>
      </div>
    </div>
  );
};

export default Welcome;
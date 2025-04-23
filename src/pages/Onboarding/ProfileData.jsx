import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const ProfileData = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Profile data:', formData);
    // Navigate to the next step
    navigate('/onboarding/genres'); // Update with your actual route
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous screen
  };

  return (
    <div className="min-h-screen  flex flex-col justify-start py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex mb-5 ml-4">
        <img src={assets.logo} className='drop-shadow'  alt="" />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-start ml-6">
          <h1 className="text-3xl font-bold text-start text-black mb-2">
            Your Name
          </h1>
          <p className="mt-2 text-gray-600">
            For a personalized app experience, please enter your first and last name.
          </p>
        </div>

        <div className="mt-8 bg-white py-6 px-6  rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
          <div>
              
            <div>
              <label htmlFor="firstName" className="block font-medium text-gray-700 mb-1">
                  FullName
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
                
              
            </div>

            <div>
              <label htmlFor="username" className="block  font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full mt-20 mb-4 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-purple-600 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Next
            </button> 
              
            <button className="w-full border border-gray-300 hover:bg-secondary text-black py-3 rounded-md font-medium" onClick={handleBack}>
              Back
            </button>

       
          </form>
        </div>
      </div>

    </div>
  );
};

export default ProfileData;
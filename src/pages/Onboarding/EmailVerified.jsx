import React from 'react';
import { useNavigate } from 'react-router-dom'; // If using React Router

const EmailVerified = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to setup page
    navigate('/onboarding/connect-wallet'); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          {/* Checkmark icon */}
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">
            Email Verified!
          </h1>
          
          <p className="mt-4 text-gray-600 mb-8">
            Your email has been successfully verified.
          </p>

          <button
            onClick={handleContinue}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Continue to Setup
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerified;
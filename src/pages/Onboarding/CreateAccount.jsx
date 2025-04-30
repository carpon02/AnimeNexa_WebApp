import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const CreateAccount = () => {
  const [state, setState] = useState("sign-up");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/onboarding/verify-email'); // Navigate to the next step
    // Handle signup logic here
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen  flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center items-center mb-8">
          <img src={assets.logo} className='drop-shadow'  alt="" />
        </div>
        {/* <h1 className="text-3xl font-bold text-center text-black-600 mb-2">
          Create Your Account
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Join the anime community today
        </p> */}
        {state === "sign-up" ? (
          <>
            <h1 className="text-3xl font-bold text-center text-black-900 mb-2">
              Create Your Account
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Join the anime community today
            </p>
          </>
        ): (
          <><h1 className="text-4xl font-bold text-center text-black-900 mb-2">
              Welcome Back!
            </h1>
            <p className="text-center text-gray-800 mb-8">
              Sign in to continue your anime journey
            </p>
          </>
        )}

      </div>

      <div className=" sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" py-8 px-6  rounded-lg sm:px-10">
          <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-2 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-md font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full px-2 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="pt-4">
              {/* <button
                type="submit"
                className="w-full flex justify-center py-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={handleSubmit}
              >
                Create Account
              </button> */}
              {
                state === "sign-up" ? (
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-4 border   transition-all duration-300 text-base border-transparent rounded-md shadow-sm  font-medium text-white bg-purple-600 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      onClick={handleSubmit}
                    >
                      Create Account
                    </button>
                  </div>
                ):(
                  <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full flex justify-center  border border-transparent transition-all duration-300  shadow-sm  font-medium py-2 rounded-md text-base text-white bg-purple-600 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                </div>
                )
              }
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              {/* <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account? <a href="/onboarding/sign-in" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
                </span>
              </div> */}
              {state === "sign-up" ? (
                <div className="relative flex justify-center text-sm">
                  Already have an account?{" "}
                  <span
                    className="px-2 bg-white text-purple-500 cursor-pointer"
                    onClick={() => setState("login")}
                  >
                    Sign in
                  </span>
                </div>
              ) : (
                <div className='relative flex justify-center text-sm'>
                  Don't have an account?{" "}
                  <span
                    className="px-2 bg-white text-purple-500 cursor-pointer"
                    onClick={() => setState("sign-up")}
                  >
                    Sign up
                  </span>
                </div>
              )}
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CreateAccount;
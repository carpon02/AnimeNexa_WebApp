import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { assets } from '../../assets/assets';

const VerifyEmail = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(60);
  const email = "abubakarmukhtar2002@gmail.com"; // This would typically come from props or state
  const navigate = useNavigate();

  useEffect(() => {
    const timer = resendTimer > 0 && setInterval(() => {
      setResendTimer(resendTimer - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleCodeChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    // Auto focus to next input
    if (e.target.value && index < 5) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleResendCode = () => {
    if (resendTimer === 0) {
      // Resend verification code logic here
      setResendTimer(60);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join('');
    navigate('/onboarding/email-verified'); // Navigate to the next step
    // Handle verification logic here
    console.log("Verification code:", verificationCode);
  };

  // const showBackButton = !window.location.pathname.endsWith('/onboarding/verify-email');


  return (
    <div className="min-h-screen flex flex-col  justify-center px-6 bg-white py-12 sm:px-6 lg:px-8">
       
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center items-center ">
          <img src={assets.logo} className='drop-shadow'  alt="" />
        </div>
       
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold text-center text-black mb-2">
            Verify Your Email
          </h1>
          <p className="mt-4 text-gray-600">
            We've sent a verification code to <br />
            <span className="font-medium">{email}</span>
          </p>
        </div>

        <div className="mt-8 bg-white py-8 px-6  rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center space-x-2">
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleCodeChange(e, index)}
                  className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  pattern="[0-9]*"
                  inputMode="numeric"
                />
              ))}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-4 border border-transparent transition-all duration-300  shadow-sm - font-medium -2 rounded-md text-base text-white bg-purple-600 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Verify Email
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Didn't receive a code?{' '}
              <button
                onClick={handleResendCode}
                disabled={resendTimer > 0}
                className={`font-medium ${resendTimer > 0 ? 'text-gray-400' : 'text-indigo-600 hover:text-indigo-500'}`}
              >
                Resend {resendTimer > 0 ? `in ${resendTimer}s` : ''}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
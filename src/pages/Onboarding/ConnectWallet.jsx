import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const ConnectWallet = () => {
  const [selectedWallet, setSelectedWallet] = useState('Backpack');
  const navigate = useNavigate();

  const wallets = [
    { id: 'solflare', name: 'Solflare',   },
    { id: 'backpack', name: 'Backpack',  },
    { id: 'phantom', name: 'Phantom',  },
  ];

  const handleWalletSelect = (walletId) => {
    setSelectedWallet(walletId);
  };

  const handleContinue = () => {
    // Handle wallet connection logic here
    console.log(`Connecting with ${selectedWallet} wallet...`);
    // Then navigate to next screen
    navigate('/onboarding/profile'); // Navigate to the next step
  };

  return (
    <div className="min-h-screen  flex flex-col justify-start py-5 px-4 sm:px-6 lg:px-8">
      <div className="flex mb-5 ml-4">
        <img src={assets.logo} className='drop-shadow'  alt="" />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="text-start ml-6">
          <h1 className="text-3xl font-bold text- text-black ">
            Connect to a wallet
          </h1>
          <p className="mt-2 text-gray-600">
            Choose your favourite wallet to log in AnimeNexa NFT.
          </p>
        </div>

        <div className="mt-8 bg-white py-6 px-6  rounded-lg sm:px-10">
          <div className="space-y-4">
            {wallets.map((wallet) => (
              <div
                key={wallet.id}
                onClick={() => handleWalletSelect(wallet.id)}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedWallet === wallet.id
                    ? 'border-secondary bg-secondary'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className={`flex items-center justify-center w-5 h-5 rounded-full border mr-3 ${
                  selectedWallet === wallet.id
                    ? 'border-indigo-500 bg-indigo-500'
                    : 'border-gray-400'
                }`}>
                  {selectedWallet === wallet.id && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="font-medium">{wallet.name}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleContinue}
            className="w-full mt-20 mb-4 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-purple-600 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Next
          </button> 
          
          <button className="w-full border border-gray-300 text-black py-3 rounded-md font-medium" onClick={() => navigate('/onboarding/profile')}>
            Skip for now
        </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
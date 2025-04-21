import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConnectWallet = () => {
  const [selectedWallet, setSelectedWallet] = useState('Backpack');
  const navigate = useNavigate();

  const wallets = [
    { id: 'solflare', name: 'Solflare' },
    { id: 'backpack', name: 'Backpack' },
    { id: 'phantom', name: 'Phantom' }
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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">
            Connect to a wallet
          </h1>
          <p className="mt-2 text-gray-600">
            Choose your favourite wallet to log in AnimeNexa NFT.
          </p>
        </div>

        <div className="mt-8 bg-white py-6 px-6 shadow rounded-lg sm:px-10">
          <div className="space-y-4">
            {wallets.map((wallet) => (
              <div
                key={wallet.id}
                onClick={() => handleWalletSelect(wallet.id)}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedWallet === wallet.id
                    ? 'border-indigo-500 bg-indigo-50'
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
            className="w-full mt-8 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
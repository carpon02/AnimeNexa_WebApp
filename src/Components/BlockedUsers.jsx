import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Using react-icons
import { assets } from "../assets/assets";
import {  useNavigate } from "react-router-dom";

const BlockedUsers = () => {
  const initialUsers = [
    {
      id: 1,
      name: "Jane Cooper",
      username: "@jane_cooper",
      avatar: assets.nft9,
    },
    {
      id: 2,
      name: "Jane Cooper",
      username: "@jane_cooper",
      avatar: assets.nft9,
    },
    {
      id: 3,
      name: "Amy Brown",
      username: "@amyBrown",
      avatar: assets.nft9,
    },
    {
      id: 4,
      name: "Cody Fisher",
      username: "@codyFisher",
      avatar: assets.nft9,
    },
    {
      id: 5,
      name: "Cody Smith",
      username: "@codySmith",
      avatar: assets.nft9,
    },
    {
      id: 6,
      name: "Darlene Robertson",
      username: "@darleneRobertson",
      avatar: assets.nft9,
    },
    {
      id: 7,
      name: "Darlene Stewart",
      username: "@darleneStewart",
      avatar: assets.nft9,
    },
  ];

  const [blockedUsers, setBlockedUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [step, setStep] = useState(null); // null | 'confirm' | 'success'
  const navigate = useNavigate()

  const handleUnblockClick = (user) => {
    setSelectedUser(user);
    setStep("confirm");
  };

  const confirmUnblock = () => {
    setStep("success");
    setBlockedUsers((prev) => prev.filter((u) => u.id !== selectedUser.id));
  };

  const closeModal = () => {
    setStep(null);
    setSelectedUser(null);
  };

  return (
    <div className="p-4 bg-white rounded-xl  max-w-md mx-auto mt-10">
      <div className="flex items-center mb-9">
        <button className="text-gray-500 hover:text-gray-700 mr-2" onClick={() => navigate(-1)} >
        <AiOutlineClose className="cursor-pointer"  size={20}/>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center">Blocked Users</h2>
      </div>

      <div className="space-y-3">
        {blockedUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
            <div className="flex items-center gap-3">
              <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.username}</p>
              </div>
            </div>
            <button
              onClick={() => handleUnblockClick(user)}
              className="bg-[#5E00BE] text-white px-4 py-2 rounded-md text-sm font-semibold"
            >
              Unblock
            </button>
          </div>
        ))}
      </div>

      {/* Confirm Unblock Modal */}
      {step === "confirm" && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[312px] h-[430px]  max-w-sm relative text-center">
            <AiOutlineClose className="absolute top-3 right-3 cursor-pointer" onClick={closeModal} />
            <img src={assets.unfriend} alt="avatar" className="mx-auto w-[75px]  h-[75px] mb-4" />
            <h3 className="text-[23px] font-bold mb-2">Are you sure you want to Unblock this user?</h3>
            <p className="text-[14px] text-gray-500 mb-4">
             By unblocking this user, you will restore their access to your profile and allow them to interact with you again. if you are certain about unblocking this user and wish to give them another chance, click “Unblock” below.</p>
            <button
              onClick={confirmUnblock}
              className="bg-[#5E00BE] text-white px-3 py-2 rounded-lg font-semibold text-sm "
            >
              Unblock
            </button>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {step === "success" && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[312px] h-[430px] max-w-sm relative text-center">
            <AiOutlineClose className="absolute top-3 right-3 cursor-pointer" onClick={closeModal} />
            <img src={assets.unfriend} alt="avatar" className="mx-auto w-16 mb-5" />
            <h3 className="text-[23px] font-bold mb-6">User Unblocked Successfully!</h3>
            <p className="text-sm text-gray-500 mb-5">
            You have successfully unblocked this user. They now have access to your profile and can interact with you again. You can expect to see their posts, comments, and messages.
            </p>
            <button
              onClick={closeModal}
              className="bg-[#5E00BE] text-white px-4 py-2 rounded-lg font-semibold text-sm"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockedUsers;

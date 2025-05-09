import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { VscKebabVertical } from "react-icons/vsc";
import { IoCall } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { assets } from '../assets/assets';
import { PlusIcon } from '@heroicons/react/solid';
import { FiMoreVertical, FiSearch, FiPaperclip, FiMic, FiSend } from 'react-icons/fi';
import KebabMenu from '../Components/KebabMenu';

// Dummy data
const chats = [
  { id: 1, name: 'Jane Cooper', lastMessage: 'Typing a message...', time: '09:10', unread: true, avatar: assets.nft6 },
  { id: 2, name: 'Joshua Rider', lastMessage: 'Anytime! Happy Investing!', time: '09:10', unread: true, avatar: assets.nft4 },
  { id: 3, name: 'Albert Flores', lastMessage: 'I do. Thanks for the ti..', time: '09:10', avatar: assets.nft2 },
  // Add more chat data
];

const Messages = () => {
  const { chatId } = useParams();  // Get chatId from the URL
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [chatsMessages, setChatsMessages] = useState({}); // Store messages by chatId

  const navigate = useNavigate();

  // Load messages from localStorage on page load
  useEffect(() => {
    const storedMessages = localStorage.getItem('chatsMessages');
    if (storedMessages) {
      setChatsMessages(JSON.parse(storedMessages)); // Parse and load from localStorage
    }
  }, []);

  // Find the selected chat based on the chatId in URL
  useEffect(() => {
    if (chatId) {
      const foundChat = chats.find(chat => chat.id === parseInt(chatId)); // Find chat by chatId
      setSelectedChat(foundChat); // Set the selected chat based on chatId
    } else {
      setSelectedChat(null); 
    }
  }, [chatId]); // Re-run when chatId changes

  // Handle sending a message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const messageTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // Create new message
      const newMsg = {
        id: Date.now(), // Use timestamp as message ID
        sender: 'You',
        text: newMessage.trim(),
        time: messageTime,
        isMe: true,
      };

      // Update messages for the selected chat
      setChatsMessages(prevState => {
        const updatedMessages = { ...prevState };
        if (!updatedMessages[chatId]) {
          updatedMessages[chatId] = [];
        }
        updatedMessages[chatId].push(newMsg);

        // Save updated messages to localStorage
        localStorage.setItem('chatsMessages', JSON.stringify(updatedMessages));

        return updatedMessages;
      });

      setNewMessage('');
    }
  };

  // Handle selecting a chat
  const handleChatSelect = (chat) => {
    // Update the URL to include the selected chat ID
    navigate(`/messages/${chat.id}`);
  };

  return (
    <div className="flex flex-col max-h-screen bg-gray-100">
      {!selectedChat ? (
        // Chat List Screen
        <div className="flex flex-col h-full bg-white">
          <div className="p-4 border-b flex items-center justify-between">
            <h1 className="text-lg font-bold">Messages</h1>
            <div className="flex gap-4 items-center">
              <CiSearch className="w-5 h-5 text-black cursor-pointer"  size={20}/>
              <KebabMenu /> 
            </div>
          </div>

          <div className="flex-1 overflow-y-auto mx-3">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center p-3 border-b cursor-pointer hover:bg-gray-50"
                onClick={() => handleChatSelect(chat)}  
              >
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center overflow-hidden">
                  <img src={chat.avatar} alt="" className="rounded-full w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{chat.name}</h3>
                    <span className="text-xs text-gray-400">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-[13px] text-gray-700">{chat.lastMessage}</p>
                    {chat.unread && (
                      <div className="w-4 h-4 rounded-full bg-purple-500 ml-2 flex items-center justify-center text-white text-xs">5</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Chat Conversation Screen
        <div className="flex flex-col h-full bg-white">
          <div className="p-4 border-b flex items-center">
            <button className="mr-3 text-xl" onClick={() => navigate('/messages')}>
              <IoMdArrowRoundBack />
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden relative">
              <img src={selectedChat.avatar} alt="" className="rounded-full w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-bold">{selectedChat.name}</h2>
              <p className="text-xs text-purple-500">Online</p>
            </div>
            <div className="ml-auto flex gap-6 items-center">
              <IoCall className="text-gray-500 cursor-pointer" size={24} />
              <FaVideo className="text-gray-500 cursor-pointer" size={24} />
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-white">
            <div className="text-center text-xs text-gray-400 mb-4">Today</div>
            {/* Display messages for the selected chat */}
            {chatsMessages[chatId]?.map((message) => (
              <div key={message.id} className={`mb-2 flex items-center ${message.isMe ? 'justify-end' : 'justify-start gap-3'}`}>
                <div className={`max-w-xs rounded-lg p-2  ${message.isMe ? 'hidden' : 'block'}`}>
                  <img src={selectedChat.avatar} alt="" className='rounded-full w-9 h-9' />
                </div>
                <div className={`max-w-xs p-3 rounded-lg ${message.isMe ? 'bg-gray-200' : 'bg-purple-100'}`}>
                  <p>{message.text}</p>
                  <p className="text-xs text-gray-400 mt-1">{message.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t flex items-center gap-2 bg-white">
            <div className="bg-purple-600 p-2 rounded-full shadow-md">
              <PlusIcon className="w-4 h-4 text-white" />
            </div>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message"
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none"
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button>
              <FiMic className="text-gray-500" size={20} />
            </button>
            <button onClick={handleSendMessage} className="text-purple-500">
              <FiSend size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;

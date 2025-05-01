import React, { useState } from "react";
import { FaCheck, FaTimes, FaSearch } from "react-icons/fa";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ContactItem = ({ letter, name, username, isChecked, onToggle, avatarUrl }) => (
  <>
    {letter && (
      <div className="text-gray-500 text-sm font-semibold px-4 py-2">
        {letter}
      </div>
    )}
    <div className="flex items-center p-4 border-b mb-2  bg-[#ECECEC] rounded-lg border-gray-200">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
      ) : (
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4" />
      )}
      <div className="flex-1 ">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm">{username}</p>
      </div>
      <button
        onClick={onToggle}
        className="w-6 h-6 border-2 border-black rounded flex items-center justify-center"
      >
        {isChecked && <FaCheck className="w-6 h-6 text-sm text-white bg-[#5E00BE]  " />}
      </button>
    </div>
  </>
);

const CreateGroup = () => {
  const initialContacts = [
    {
      name: "Amy Brown",
      username: "@amyBrown",
      isChecked: false,
      avatarUrl: assets.nft9
    },
    {
      name: "Cody Fisher",
      username: "@codyFisher",
      isChecked: true,
      avatarUrl: assets.nft9,
    },
    {
      name: "Cody Smith",
      username: "@codySmith",
      isChecked: true,
      avatarUrl: assets.nft9,
    },
    {
      name: "Darlene Robertson",
      username: "@darleneRobertson",
      isChecked: false,
      avatarUrl: assets.nft9,
    },
    {
      name: "Darlene Stewart",
      username: "@darleneStewart",
      isChecked: false,
      avatarUrl: assets.nft9,
    },
    {
      name: "Jane Cooper",
      username: "@janeCooper",
      isChecked: true,
      avatarUrl: assets.nft9,
    },
    {
      name: "Jane Doe",
      username: "@janeDoe",
      isChecked: false,
      avatarUrl: assets.nft9,
    },
  ];

  const sortedContacts = initialContacts
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((contact, index, array) => {
      const prev = array[index - 1];
      const letter = !prev || prev.name[0] !== contact.name[0] ? contact.name[0] : null;
      return { ...contact, id: index, letter };
    });

  const [contacts, setContacts] = useState(sortedContacts);
  const navigate = useNavigate();

  const toggleCheckbox = (id) => {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === id ? { ...contact, isChecked: !contact.isChecked } : contact
      )
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center">
      <div className="bg-white rounded-t-xl p-4 w-full h-full flex flex-col">
        <div className="flex items-center mb-4">
          <button className="text-gray-500 hover:text-gray-700 mr-2" onClick={() => navigate(-1)} >
            <FaTimes />
          </button>
          <h2 className="text-lg font-semibold flex-1 text-center">New Group</h2>
          <button className="text-purple-500 font-semibold">Create</button>
        </div>

        <div className="flex items-center bg-gray-100 rounded-lg p-2 mb-4">
          <FaSearch className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-gray-500"
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              letter={contact.letter}
              name={contact.name}
              username={contact.username}
              isChecked={contact.isChecked}
              avatarUrl={contact.avatarUrl}
              onToggle={() => toggleCheckbox(contact.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;

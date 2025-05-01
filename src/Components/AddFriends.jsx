import React from 'react'
import { useNavigate } from 'react-router-dom'


const AddFriends = () => {
  const navigate = useNavigate()
  return (
<div className="fixed inset-3 bg-black bg-opacity-50 flex items-start justify-center">
          <div className="bg-white rounded-t-xl p-4 w-full h-full">
            <div className="flex items-center mb-4">
              <button className="text-gray-800 text-lg hover:text-gray-900 mr-2"
                onClick={() => navigate(-1)}
              >  ✕
              </button>
              <h2 className="text-lg font-semibold flex-1 text-center">Add Friends</h2>
            </div>
            <div className="flex items-center bg-gray-100 rounded-lg p-2">
              <span className="text-gray-500 mr-2">@</span>
              <input
                type="text"
                placeholder="Add by Username"
                className="bg-transparent outline-none w-full text-gray-500"
              />
            </div>
          </div>
        </div>
  )
}

export default AddFriends
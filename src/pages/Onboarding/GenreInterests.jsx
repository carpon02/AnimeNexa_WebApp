import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GenreInterests = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate();

  const allGenres = [
    'Action', 'Adventure', 'Comedy',
    'Drama', 'Fantasy', 'Horror', 'Mystery',
    'Romance', 'Science Fiction', 'Slice of Life',
    'Sports', 'Supernatural', 'Thriller',
    'Shonen', 'Shojo', 'Seinen', 'Josei',
    'Isekai', 'Mecha', 'Technology', 'Spy'
  ];

  const toggleGenre = (genre) => {
    setSelectedGenres(prev => {
      if (prev.includes(genre)) {
        return prev.filter(g => g !== genre);
      } else if (prev.length < 5) {
        return [...prev, genre];
      }
      return prev;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedGenres.length === 5) {
      console.log('Selected genres:', selectedGenres);
      navigate('/news-feed'); // Update with your actual route
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous screen
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">
            Genre Interests
          </h1>
          <p className="mt-2 text-gray-600 mb-6">
            Select 5 anime genres that interest you.
            <span className="block text-sm text-indigo-500 mt-1">
              {selectedGenres.length}/5 selected
            </span>
          </p>
        </div>

        <div className="mt-4 bg-white py-6 px-4 shadow rounded-lg sm:px-6">
          <div className="grid grid-cols-3 gap-3">
            {allGenres.map((genre) => (
              <button
                key={genre}
                type="button"
                onClick={() => toggleGenre(genre)}
                className={`py-2 px-1 rounded-md text-sm font-medium transition-colors ${
                  selectedGenres.includes(genre)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                disabled={!selectedGenres.includes(genre) && selectedGenres.length >= 5}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-8 mt-4">
            <button
              type="button"
              onClick={handleBack}
              className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={selectedGenres.length !== 5}
              className={`py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                selectedGenres.length === 5
                  ? 'bg-indigo-600 hover:bg-indigo-700'
                  : 'bg-indigo-300 cursor-not-allowed'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreInterests;
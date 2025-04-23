import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

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
      // Save selected genres to localStorage or your state management
      localStorage.setItem('selectedGenres', JSON.stringify(selectedGenres));
      
      // Mark onboarding as complete
      localStorage.setItem('isOnboarded', 'true');
      localStorage.setItem('isAuthenticated', 'true');
      
      // Redirect to news feed
      navigate('/news-feed');
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous screen
  };

  return (
    <div className="min-h-screen flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex mb-5 ml-4">
        <img src={assets.logo} className='drop-shadow' alt="AnimeNexa Logo" />
      </div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-start ml-5">
          <h1 className="text-3xl font-bold text-start text-black mb-2">
            Genre Interests
          </h1>
          <p className="mt-2 text-gray-600 mb-6">
            Select 5 anime genres that interest you.
            <span className="block text-sm text-purple-500 mt-1">
              {selectedGenres.length}/5 selected
            </span>
          </p>
        </div>

        <div className="mt-4 bg-white py-6 px-9 sm:px-6">
          <div className="grid grid-cols-3 gap-3">
            {allGenres.map((genre) => (
              <button
                key={genre}
                type="button"
                onClick={() => toggleGenre(genre)}
                className={`py-3 border rounded-full font-medium transition-colors ${
                  selectedGenres.includes(genre)
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-800 hover:bg-secondary border-gray-200'
                }`}
                disabled={!selectedGenres.includes(genre) && selectedGenres.length >= 5}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="flex flex-col pt-8 mt-4">
            <button
              onClick={handleSubmit}
              disabled={selectedGenres.length !== 5}
              className={`w-full mt-20 mb-4 flex justify-center py-3 rounded-md shadow-sm font-medium text-white focus:outline-none ${
                selectedGenres.length === 5
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Next
            </button>
            
            <button 
              onClick={handleBack}
              className="w-full border border-gray-300 hover:bg-secondary text-black py-3 rounded-md font-medium"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreInterests;
import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="relative w-full max-w-lg">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="block w-full py-2 px-4 pr-16 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-150"
        />
        {/* Search Button */}
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-4 py-2 bg-blue-600 text-white rounded-r-lg border border-blue-600 shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 4a7 7 0 11-7 7 7 7 0 017-7zM18 20h-2a2 2 0 01-2-2v-1a2 2 0 012-2h2a2 2 0 012 2v1a2 2 0 01-2 2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

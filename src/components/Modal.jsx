import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'; 

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 text-gray-600 hover:text-gray-800"
          aria-label="Close"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h3 className="text-lg font-semibold mb-4 text-red-600 text-center">Wrong Credential <br /> Please try again.</h3>
        <p className="text-sm text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full py-2 px-4 bg-red-500 text-white font-medium rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

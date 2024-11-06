import React from 'react';

function Navbar() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <div className="text-lg font-bold">Nirma University</div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-200">🔔</button>
        <button className="p-2 rounded-full hover:bg-gray-200">🔓</button>
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
}

export default Navbar;

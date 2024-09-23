import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/gamerregister');
  };

  return (
    <header className="bg-black h-16 flex items-center justify-between px-4">
      {/* Empty space on the left */}
      <div></div>

      {/* Register button on the right */}
      <button
        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        onClick={handleRegisterClick}
      >
        Register
      </button>
    </header>
  );
};

export default Header;

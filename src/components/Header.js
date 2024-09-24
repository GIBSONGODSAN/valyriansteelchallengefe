import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/gamerregister');
  };

  const handleGamesClick = () => {
    navigate('/game');
  }
  return (
    <header className="bg-black h-16 flex items-center justify-between px-4">
      {/* Empty space on the left */}
      <div></div>
  
      {/* Container for buttons on the right */}
      <div className="ml-auto flex space-x-4">
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          onClick={handleGamesClick}
        >
          Games
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
    </header>
  );
}  

export default Header;

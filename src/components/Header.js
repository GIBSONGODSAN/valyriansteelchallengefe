import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const targetDate = useMemo(() => new Date('2024-09-28T15:00:00'), []);

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleRegisterClick = () => {
    navigate('/gamerregister');
  };

  const handleGamesClick = () => {
    navigate('/game');
  };

  const handleUpdateScoreClick = () => {
    navigate('/updatescore');
  };

  return (
    <header className="bg-black h-16 flex items-center justify-between px-4 flex-wrap">
      {/* Timer on the left */}
      <div className="text-white text-lg font-cinzeldecorative ml-4 md:ml-10 mb-2 md:mb-0">
        {timeLeft.days !== undefined ? (
          <>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </>
        ) : (
          "Time's up!"
        )}
      </div>

      {/* Container for buttons on the right */}
      <div className="flex space-x-2 md:space-x-4 ml-auto mt-2 md:mt-0">
        <button
          className="bg-red-500 text-white py-1 px-3 md:py-2 md:px-4 rounded-lg hover:bg-red-600 font-cinzeldecorative text-sm md:text-base"
          onClick={handleUpdateScoreClick}>
            UpdateScore
        </button>
        <button
          className="bg-red-500 text-white py-1 px-3 md:py-2 md:px-4 rounded-lg hover:bg-red-600 font-cinzeldecorative text-sm md:text-base"
          onClick={handleGamesClick}
        >
          Games
        </button>
        <button
          className="bg-red-500 text-white py-1 px-3 md:py-2 md:px-4 rounded-lg hover:bg-red-600 font-cinzeldecorative text-sm md:text-base"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;

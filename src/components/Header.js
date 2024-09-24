import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // Wrap targetDate with useMemo to avoid recalculating on every render
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
  }, [targetDate]); // Now targetDate is memoized and included as a dependency

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
    <header className="bg-black h-16 flex items-center justify-between px-4">
      {/* Timer on the left */}
      <div className="text-white text-lg font-cinzeldecorative ml-10">
        {timeLeft.days !== undefined ? (
          <>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </>
        ) : (
          "Time's up!"
        )}
      </div>

      {/* Container for buttons on the right */}
      <div className="ml-auto flex space-x-4">
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 font-cinzeldecorative"
          onClick={handleUpdateScoreClick}>
            UpdateScore
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 font-cinzeldecorative"
          onClick={handleGamesClick}
        >
          Games
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 font-cinzeldecorative"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;

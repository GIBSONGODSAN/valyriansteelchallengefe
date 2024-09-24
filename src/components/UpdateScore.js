import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Valyrian from '../assets/Valyrian.png';

const UpdateScore = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeamId, setSelectedTeamId] = useState('');
  const [selectedTeamName, setSelectedTeamName] = useState('');
  const [eventScores, setEventScores] = useState({});
  const [selectedEvent, setSelectedEvent] = useState('');
  const [score, setScore] = useState(0);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(''); // Error message for wrong credentials

  useEffect(() => {
    if (isAuthenticated) {
      // Fetch the teams when the component mounts
      axios
        .get('https://valyriansteelchallenge.onrender.com/teams')
        .then(response => {
          const sortedTeams = response.data.sort((a, b) =>
            a.teamname.localeCompare(b.teamname)
          );
          setTeams(sortedTeams);
        })
        .catch(error => {
          console.error('Error fetching teams:', error);
        });
    }
  }, [isAuthenticated]); // Fetch teams only when authenticated

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'valyrian' && password === 'pass123') {
      setIsAuthenticated(true);
      setAuthError(''); // Clear error if any
    } else {
      setAuthError('Invalid username or password');
    }
  };

  const handleTeamChange = (e) => {
    const selectedTeam = teams.find(team => team.teamname === e.target.value);
    setSelectedTeamId(selectedTeam.id);
    setSelectedTeamName(selectedTeam.teamname);

    // Fetch the event scores for the selected team
    axios
      .get(`https://valyriansteelchallenge.onrender.com/gamer/${selectedTeam.teamname}`)
      .then(response => {
        const events = response.data.eventScores;
        // Filter events that have a value of 0
        const filteredEvents = Object.entries(events).filter(
          ([key, value]) => value === 0
        );
        setEventScores(Object.fromEntries(filteredEvents));
      })
      .catch(error => {
        console.error('Error fetching event scores:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the request body
    const requestBody = {
      id: selectedTeamId,
      teamname: selectedTeamName,
      eventName: selectedEvent,
      score: parseInt(score, 10),
    };

    // Send the POST request
    axios
      .post('https://valyriansteelchallenge.onrender.com/gamer/score', requestBody)
      .then(response => {
        console.log('Score submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting score:', error);
      });
  };

  return (
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${Valyrian})` }}
    >
      <div className="bg-black bg-opacity-40 rounded-lg p-6 md:p-8 shadow-lg w-full max-w-lg md:max-w-4xl lg:max-w-5xl mx-auto">
        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6 text-center tracking-wider font-cinzeldecorative">
              Login
            </h2>
            {authError && (
              <p className="text-red-500 mb-4">{authError}</p>
            )}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mb-4 w-full p-2 rounded-md font-cinzel"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mb-4 w-full p-2 rounded-md font-cinzel"
            />
            <button
              type="submit"
              className="bg-black bg-opacity-50 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded"
            >
              Login
            </button>
          </form>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-white mb-6 text-center tracking-wider font-cinzeldecorative">
              Mark Score
            </h2>

            <h1 className="text-white mb-4 font-cinzel">Select a Team</h1>
            <select
              onChange={handleTeamChange}
              value={selectedTeamName}
              className="mb-4 w-full p-2 rounded-md font-cinzel"
            >
              <option value="">Select a team</option>
              {teams.map((team, index) => (
                <option key={index} value={team.teamname}>
                  {team.teamname}
                </option>
              ))}
            </select>

            {Object.keys(eventScores).length > 0 && (
              <>
                <h2 className="text-white mb-4 font-cinzel">Select an Event Score</h2>
                <select
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  value={selectedEvent}
                  className="mb-4 w-full p-2 rounded-md font-cinzel"
                >
                  <option value="">Select an event</option>
                  {Object.keys(eventScores).map((event, index) => (
                    <option key={index} value={event}>
                      {event}
                    </option>
                  ))}
                </select>

                {selectedEvent && (
                  <form onSubmit={handleSubmit} className="mt-4">
                    <h3 className="text-white mb-2 font-cinzel">Enter a Score</h3>
                    <input
                      type="number"
                      value={score}
                      onChange={(e) => setScore(e.target.value)}
                      placeholder="Enter a score"
                      required
                      className="mb-4 w-full p-2 rounded-md font-cinzel"
                    />
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-black bg-opacity-50 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UpdateScore;

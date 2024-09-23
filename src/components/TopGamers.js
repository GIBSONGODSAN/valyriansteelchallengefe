import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Valyrian from '../assets/Valyrian.png';  // Import your background image
const TopGamers = () => {
    const [gamers, setGamers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // State for the current page
    const gamersPerPage = 10; // Number of gamers per page
  
    useEffect(() => {
      const fetchGamers = async () => {
        try {
          const response = await axios.get('https://valyriansteelchallenge.onrender.com/top-gamers');
          setGamers(response.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchGamers();
    }, []);
  
    if (loading) return <p className="text-center text-xl text-gray-300">Loading...</p>;
    if (error) return <p className="text-center text-xl text-red-500">Error: {error}</p>;
  
    // Get the current gamers for the page
    const indexOfLastGamer = currentPage * gamersPerPage;
    const indexOfFirstGamer = indexOfLastGamer - gamersPerPage;
    const currentGamers = gamers.slice(indexOfFirstGamer, indexOfLastGamer);
  
    // Pagination controls
    const totalPages = Math.ceil(gamers.length / gamersPerPage);
  
    const goToNextPage = () => {
      setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };
  
    const goToPreviousPage = () => {
      setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };
    return (
        <div className="relative bg-gray-900 min-h-screen">
            {/* Background image */}
            <img
                src={Valyrian} 
                alt="Valyrian Steel Background"
                className="absolute inset-0 h-full w-full object-cover opacity-50"
            />

            {/* Overlay content */}
            <div className="relative z-5 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-10">
                
                {/* Responsive Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-700 font-cinzeldecorative text-stroke">
                    The Valyrian Steel
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-700 mb-10 font-cinzeldecorative text-stroke">
                    Challenge
                </h1>
                {/* Leaderboard Card */}
                <div className="bg-black bg-opacity-40 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg w-full max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
                    <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-4 sm:mb-6 font-cinzeldecorative">
                        Leaderboard
                    </h2>

                    {/* Responsive Table */}
          <table className="min-w-full table-auto border-collapse font-cinzel">
            <thead>
              <tr className="">
                <th className="px-2 sm:px-4 py-2 text-left text-gray-300 font-semibold">Position</th>
                <th className="px-2 sm:px-4 py-2 text-left text-gray-300 font-semibold">Team Name</th>
                <th className="px-2 sm:px-4 py-2 text-left text-gray-300 font-semibold">College Name</th>
                <th className="px-2 sm:px-4 py-2 text-left text-gray-300 font-semibold">Total Score</th>
              </tr>
            </thead>
            <tbody>
              {currentGamers.map((gamer, index) => (
                <tr key={gamer._id} className={`${index % 2 === 0 ? 'bg-black bg-opacity-30' : 'bg-black bg-opacity-30'} `}>
                  <td className="px-2 sm:px-4 py-2 text-gray-200">{indexOfFirstGamer + index + 1}</td>
                  <td className="px-2 sm:px-4 py-2 text-gray-200">{gamer.teamname}</td>
                  <td className="px-2 sm:px-4 py-2 text-gray-200">{gamer.collegename}</td>
                  <td className="px-2 sm:px-4 py-2 text-gray-200">{gamer.totalScore}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-4">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 bg-black bg-opacity-30 text-white rounded ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
            >
              Previous
            </button>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 bg-black bg-opacity-30 text-white rounded ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
            >
              Next
            </button>
          </div>

          {/* Page Number Indicator */}
          <p className="text-center text-white mt-2">Page {currentPage} of {totalPages}</p>
        </div>
      </div>
    </div>
  );
};


export default TopGamers;

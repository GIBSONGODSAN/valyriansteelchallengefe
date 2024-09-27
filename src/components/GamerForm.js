import React, { useState } from 'react';
import axios from 'axios';
import Valyrian from '../assets/Valyrian.png';

const GamerForm = () => {
    const [gamerData, setGamerData] = useState({
        teamname: '',
        email: '',
        collegename: '',
        membernameone: '',
        membernametwo: '',
        membernamethree: '',
        membernamefour: 'null',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setGamerData({
            ...gamerData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://valyriansteelchallenge.onrender.com/api/gamers', gamerData);
            
            if (response.status === 201) {
                setMessage('Gamer details submitted successfully!');
                window.alert('New user created!');
                // Optionally, reset the form after submission
                setGamerData({
                    teamname: '',
                    email: '',
                    collegename: '',
                    membernameone: '',
                    membernametwo: '',
                    membernamethree: '',
                    membernamefour: '',
                });
            } else {
                setMessage('Failed to submit gamer details.');
            }
        } catch (error) {
            setMessage('Failed to submit gamer details.');
            window.alert('Error: Failed to create new user.');
            console.error('Error submitting gamer details:', error);
        }
    };

    return (
        <div
            className="relative min-h-screen bg-fixed bg-cover bg-center"
            style={{ backgroundImage: `url(${Valyrian})` }}
        >
            <div className="bg-black bg-opacity-40 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg w-full max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6 text-center tracking-wider font-cinzeldecorative">
                    Register Team
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Team Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <label
                            className="block text-gray-300 text-lg font-semibold font-cinzel text-center pr-4"
                            htmlFor="teamname"
                        >
                            Team Name
                        </label>
                        <input
                            type="text"
                            name="teamname"
                            id="teamname"
                            value={gamerData.teamname}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-black bg-opacity-60 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <label
                            className="block text-gray-300 text-lg font-semibold font-cinzel text-center pr-4"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={gamerData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-black bg-opacity-60 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
                            required
                        />
                    </div>

                    {/* College Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <label
                            className="block text-gray-300 text-lg font-semibold font-cinzel text-center pr-4"
                            htmlFor="collegename"
                        >
                            College Name
                        </label>
                        <input
                            type="text"
                            name="collegename"
                            id="collegename"
                            value={gamerData.collegename}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-black bg-opacity-60 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
                            required
                        />
                    </div>

                    {/* Team Member 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <label
                            className="block text-gray-300 text-lg font-semibold font-cinzel text-center pr-4"
                            htmlFor="membernameone"
                        >
                            Member 1
                        </label>
                        <input
                            type="text"
                            name="membernameone"
                            id="membernameone"
                            value={gamerData.membernameone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-black bg-opacity-60 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
                            required
                        />
                    </div>

                    {/* Team Member 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <label
                            className="block text-gray-300 text-lg font-semibold font-cinzel text-center pr-4"
                            htmlFor="membernametwo"
                        >
                            Member 2
                        </label>
                        <input
                            type="text"
                            name="membernametwo"
                            id="membernametwo"
                            value={gamerData.membernametwo}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-black bg-opacity-60 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
                            required
                        />
                    </div>

                    {/* Team Member 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <label
                            className="block text-gray-300 text-lg font-semibold font-cinzel text-center pr-4"
                            htmlFor="membernamethree"
                        >
                            Contact Number
                        </label>
                        <input
                            type="text"
                            name="membernamethree"
                            id="membernamethree"
                            value={gamerData.membernamethree}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-black bg-opacity-60 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
                            required
                        />
                    </div>

                    {/* Team Member 4 */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <label
                            className="block text-gray-300 text-lg font-semibold font-cinzel text-center pr-4"
                            htmlFor="membernamefour"
                        >
                            Team Member 4
                        </label>
                        <input
                            type="text"
                            name="membernamefour"
                            id="membernamefour"
                            value={gamerData.membernamefour}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-black bg-opacity-60 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900"
                            required
                        />
                    </div> */}

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="py-3 px-8 bg-black bg-opacity-50 text-white font-bold text-lg rounded-lg hover:bg-gray-900 transition duration-300 font-cinzel"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                {message && <p className="mt-4 text-center text-white">{message}</p>}
            </div>
        </div>
    );
};

export default GamerForm;

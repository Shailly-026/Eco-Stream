// pages/support.js

import React from 'react';

const SupportPage = () => {
    const helpItems = [
        "Can’t log in to Spotify",
        "Failed payment help",
        "Charged too much",
        "Invite or remove Family plan members",
        "How to change your payment details",
    ];

    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
                <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
                <p className="mb-6">
                    <a href="#" className="text-green-500">Log in</a> for faster help
                </p>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-800 border border-gray-600 rounded-full py-2 px-4 text-white"
                    />
                </div>
                <ul className="w-full max-w-md">
                    <li className="bg-gray-800 hover:bg-gray-700 transition duration-300 rounded p-4 mb-2 cursor-pointer">
                        Payments & billing
                    </li>
                    <li className="bg-gray-800 hover:bg-gray-700 transition duration-300 rounded p-4 mb-2 cursor-pointer">
                        Manage your account
                    </li>
                    <li className="bg-gray-800 hover:bg-gray-700 transition duration-300 rounded p-4 mb-2 cursor-pointer">
                        Premium plans
                    </li>
                    <li className="bg-gray-800 hover:bg-gray-700 transition duration-300 rounded p-4 mb-2 cursor-pointer">
                        In-app features
                    </li>
                    <li className="bg-gray-800 hover:bg-gray-700 transition duration-300 rounded p-4 mb-2  cursor-pointer">
                        Device and trouble shooting
                    </li>

                    <li className="bg-gray-800 hover:bg-gray-700 transition duration-300 rounded p-4  cursor-pointer">
                        Safety and privacy
                    </li>

                </ul>
            </div>
            <div >
                <section className="bg-black text-white p-6 text-center items-center">
                    <h2 className="text-3xl font-bold mb-4">Quick help</h2>
                    <ul className="space-y-2 justify-center text-center items-center">
                        {helpItems.map((item, index) => (
                            <li key={index} className="flex justify-center items-center border-grey-700 pb-2">
                                <span>{item}</span>
                                <span className="text-gray-400"></span>
                            </li>
                        ))}
                    </ul>
                </section>

            </div>

        </div>
















    );
};

export default SupportPage;
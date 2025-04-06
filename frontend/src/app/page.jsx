"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authType, setAuthType] = useState(""); // "login" or "signup"

  // Open modal and set auth type
  const openModal = (type) => {
    setAuthType(type);
    setIsModalOpen(true);
  };

  // Redirect user based on selection
  const handleSelection = (role) => {
    const path = authType === "login" ? `/${role}-login` : `/${role}-signup`;
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">VoiceCast</div>
        <nav className="space-x-4">
          <button onClick={() => openModal("login")} className="hover:text-gray-300">Login</button>
          <button onClick={() => openModal("signup")} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Sign Up
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Eco Stream</h1>
        <p className="mt-4 text-lg text-gray-400">A fully voice-operated storytelling podcast platform.</p>

        <div className="mt-8 space-x-4">
          <Link href="/browse-all">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-lg">Explore Podcasts</button>
          </Link>
          <Link href="/artist/record-podcast">
            <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-lg">Add Your Podcast</button>
          </Link>
        </div>
      </div>

      {/* Role Selection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4">Select Your Role</h2>
            <div className="space-x-4">
              <button
                onClick={() => handleSelection("user")}
                className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg text-lg"
              >
                User
              </button>
              <button
                onClick={() => handleSelection("artist")}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg text-lg"
              >
                Artist
              </button>
            </div>
            <button onClick={() => setIsModalOpen(false)} className="mt-4 text-gray-400 hover:text-white">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

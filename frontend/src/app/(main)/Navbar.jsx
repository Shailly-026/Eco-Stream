'use client';
import React, { useState } from "react";
import Head from 'next/head';
import { Mic } from 'lucide-react';

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
    <div className="bg-black text-white">
      <Head>
        <title>EcoStream</title>
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Mic className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">EcoStream</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="/#Features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="/#How-it-works" className="hover:text-purple-400 transition-colors">How It Works</a>
            <a href="/#Pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={() => openModal("login")} className="text-sm px-4 py-2 border border-purple-500 rounded-full hover:bg-purple-500/20 transition-colors">Log In</button>
            <button onClick={() => openModal("signup")} className="text-sm px-4 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">Sign Up Free</button>
          </div>
        </div>
      </header>

      {/* Role Selection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
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

'use client';
import React, { useState } from 'react';
import { UserCircle, Headphones, Clock, Heart, BookmarkPlus, Settings } from 'lucide-react';
import SettingsBar from '../Settings-Bar/page';

const UserProfile = () => {
  const [hovered, setHovered] = useState(false);

  const user = {
    name: "Neelam Saaraswat",
    username: "@neelamsaraswat",
    bio: "Audio enthusiast. Podcast lover.",
    recentlyPlayed: [
      { id: 1, title: "The Daily Tech", publisher: "Tech Insider", cover: "/api/placeholder/60/60" },
      { id: 2, title: "Crime Junkie", publisher: "AudioChuck", cover: "/api/placeholder/60/60" },
      { id: 3, title: "Mind Matters", publisher: "Psychology Today", cover: "/api/placeholder/60/60" }
    ],
  };

  return (
    <div className="min-h-screen w-full bg-black text-gray-100 font-sans pb-24">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-purple-700 p-4 flex justify-between items-center shadow-md relative z-40">
        <h1 className="text-2xl font-bold tracking-wide text-white">EcoStream</h1>

        {/* Settings Icon + Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <button className="p-2 bg-purple-800 hover:bg-purple-600 rounded-full transition">
            <Settings size={20} className="text-white" />
          </button>

          {/* Dropdown appears below icon */}
          <div className="absolute right-0 top-full mt-2">
            <SettingsBar hovered={hovered} />
          </div>
        </div>
      </header>

      {/* Profile Info */}
      <section className="relative bg-gradient-to-br from-purple-800/30 to-black py-8 px-4 text-center">
        <div className="w-28 h-28 mx-auto rounded-full bg-purple-900 border-4 border-purple-600 p-1">
          <UserCircle size={96} className="text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold mt-4">{user.name}</h2>
        <p className="text-purple-400">{user.username}</p>
        <p className="text-gray-400 mt-2 max-w-md mx-auto">{user.bio}</p>
      </section>

      {/* Recently Played */}
      <section className="px-6 mt-8">
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 text-purple-300">
          <Clock size={20} />
          Recently Played
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {user.recentlyPlayed.map(podcast => (
            <div
              key={podcast.id}
              className="bg-gradient-to-br from-gray-800/70 to-gray-900 p-4 rounded-xl border border-gray-700 shadow-md hover:shadow-purple-800/30 transition group"
            >
              <div className="flex items-center gap-4">
                <img src={podcast.cover} alt={podcast.title} className="w-14 h-14 rounded-md object-cover" />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold group-hover:text-purple-300 transition">{podcast.title}</h4>
                  <p className="text-sm text-gray-400">{podcast.publisher}</p>
                </div>
                <button className="text-purple-400 hover:text-purple-300">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
'use client';
import React from 'react';
import { UserCircle, Headphones, Clock, Calendar, Share2, Heart, BookmarkPlus, Settings } from 'lucide-react';

const UserProfile = () => {
  // Sample user data
  const user = {
    name: "Alex Johnson",
    username: "@alexjpodcast",
    bio: "Audio enthusiast. Podcast creator. Music lover. Always on the hunt for the next great listen.",
    followers: 1245,
    following: 328,
    recentlyPlayed: [
      { id: 1, title: "The Daily Tech", publisher: "Tech Insider", cover: "/api/placeholder/60/60" },
      { id: 2, title: "Crime Junkie", publisher: "AudioChuck", cover: "/api/placeholder/60/60" },
      { id: 3, title: "Mind Matters", publisher: "Psychology Today", cover: "/api/placeholder/60/60" }
    ],
    playlists: [
      { id: 1, title: "Morning Commute", episodeCount: 12 },
      { id: 2, title: "Workout Mix", episodeCount: 8 },
      { id: 3, title: "Evening Wind Down", episodeCount: 15 }
    ]
  };

  return (
    <div className="flex flex-col h- w-full bg-gray-900 text-gray-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-purple-700 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Soundwave</h1>
          <button className="p-2 rounded-full bg-purple-800 hover:bg-purple-600">
            <Settings size={20} />
          </button>
        </div>
      </header>

      {/* Profile Section */}
      <div className="relative">
        {/* Profile Cover */}
        <div className="h-32 bg-gradient-to-r from-purple-800 to-purple-500"></div>

        {/* Profile Info */}
        <div className="px-6 pb-4">
          <div className="flex flex-col items-center -mt-16 mb-4">
            <div className="rounded-full bg-gray-800 p-1 border-4 border-gray-900">
              <UserCircle size={96} className="text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold mt-2">{user.name}</h2>
            <p className="text-purple-400">{user.username}</p>
            <p className="text-center text-gray-400 mt-2 max-w-md">{user.bio}</p>

            <div className="flex gap-4 mt-4">
              <div className="text-center">
                <p className="font-bold">{user.followers}</p>
                <p className="text-sm text-gray-400">Followers</p>
              </div>
              <div className="text-center">
                <p className="font-bold">{user.following}</p>
                <p className="text-sm text-gray-400">Following</p>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="px-4 py-2 bg-purple-600 rounded-full hover:bg-purple-500 flex items-center gap-1">
                <Headphones size={16} />
                <span>Follow</span>
              </button>
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recently Played */}
      <div className="px-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Clock size={18} className="text-purple-400" />
          Recently Played
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {user.recentlyPlayed.map(podcast => (
            <div key={podcast.id} className="bg-gray-800 p-4 rounded-lg flex items-center gap-3 hover:bg-gray-700">
              <img src={podcast.cover} alt={podcast.title} className="w-12 h-12 rounded" />
              <div>
                <h4 className="font-medium">{podcast.title}</h4>
                <p className="text-sm text-gray-400">{podcast.publisher}</p>
              </div>
              <button className="ml-auto text-purple-400 hover:text-purple-300">
                <Heart size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Playlists */}
      <div className="px-6 mt-8">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <BookmarkPlus size={18} className="text-purple-400" />
          My Playlists
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {user.playlists.map(playlist => (
            <div key={playlist.id} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{playlist.title}</h4>
                <span className="text-xs bg-purple-800 px-2 py-1 rounded-full">{playlist.episodeCount} episodes</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-sm text-gray-400">
                <Calendar size={14} />
                <span>Updated 2 days ago</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="">
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 flex justify-around">
          <button className="flex flex-col items-center text-purple-400">
            <Headphones size={20} />
            <span className="text-xs mt-1">Discover</span>
          </button>
          <button className="flex flex-col items-center text-gray-500 hover:text-purple-400">
            <BookmarkPlus size={20} />
            <span className="text-xs mt-1">Library</span>
          </button>
          <button className="flex flex-col items-center text-gray-500 hover:text-purple-400">
            <UserCircle size={20} />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
        {/* Spacer to prevent content from being hidden behind fixed footer */}
        {/* <div className="h-20"></div> */}
      </div>
    </div>
  );
};

export default UserProfile;
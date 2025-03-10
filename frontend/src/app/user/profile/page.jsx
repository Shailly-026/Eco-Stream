'use client';
import React from 'react';
import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulated user data (Replace with API call)
    setUser({
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://i.pravatar.cc/150?img=3",
      bio: "Storytelling enthusiast and podcast lover.",
      favoriteGenres: ["Horror", "Sci-Fi", "Fantasy"],
    });
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-green-500"
          />
        </div>
        <h2 className="text-2xl font-bold text-center">{user.name}</h2>
        <p className="text-center text-gray-400">{user.email}</p>
        <p className="mt-2 text-center">{user.bio}</p>
        <h3 className="mt-4 text-lg font-semibold">Favorite Genres</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {user.favoriteGenres.map((genre, index) => (
            <span
              key={index}
              className="bg-green-600 px-3 py-1 rounded-full text-sm"
            >
              {genre}
            </span>
          ))}
        </div>
        <button className="w-full mt-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

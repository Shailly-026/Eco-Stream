// pages/edit-profile.js
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserCircle } from 'lucide-react';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const router = useRouter();

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setName(storedUser.name);
      setUsername(storedUser.username);
      setBio(storedUser.bio);
    }
  }, []);

  // Handle save functionality
  const handleSave = () => {
    const updatedUser = { name, username, bio };
    localStorage.setItem('user', JSON.stringify(updatedUser)); // Save updated user to localStorage
    alert("Profile Updated Successfully!");
    router.push('/profile'); // Redirect to Profile Page
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans pb-24">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-purple-700 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold tracking-wide text-white">Edit Profile</h1>
      </header>

      {/* Edit Profile Form */}
      <section className="px-6 py-8">
        <div className="w-28 h-28 mx-auto rounded-full bg-purple-900 border-4 border-purple-600 p-1">
          <UserCircle size={96} className="text-purple-400" />
        </div>

        <div className="mt-8">
          <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
          <input
            id="name"
            type="text"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="username" className="block text-sm text-gray-400 mb-2">Username</label>
          <input
            id="username"
            type="text"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="bio" className="block text-sm text-gray-400 mb-2">Bio</label>
          <textarea
            id="bio"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
            rows="4"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        {/* Save Changes Button */}
        <div className="mt-6">
          <button
            onClick={handleSave}
            className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition"
          >
            Save Changes
          </button>
        </div>
      </section>
    </div>
  );
};

export default EditProfile;

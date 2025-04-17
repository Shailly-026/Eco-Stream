'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Edit, FileText, Volume2, Share2 } from 'lucide-react';

const SettingsBar = ({ hovered }) => {
  const router = useRouter();

  const handleSignOut = () => {
    // Clear authentication data (e.g., tokens)
    localStorage.removeItem('authToken'); // Example: Remove token from localStorage
    sessionStorage.clear(); // Clear session storage if needed

    // Redirect to the login page
    router.push('/user-login');
  };

  return (
    <div
      className={`bg-gradient-to-r from-purple-900 via-purple-800 to-black p-4 rounded-lg shadow-lg transition-all duration-300 z-50 w-64 ${
        hovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <ul>
        <li className="flex items-center py-2 text-white text-sm hover:bg-purple-700 rounded-lg transition-all">
          <Edit size={20} className="mr-3" />
          <span>Edit Profile</span>
        </li>
        <li
          onClick={handleSignOut}
          className="flex items-center py-2 text-white text-sm hover:bg-purple-700 rounded-lg transition-all cursor-pointer"
        >
          <LogOut size={20} className="mr-3" />
          <span>Sign Out</span>
        </li>
        <li className="flex items-center py-2 text-white text-sm hover:bg-purple-700 rounded-lg transition-all">
          <FileText size={20} className="mr-3" />
          <span>My Episodes</span>
        </li>
        <li className="flex items-center py-2 text-white text-sm hover:bg-purple-700 rounded-lg transition-all">
          <Volume2 size={20} className="mr-3" />
          <span>Audio Settings</span>
        </li>
        <li className="flex items-center py-2 text-white text-sm hover:bg-purple-700 rounded-lg transition-all">
          <Share2 size={20} className="mr-3" />
          <span>Share Podcast</span>
        </li>
      </ul>
    </div>
  );
};

export default SettingsBar;





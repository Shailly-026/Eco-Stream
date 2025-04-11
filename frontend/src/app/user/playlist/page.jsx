// PodcastPlaylist.jsx
import React from 'react';

const PodcastPlaylist = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-900 to-purple-600 p-6 rounded-lg mb-8 shadow-lg border border-purple-500/30">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text shadow-sm">
            Your Podcast Name
          </h1>
        </header>
        
        {/* Podcast Info */}
        <div className="flex items-center mb-6 bg-gradient-to-br from-gray-800 to-purple-900/40 p-4 rounded-lg shadow-md">
          <div className="w-28 h-28 bg-gradient-to-br from-purple-800 to-purple-500 rounded-lg mr-5 flex items-center justify-center text-white shadow-md">
            Podcast Logo
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
              Your Podcast Name
            </h2>
            <p className="text-gray-300">Hosted by: [Host Name]</p>
            <p className="text-gray-300">New episodes every [Day of Week]</p>
            <p className="text-gray-300">Category: [Podcast Category]</p>
          </div>
        </div>
        
        {/* Playlist */}
        <div className="bg-gradient-to-br from-gray-800 to-purple-900/50 rounded-lg p-5 shadow-xl border border-purple-500/10">
          {/* Episode 1 */}
          <div className="flex items-center p-4 border-b border-purple-500/20 bg-gradient-to-br from-gray-800/40 to-purple-900/40 mb-2 rounded hover:from-purple-900/40 hover:to-purple-800/60 transform hover:-translate-y-0.5 transition-all shadow hover:shadow-md">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-800 to-purple-500 rounded-full mr-4 flex items-center justify-center font-bold shadow">
              1
            </div>
            <div className="flex-grow">
              <div className="font-bold text-white mb-1">Episode Title Goes Here</div>
              <div className="text-sm text-gray-300">This is a brief description of the episode. Talk about what listeners will learn or what topics you'll cover.</div>
            </div>
            <div className="text-sm text-purple-300 bg-purple-800/20 px-2 py-1 rounded-full">
              45:20
            </div>
            <div className="ml-3 w-8 h-8 bg-purple-700/30 rounded-full flex items-center justify-center hover:bg-purple-700/70 transition-all transform hover:scale-110 cursor-pointer">
              ▶️
            </div>
          </div>
          
          {/* Episode 2 */}
          <div className="flex items-center p-4 border-b border-purple-500/20 bg-gradient-to-br from-gray-800/40 to-purple-900/40 mb-2 rounded hover:from-purple-900/40 hover:to-purple-800/60 transform hover:-translate-y-0.5 transition-all shadow hover:shadow-md">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-800 to-purple-500 rounded-full mr-4 flex items-center justify-center font-bold shadow">
              2
            </div>
            <div className="flex-grow">
              <div className="font-bold text-white mb-1">Another Great Episode Title</div>
              <div className="text-sm text-gray-300">In this episode, we dive deep into interesting topics with special guest experts.</div>
            </div>
            <div className="text-sm text-purple-300 bg-purple-800/20 px-2 py-1 rounded-full">
              38:15
            </div>
            <div className="ml-3 w-8 h-8 bg-purple-700/30 rounded-full flex items-center justify-center hover:bg-purple-700/70 transition-all transform hover:scale-110 cursor-pointer">
              ▶️
            </div>
          </div>
          
          {/* Episode 3 */}
          <div className="flex items-center p-4 border-b border-purple-500/20 bg-gradient-to-br from-gray-800/40 to-purple-900/40 mb-2 rounded hover:from-purple-900/40 hover:to-purple-800/60 transform hover:-translate-y-0.5 transition-all shadow hover:shadow-md">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-800 to-purple-500 rounded-full mr-4 flex items-center justify-center font-bold shadow">
              3
            </div>
            <div className="flex-grow">
              <div className="font-bold text-white mb-1">Fascinating Discussion About Topics</div>
              <div className="text-sm text-gray-300">Join us for an in-depth conversation about the latest trends and insights in our field.</div>
            </div>
            <div className="text-sm text-purple-300 bg-purple-800/20 px-2 py-1 rounded-full">
              52:07
            </div>
            <div className="ml-3 w-8 h-8 bg-purple-700/30 rounded-full flex items-center justify-center hover:bg-purple-700/70 transition-all transform hover:scale-110 cursor-pointer">
              ▶️
            </div>
          </div>
          
          {/* Episode 4 */}
          <div className="flex items-center p-4 border-b border-purple-500/20 bg-gradient-to-br from-gray-800/40 to-purple-900/40 mb-2 rounded hover:from-purple-900/40 hover:to-purple-800/60 transform hover:-translate-y-0.5 transition-all shadow hover:shadow-md">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-800 to-purple-500 rounded-full mr-4 flex items-center justify-center font-bold shadow">
              4
            </div>
            <div className="flex-grow">
              <div className="font-bold text-white mb-1">Special Interview Episode</div>
              <div className="text-sm text-gray-300">We're joined by a special guest to discuss their expertise and share valuable insights.</div>
            </div>
            <div className="text-sm text-purple-300 bg-purple-800/20 px-2 py-1 rounded-full">
              61:30
            </div>
            <div className="ml-3 w-8 h-8 bg-purple-700/30 rounded-full flex items-center justify-center hover:bg-purple-700/70 transition-all transform hover:scale-110 cursor-pointer">
              ▶️
            </div>
          </div>
          
          {/* Episode 5 */}
          <div className="flex items-center p-4 bg-gradient-to-br from-gray-800/40 to-purple-900/40 rounded hover:from-purple-900/40 hover:to-purple-800/60 transform hover:-translate-y-0.5 transition-all shadow hover:shadow-md">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-800 to-purple-500 rounded-full mr-4 flex items-center justify-center font-bold shadow">
              5
            </div>
            <div className="flex-grow">
              <div className="font-bold text-white mb-1">Answering Your Questions</div>
              <div className="text-sm text-gray-300">In this Q&A episode, we tackle the most common questions from our listeners.</div>
            </div>
            <div className="text-sm text-purple-300 bg-purple-800/20 px-2 py-1 rounded-full">
              42:18
            </div>
            <div className="ml-3 w-8 h-8 bg-purple-700/30 rounded-full flex items-center justify-center hover:bg-purple-700/70 transition-all transform hover:scale-110 cursor-pointer">
              ▶️
            </div>
          </div>
        </div>
        
        {/* Subscribe Section */}
        <div className="mt-8 text-center bg-gradient-to-br from-gray-800 to-purple-900/60 p-6 rounded-lg shadow-lg border border-purple-500/20">
          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
            Never Miss an Episode!
          </h3>
          <p className="mb-4 text-gray-300">Subscribe to our podcast on your favorite platform</p>
          <div className="space-x-2 space-y-2">
            <button className="bg-gradient-to-r from-purple-900 to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all hover:from-purple-800 hover:to-purple-500">
              Spotify
            </button>
            <button className="bg-gradient-to-r from-purple-900 to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all hover:from-purple-800 hover:to-purple-500">
              Apple Podcasts
            </button>
            <button className="bg-gradient-to-r from-purple-900 to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all hover:from-purple-800 hover:to-purple-500">
              Google Podcasts
            </button>
            <button className="bg-gradient-to-r from-purple-900 to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all hover:from-purple-800 hover:to-purple-500">
              YouTube
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPlaylist;
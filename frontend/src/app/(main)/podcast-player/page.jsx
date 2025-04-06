'use client';
import React from "react";
import { Play, Pause, Volume2, BookmarkPlus, Share2, Clock } from "lucide-react";

const PodcastDetailCard = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(35);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className=" mid-h-screen rounded-lg overflow-hidden shadow-xl bg-black text-white border border-purple-600">
      {/* Podcast Cover Image */}
      <div className="relative">
        <img 
          src="/api/placeholder/400/200" 
          alt="Podcast Cover" 
          className="w-full h-48 object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-purple-600 text-xs font-medium px-2 py-1 rounded-full">
            Voice Control Enabled
          </span>
        </div>
      </div>

      {/* Podcast Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-white">The Future of AI Technologies</h2>
        <p className="text-gray-400 text-sm mt-1">Tech Visionaries Podcast</p>
        
        <div className="flex items-center mt-3 text-gray-400 text-xs">
          <Clock className="h-4 w-4 mr-1" />
          <span>45 min</span>
          <span className="mx-2">•</span>
          <span>Apr 4, 2025</span>
          <span className="mx-2">•</span>
          <span>Episode 42</span>
        </div>
        
        <p className="mt-4 text-gray-300 text-sm">
          In this episode, we explore breakthrough AI technologies and their implications for the future of human-computer interaction.
        </p>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1">
            <span>12:30</span>
            <span>32:30 remaining</span>
          </div>
          <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="bg-purple-500 h-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={togglePlayPause}
              className="bg-purple-600 hover:bg-purple-700 rounded-full p-3 mr-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              {isPlaying ? 
                <Pause className="h-6 w-6" /> : 
                <Play className="h-6 w-6" />
              }
            </button>
            <Volume2 className="h-5 w-5 text-gray-400" />
          </div>
          
          <div className="flex space-x-4">
            <button className="text-gray-400 hover:text-purple-500 focus:outline-none">
              <BookmarkPlus className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-purple-500 focus:outline-none">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Voice Commands */}
        <div className="mt-6 bg-gray-900 rounded-lg p-3">
          <h3 className="text-sm font-medium text-purple-400 mb-2">Voice Commands</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center">
              <span className="text-gray-400">"Play podcast"</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400">"Pause audio"</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400">"Skip forward"</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400">"Bookmark this"</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetailCard;

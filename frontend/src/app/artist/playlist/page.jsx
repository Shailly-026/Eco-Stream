// PodcastArtistPlaylist.jsx
'use client'
import React, { useState } from 'react';
import { User } from 'lucide-react';
import { Play, Pause, Mic, Calendar, Music, Award, Clock, Share2, ExternalLink, Bookmark, ChevronRight, Star } from 'lucide-react';

const PodcastArtistPlaylist = () => {
  const [activeEpisode, setActiveEpisode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const artist = {
    name: "Alex Rivera",
    title: "Host & Producer",
    bio: "Award-winning podcast creator exploring the intersection of technology, culture, and human behavior. Featured on NPR, The New Yorker, and WIRED.",
    followers: "24.5K",
    episodes: 47,
    rating: 4.8,
    image: "/api/placeholder/400/400",
    socialLinks: [
      { name: "Twitter", url: "#" },
      { name: "Instagram", url: "#" },
      { name: "LinkedIn", url: "#" }
    ],
    awards: [
      "Best Technology Podcast 2024",
      "Rising Voice Award",
      "Digital Innovation Excellence"
    ]
  };
  
  const featuredEpisodes = [
    {
      id: 1,
      title: "The Ethics of AI Development",
      guests: ["Dr. Maya Patel", "Prof. James Chen"],
      description: "Diving deep into the ethical considerations surrounding artificial intelligence development and implementation in everyday technology.",
      date: "Apr 5, 2025",
      duration: "57:24",
      listens: "32.1K",
      featured: true,
      image: "/api/placeholder/400/400"
    },
    {
      id: 2,
      title: "Digital Privacy in the Post-Social Era",
      guests: ["Lisa Montgomery", "Nathan Zhao"],
      description: "Examining how privacy concerns have evolved alongside the changing landscape of social media and digital communication.",
      date: "Mar 22, 2025",
      duration: "48:36",
      listens: "28.7K",
      featured: true,
      image: "/api/placeholder/400/400"
    },
    {
      id: 3,
      title: "The Metaverse: Reality vs Hype",
      guests: ["Sophia Williams"],
      description: "Separating fact from fiction about the metaverse and exploring its actual potential for reshaping how we work, play, and connect.",
      date: "Mar 8, 2025",
      duration: "63:12",
      listens: "41.5K",
      featured: true,
      image: "/api/placeholder/400/400"
    }
  ];
  
  const recentEpisodes = [
    {
      id: 4,
      title: "Quantum Computing Simplified",
      guests: ["Dr. Robert Smith"],
      date: "Feb 28, 2025",
      duration: "44:18",
      listens: "19.3K",
      image: "/api/placeholder/400/400"
    },
    {
      id: 5,
      title: "The Future of Remote Work",
      guests: ["Emma Davis", "Michael Johnson"],
      date: "Feb 14, 2025",
      duration: "51:43",
      listens: "22.8K",
      image: "/api/placeholder/400/400"
    },
    {
      id: 6,
      title: "Cybersecurity Threats in 2025",
      guests: ["Adrian Chen"],
      date: "Jan 31, 2025",
      duration: "55:09",
      listens: "26.1K",
      image: "/api/placeholder/400/400"
    },
    {
      id: 7,
      title: "Digital Minimalism Movement",
      guests: ["Taylor Reed", "Jordan Alvarez"],
      date: "Jan 17, 2025",
      duration: "42:55",
      listens: "20.7K",
      image: "/api/placeholder/400/400"
    }
  ];
  
  const handlePlayToggle = (id) => {
    if (activeEpisode === id && isPlaying) {
      setIsPlaying(false);
    } else {
      setActiveEpisode(id);
      setIsPlaying(true);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Artist Header Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/90 to-black mb-10">
          {/* Abstract shapes in background */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-purple-800/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-12">
            {/* Artist Image */}
            <div className="relative mb-8 md:mb-0 md:mr-10">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-xl shadow-purple-900/30">
                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-purple-800 p-2 rounded-full shadow-lg">
                <Mic size={24} />
              </div>
            </div>
            
            {/* Artist Info */}
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">{artist.name}</h1>
              <p className="text-purple-300 text-lg font-medium mt-2">{artist.title}</p>
              
              <p className="mt-4 text-gray-300 max-w-2xl">{artist.bio}</p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
                    <Music size={18} className="text-purple-300" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{artist.episodes}</p>
                    <p className="text-xs text-purple-300">Episodes</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
                    <Award size={18} className="text-purple-300" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{artist.awards.length}</p>
                    <p className="text-xs text-purple-300">Awards</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
                    <Star size={18} className="text-purple-300" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{artist.rating}</p>
                    <p className="text-xs text-purple-300">Rating</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
                    <User size={18} className="text-purple-300" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{artist.followers}</p>
                    <p className="text-xs text-purple-300">Followers</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <button className="px-5 py-2 bg-gradient-to-r from-purple-700 to-purple-900 rounded-full font-medium hover:from-purple-600 hover:to-purple-800 transition-all shadow-md hover:shadow-purple-700/20 flex items-center">
                  <span>Follow</span>
                </button>
                
                <button className="px-5 py-2 bg-purple-900/20 border border-purple-500/30 rounded-full font-medium hover:bg-purple-800/20 transition-all flex items-center">
                  <Share2 size={16} className="mr-2" />
                  <span>Share</span>
                </button>
                
                <div className="flex space-x-2">
                  {artist.socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      className="w-9 h-9 rounded-full bg-purple-900/30 border border-purple-500/20 flex items-center justify-center hover:bg-purple-800/40 transition-all"
                    >
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Episodes */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Featured Episodes</h2>
            <button className="text-sm text-purple-400 hover:text-purple-300 flex items-center">
              View all <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEpisodes.map((episode) => (
              <div 
                key={episode.id}
                className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/10 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-900/20 transition-all hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={episode.image} alt={episode.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                  
                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-purple-600/80 rounded-full text-xs font-medium backdrop-blur-sm">
                    Featured
                  </div>
                  
                  {/* Play button */}
                  <button 
                    className="absolute inset-0 flex items-center justify-center"
                    onClick={() => handlePlayToggle(episode.id)}
                  >
                    <div className="w-16 h-16 rounded-full bg-purple-700/80 backdrop-blur-sm flex items-center justify-center shadow-lg transform hover:scale-105 transition-all">
                      {activeEpisode === episode.id && isPlaying ? 
                        <Pause size={32} /> : 
                        <Play size={32} className="ml-1" />
                      }
                    </div>
                  </button>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 line-clamp-1">{episode.title}</h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {episode.guests.map((guest, idx) => (
                        <span key={idx} className="text-sm text-purple-300">
                          {idx > 0 ? `, ${guest}` : guest}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{episode.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        <span>{episode.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        <span>{episode.duration}</span>
                      </div>
                    </div>
                    
                    <div className="text-purple-400 flex items-center">
                      <span>{episode.listens}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Episodes */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Recent Episodes</h2>
            <button className="text-sm text-purple-400 hover:text-purple-300 flex items-center">
              View all <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          
          <div className="space-y-3">
            {recentEpisodes.map((episode) => (
              <div 
                key={episode.id}
                className="group flex items-center p-4 bg-gradient-to-r from-purple-900/10 to-black/50 border border-purple-500/10 rounded-lg hover:border-purple-500/20 transition-all hover:shadow-md hover:shadow-purple-900/10"
              >
                <div className="relative mr-5 flex-shrink-0">
                  <div className="w-16 h-16 rounded overflow-hidden">
                    <img src={episode.image} alt={episode.title} className="w-full h-full object-cover" />
                  </div>
                  <button 
                    className="absolute inset-0 bg-black/50 group-hover:bg-purple-900/50 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                    onClick={() => handlePlayToggle(episode.id)}
                  >
                    {activeEpisode === episode.id && isPlaying ? 
                      <Pause size={20} /> : 
                      <Play size={20} className="ml-0.5" />
                    }
                  </button>
                </div>
                
                <div className="flex-grow min-w-0">
                  <h3 className="font-bold text-white mb-1">{episode.title}</h3>
                  <div className="flex items-center mb-1 text-sm text-purple-300">
                    {episode.guests.map((guest, idx) => (
                      <span key={idx}>{idx > 0 ? `, ${guest}` : guest}</span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-xs text-gray-400">
                    <div className="flex items-center mr-3">
                      <Calendar size={12} className="mr-1" />
                      <span>{episode.date}</span>
                    </div>
                    <div className="flex items-center mr-3">
                      <Clock size={12} className="mr-1" />
                      <span>{episode.duration}</span>
                    </div>
                    <div className="flex items-center text-purple-400">
                      <span>{episode.listens} listens</span>
                    </div>
                  </div>
                </div>
                
                <div className="ml-4 flex items-center space-x-2">
                  <button 
                    className={`w-8 h-8 rounded-full flex items-center justify-center
                      ${activeEpisode === episode.id && isPlaying
                        ? 'bg-purple-600 text-white' 
                        : 'text-purple-400 hover:text-white hover:bg-purple-900/30'}`}
                    onClick={() => handlePlayToggle(episode.id)}
                  >
                    {activeEpisode === episode.id && isPlaying ? 
                      <Pause size={16} /> : 
                      <Play size={16} className="ml-0.5" />
                    }
                  </button>
                  
                  <button className="w-8 h-8 rounded-full flex items-center justify-center text-purple-400 hover:text-white hover:bg-purple-900/30">
                    <Bookmark size={16} />
                  </button>
                  
                  <button className="w-8 h-8 rounded-full flex items-center justify-center text-purple-400 hover:text-white hover:bg-purple-900/30">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Awards Section */}
        <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/10 rounded-xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-6">Awards & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artist.awards.map((award, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-black/70 border border-purple-500/20 rounded-lg p-5 flex items-start"
              >
                <div className="mr-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-900/30">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{award}</h3>
                  <p className="text-sm text-purple-300 mt-1">Recognition for excellence in podcasting</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer with CTA */}
        <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-black border border-purple-500/10 rounded-xl p-8 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-800/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-4">Stay Updated</h2>
            <p className="text-purple-200 max-w-2xl mx-auto mb-6">
              Get notified about new episodes, exclusive content, and live events from {artist.name}.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-700 to-purple-900 rounded-full font-bold hover:from-purple-600 hover:to-purple-800 transition-all shadow-lg hover:shadow-purple-700/30 w-full sm:w-auto">
                Subscribe
              </button>
              <button className="px-8 py-3 bg-purple-900/20 border border-purple-500/30 rounded-full font-bold hover:bg-purple-800/30 transition-all w-full sm:w-auto">
                Become a Patron
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastArtistPlaylist;

// Missing User component - add this at the top with other imports

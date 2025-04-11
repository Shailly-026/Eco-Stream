import React from 'react';
import { Play, Star, BarChart2, Calendar, Mic, Share2, Heart, Bookmark, Music, Award, Users, Headphones } from 'lucide-react';

const ArtistProfile = () => {
  // Sample artist data
  const artist = {
    name: "Olivia Morningstar",
    tagline: "True Crime & Psychology Podcaster",
    bio: "Award-winning investigative journalist bringing you deep dives into the most fascinating criminal cases and psychological phenomena. Host of 'Midnight Mysteries' and 'The Psychology Hour'.",
    followers: 124500,
    totalListens: "3.4M",
    awards: 12,
    featuredIn: ["Spotify", "Apple Podcasts", "The Guardian"],
    topPodcasts: [
      { 
        id: 1, 
        title: "Midnight Mysteries", 
        episodes: 143, 
        category: "True Crime",
        image: "/api/placeholder/80/80",
        rating: 4.8
      },
      { 
        id: 2, 
        title: "The Psychology Hour", 
        episodes: 87, 
        category: "Science & Psychology",
        image: "/api/placeholder/80/80",
        rating: 4.7
      }
    ],
    latestEpisodes: [
      { 
        id: 1, 
        title: "The Vanishing of Sarah Collins", 
        podcast: "Midnight Mysteries",
        duration: "54 min",
        date: "April 8, 2025",
        image: "/api/placeholder/70/70"
      },
      { 
        id: 2, 
        title: "Understanding Cognitive Biases", 
        podcast: "The Psychology Hour",
        duration: "47 min",
        date: "April 5, 2025",
        image: "/api/placeholder/70/70"
      },
      { 
        id: 3, 
        title: "The Lake House Mystery", 
        podcast: "Midnight Mysteries",
        duration: "62 min",
        date: "April 1, 2025",
        image: "/api/placeholder/70/70"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Gradient Header with Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-black to-purple-800 pt-6 pb-10 px-6 rounded-b-3xl">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">EcoStream</h1>
          <button className="p-2 rounded-full bg-purple-900/50 backdrop-blur-sm hover:bg-purple-800">
            <Share2 size={20} className="text-purple-200" />
          </button>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="w-36 h-36 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center border-2 border-purple-400">
              <img src="/api/placeholder/144/144" alt="Olivia Morningstar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1">
              <Mic size={20} className="text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mt-4">{artist.name}</h2>
          <p className="text-purple-300 font-medium">{artist.tagline}</p>
          
          <div className="flex items-center gap-1 mt-2">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-300 font-medium">Verified Artist</span>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-6 w-full max-w-md">
            <div className="text-center">
              <p className="text-2xl font-bold">{artist.followers.toLocaleString()}</p>
              <p className="text-sm text-purple-300"><Users size={14} className="inline mb-1 mr-1" />Followers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{artist.totalListens}</p>
              <p className="text-sm text-purple-300"><Headphones size={14} className="inline mb-1 mr-1" />Listens</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{artist.awards}</p>
              <p className="text-sm text-purple-300"><Award size={14} className="inline mb-1 mr-1" />Awards</p>
            </div>
          </div>
          
          <div className="mt-6 flex gap-3">
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full hover:opacity-90 font-medium">
              Follow
            </button>
            <button className="px-6 py-2 bg-black/30 backdrop-blur-sm border border-purple-700 rounded-full hover:bg-black/50">
              Share
            </button>
          </div>
        </div>
      </div>
      
      {/* Artist Bio */}
      <div className="px-6 py-8">
        <h3 className="text-xl font-semibold mb-3 text-purple-200">About</h3>
        <p className="text-gray-300 leading-relaxed">{artist.bio}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {artist.featuredIn.map((platform, index) => (
            <span key={index} className="px-3 py-1 bg-purple-900/30 border border-purple-800 rounded-full text-sm text-purple-300">
              {platform}
            </span>
          ))}
        </div>
      </div>
      
      {/* Top Podcasts */}
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold mb-4 text-purple-200 flex items-center">
          <BarChart2 size={20} className="mr-2 text-purple-400" />
          Top Podcasts
        </h3>
        
        <div className="space-y-4">
          {artist.topPodcasts.map(podcast => (
            <div key={podcast.id} className="bg-gradient-to-r from-gray-900 to-purple-950 rounded-xl p-4 flex items-center">
              <div className="relative">
                <img src={podcast.image} alt={podcast.title} className="w-20 h-20 rounded-lg" />
                <button className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg hover:bg-black/60">
                  <Play size={32} className="text-purple-300 fill-purple-300" />
                </button>
              </div>
              
              <div className="ml-4 flex-1">
                <h4 className="font-bold text-lg">{podcast.title}</h4>
                <p className="text-purple-300 text-sm">{podcast.category} • {podcast.episodes} episodes</p>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < Math.floor(podcast.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">{podcast.rating}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <button className="p-2 rounded-full bg-purple-900/40 hover:bg-purple-800/60">
                  <Heart size={16} className="text-purple-300" />
                </button>
                <button className="p-2 rounded-full bg-purple-900/40 hover:bg-purple-800/60">
                  <Bookmark size={16} className="text-purple-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Latest Episodes */}
      <div className="px-6 py-4 mb-20">
        <h3 className="text-xl font-semibold mb-4 text-purple-200 flex items-center">
          <Music size={20} className="mr-2 text-purple-400" />
          Latest Episodes
        </h3>
        
        <div className="space-y-3">
          {artist.latestEpisodes.map(episode => (
            <div key={episode.id} className="border border-purple-900/50 rounded-xl p-3 flex items-center bg-black/30">
              <img src={episode.image} alt={episode.title} className="w-14 h-14 rounded" />
              
              <div className="ml-3 flex-1">
                <h4 className="font-medium">{episode.title}</h4>
                <p className="text-sm text-purple-400">{episode.podcast}</p>
                <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                  <span className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {episode.date}
                  </span>
                  <span>{episode.duration}</span>
                </div>
              </div>
              
              <button className="p-3 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 hover:opacity-90">
                <Play size={16} className="text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 inset-x-0 bg-gradient-to-r from-purple-950 to-black border-t border-purple-900/50 p-4 flex justify-around">
        <button className="flex flex-col items-center text-gray-400 hover:text-purple-300">
          <Headphones size={24} />
          <span className="text-xs mt-1">Discover</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-purple-300">
          <Heart size={24} />
          <span className="text-xs mt-1">Favorites</span>
        </button>
        <button className="flex flex-col items-center text-purple-400">
          <Mic size={24} />
          <span className="text-xs mt-1">Artists</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-purple-300">
          <Music size={24} />
          <span className="text-xs mt-1">Playlists</span>
        </button>
      </nav>
    </div>
  );
};

export default ArtistProfile;
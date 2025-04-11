// PodcastPlaylist.jsx
import React from 'react';

const PodcastPlaylist = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-purple-900 text-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-900 to-purple-600 p-6 rounded-lg mb-8 shadow-lg border border-purple-500/30">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text shadow-sm">
            EcoStream
          </h1>
        </header>
        
        {/* Podcast Info */}
        <div className="flex items-center mb-6 bg-gradient-to-br from-gray-800 to-purple-900/40 p-4 rounded-lg shadow-md">
          <div className="w-28 h-28 bg-gradient-to-br from-purple-800 to-purple-500 rounded-lg mr-5 flex items-center justify-center text-white shadow-md">
            Podcast Logo
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
              EcoStream
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


// PodcastPlaylist.jsx
// 'use client';
// import React, { useState } from 'react';
// import { PlayCircle, Pause, Clock, Calendar, User, Tag, ChevronDown, Heart, Share2, Download, Volume2 } from 'lucide-react';

// const PodcastPlaylist = () => {
//   const [activeEpisode, setActiveEpisode] = useState(1);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const episodes = [
//     {
//       id: 1,
//       title: "The Future of Technology & AI",
//       description: "In this groundbreaking episode, we explore the cutting-edge developments in AI and how they're reshaping our digital landscape.",
//       duration: "45:20",
//       date: "Apr 8, 2025",
//       image: "/api/placeholder/400/400",
//       listens: "4.2K"
//     },
//     {
//       id: 2,
//       title: "Creative Thinking in a Digital Age",
//       description: "Join our conversation with award-winning designers as they share insights on staying creative in an increasingly automated world.",
//       duration: "38:15",
//       date: "Apr 1, 2025",
//       image: "/api/placeholder/400/400",
//       listens: "3.8K"
//     },
//     {
//       id: 3,
//       title: "Building Sustainable Business Models",
//       description: "Industry leaders discuss how to build environmentally responsible businesses while maintaining profitability and growth.",
//       duration: "52:07",
//       date: "Mar 25, 2025",
//       image: "/api/placeholder/400/400",
//       listens: "5.1K"
//     },
//     {
//       id: 4,
//       title: "The Psychology of Decision Making",
//       description: "Dr. Elena Rodriguez shares fascinating research on how our minds process decisions and ways to improve our daily choices.",
//       duration: "61:30",
//       date: "Mar 18, 2025",
//       image: "/api/placeholder/400/400",
//       listens: "6.7K"
//     },
//     {
//       id: 5,
//       title: "Answering Your Most Asked Questions",
//       description: "In this special Q&A episode, we address the top questions from our listeners on productivity, creativity, and work-life balance.",
//       duration: "42:18",
//       date: "Mar 11, 2025",
//       image: "/api/placeholder/400/400",
//       listens: "4.5K"
//     },
//   ];

//   const togglePlay = (id) => {
//     if (activeEpisode === id && isPlaying) {
//       setIsPlaying(false);
//     } else {
//       setActiveEpisode(id);
//       setIsPlaying(true);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-gray-100 py-8 px-4">
//       <div className="max-w-5xl mx-auto">
//         {/* Header with animated gradient */}
//         <header className="relative overflow-hidden rounded-xl mb-10">
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 opacity-80"></div>
//           <div className="absolute inset-0 bg-[url('/api/placeholder/1200/300')] mix-blend-overlay opacity-20"></div>
          
//           {/* Animated gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-purple-500/20 animate-pulse"></div>
          
//           <div className="relative z-10 py-16 px-8 text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-white via-purple-100 to-white text-transparent bg-clip-text tracking-tight">
//               Your Podcast Name
//             </h1>
//             <p className="mt-4 text-purple-200 max-w-2xl mx-auto">
//               Exploring fascinating ideas and conversations that shape our world
//             </p>
            
//             <div className="flex items-center justify-center mt-6 space-x-6">
//               <div className="flex items-center text-purple-200">
//                 <User size={16} className="mr-2" />
//                 <span>Host Name</span>
//               </div>
//               <div className="flex items-center text-purple-200">
//                 <Calendar size={16} className="mr-2" />
//                 <span>New episodes weekly</span>
//               </div>
//               <div className="flex items-center text-purple-200">
//                 <Tag size={16} className="mr-2" />
//                 <span>Technology & Culture</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Decorative elements */}
//           <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-gradient-to-br from-purple-900 to-purple-800 rounded-t-full blur-sm"></div>
//         </header>
        
//         {/* Now Playing Section */}
//         {isPlaying && (
//           <div className="bg-gradient-to-r from-purple-900/90 to-purple-800/90 backdrop-blur rounded-xl p-6 mb-8 shadow-xl border border-purple-500/30 transform transition-all duration-500">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="w-40 h-40 rounded-lg overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-6 flex-shrink-0 border-2 border-purple-400/30">
//                 <img 
//                   src={episodes.find(ep => ep.id === activeEpisode)?.image} 
//                   alt="Episode artwork" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               <div className="flex-grow text-center md:text-left">
//                 <div className="text-sm font-medium text-purple-300 mb-1">NOW PLAYING</div>
//                 <h3 className="text-2xl font-bold text-white mb-2">
//                   {episodes.find(ep => ep.id === activeEpisode)?.title}
//                 </h3>
//                 <p className="text-purple-200 mb-4 line-clamp-2">
//                   {episodes.find(ep => ep.id === activeEpisode)?.description}
//                 </p>
                
//                 {/* Player Controls */}
//                 <div className="flex flex-col items-center md:items-start">
//                   <div className="w-full max-w-md bg-purple-950/50 rounded-full h-1.5 mb-2">
//                     <div className="bg-purple-400 h-1.5 rounded-full w-1/3"></div>
//                   </div>
                  
//                   <div className="flex items-center justify-between w-full max-w-md">
//                     <span className="text-xs text-purple-300">15:10</span>
//                     <div className="flex items-center space-x-4">
//                       <button className="text-purple-300 hover:text-white transition-colors">
//                         <Volume2 size={18} />
//                       </button>
//                       <button 
//                         className="w-12 h-12 bg-purple-500 hover:bg-purple-400 rounded-full flex items-center justify-center shadow-lg transition-all hover:shadow-purple-500/30"
//                         onClick={() => setIsPlaying(!isPlaying)}
//                       >
//                         {isPlaying ? <Pause size={24} /> : <PlayCircle size={24} />}
//                       </button>
//                       <button className="text-purple-300 hover:text-white transition-colors">
//                         <Download size={18} />
//                       </button>
//                     </div>
//                     <span className="text-xs text-purple-300">{episodes.find(ep => ep.id === activeEpisode)?.duration}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {/* Episode List */}
//         <div className="bg-gradient-to-br from-gray-800/80 to-purple-900/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-purple-600/10">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text">
//               Latest Episodes
//             </h2>
//             <button className="text-purple-300 hover:text-white flex items-center text-sm font-medium transition-colors">
//               View all <ChevronDown size={16} className="ml-1" />
//             </button>
//           </div>
          
//           <div className="space-y-3">
//             {episodes.map((episode) => (
//               <div 
//                 key={episode.id}
//                 className={`flex items-center p-4 rounded-lg transition-all duration-300 
//                   ${activeEpisode === episode.id && isPlaying 
//                     ? 'bg-purple-800/30 border border-purple-500/40 shadow-lg shadow-purple-900/20' 
//                     : 'bg-gradient-to-br from-gray-800/40 to-purple-900/30 hover:from-purple-900/30 hover:to-purple-800/40 border border-transparent hover:border-purple-600/20'
//                   } transform hover:-translate-y-0.5 hover:shadow-lg`}
//               >
//                 <div className="mr-4 flex-shrink-0 relative group cursor-pointer" onClick={() => togglePlay(episode.id)}>
//                   <div className="w-16 h-16 rounded overflow-hidden shadow-md">
//                     <img src={episode.image} alt={episode.title} className="w-full h-full object-cover" />
//                   </div>
//                   <div className={`absolute inset-0 bg-black/40 group-hover:bg-purple-900/60 flex items-center justify-center transition-all
//                     ${activeEpisode === episode.id && isPlaying ? 'bg-purple-600/70' : ''}`}>
//                     {activeEpisode === episode.id && isPlaying ? 
//                       <Pause size={20} className="text-white" /> : 
//                       <PlayCircle size={20} className="text-white" />
//                     }
//                   </div>
//                   <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs shadow-sm">
//                     {episode.id}
//                   </div>
//                 </div>
                
//                 <div className="flex-grow min-w-0">
//                   <h3 className="font-bold text-white mb-1 truncate">{episode.title}</h3>
//                   <p className="text-sm text-gray-300 line-clamp-2">{episode.description}</p>
                  
//                   <div className="flex items-center mt-2 text-xs text-purple-300/80">
//                     <div className="flex items-center mr-4">
//                       <Calendar size={12} className="mr-1" />
//                       {episode.date}
//                     </div>
//                     <div className="flex items-center mr-4">
//                       <Clock size={12} className="mr-1" />
//                       {episode.duration}
//                     </div>
//                     <div className="flex items-center">
//                       <Volume2 size={12} className="mr-1" />
//                       {episode.listens} listens
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center space-x-3 ml-4">
//                   <button className="w-8 h-8 rounded-full flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-800/30 transition-all">
//                     <Heart size={16} />
//                   </button>
//                   <button className="w-8 h-8 rounded-full flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-800/30 transition-all">
//                     <Share2 size={16} />
//                   </button>
//                   <button 
//                     className={`w-8 h-8 rounded-full flex items-center justify-center transition-all
//                       ${activeEpisode === episode.id && isPlaying
//                         ? 'bg-purple-600 text-white' 
//                         : 'text-purple-300 hover:text-white hover:bg-purple-800/30'}`}
//                     onClick={() => togglePlay(episode.id)}
//                   >
//                     {activeEpisode === episode.id && isPlaying ? <Pause size={16} /> : <PlayCircle size={16} />}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Subscribe Section */}
//         <div className="mt-10 text-center bg-gradient-to-br from-purple-900/70 to-purple-800/40 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-purple-500/20 relative overflow-hidden">
//           {/* Background decorative elements */}
//           <div className="absolute top-0 left-0 w-full h-full opacity-10">
//             <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl"></div>
//           </div>
          
//           <div className="relative z-10">
//             <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-purple-100 to-white text-transparent bg-clip-text">
//               Never Miss an Episode!
//             </h3>
//             <p className="mb-6 text-purple-200 max-w-lg mx-auto">
//               Subscribe to get notified when new episodes drop and access exclusive content
//             </p>
            
//             <div className="flex flex-wrap justify-center gap-3">
//               <button className="bg-gradient-to-r from-purple-700 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all hover:from-purple-600 hover:to-purple-500 flex items-center">
//                 <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.52c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-.96-.12-1.08-.6-.12-.48.12-.96.6-1.08 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.18 1.14zm.12-3.36c-3.84-2.28-10.2-2.46-13.86-1.38-.6.12-1.2-.24-1.32-.78-.12-.6.24-1.2.78-1.32 4.2-1.26 11.28-1.02 15.72 1.62.54.3.72 1.08.36 1.62-.3.42-1.02.66-1.68.24z" />
//                 </svg>
//                 Spotify
//               </button>
//               <button className="bg-gradient-to-r from-purple-700 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all hover:from-purple-600 hover:to-purple-500 flex items-center">
//                 <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M8.8 7.2c0-.73.6-1.2 1.3-1.2s1.27.47 1.27 1.2c0 .74-.6 1.2-1.3 1.2-.7 0-1.3-.46-1.3-1.2zm1.3 2.2c2.3 0 4.2 1.9 4.2 4.2 0 2.3-1.9 4.2-4.2 4.2-2.33 0-4.23-1.9-4.23-4.2 0-2.3 1.9-4.2 4.2-4.2zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 2.25c5.4 0 9.75 4.37 9.75 9.75 0 5.38-4.38 9.75-9.75 9.75-5.4 0-9.75-4.37-9.75-9.75 0-5.38 4.35-9.75 9.75-9.75zm3-1.2c0-.7.58-1.2 1.28-1.2.7 0 1.27.5 1.27 1.2 0 .7-.6 1.2-1.3 1.2-.7 0-1.3-.5-1.3-1.2z" />
//                 </svg>
//                 Apple Podcasts
//               </button>
//               <button className="bg-gradient-to-r from-purple-700 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all hover:from-purple-600 hover:to-purple-500 flex items-center">
//                 <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm-2 15.5v-11l9 5.5-9 5.5z" />
//                 </svg>
//                 Google Podcasts
//               </button>
//               <button className="bg-gradient-to-r from-purple-700 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all hover:from-purple-600 hover:to-purple-500 flex items-center">
//                 <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M23.5 6.2c-.3-1.1-1.1-1.9-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5c-1 .2-1.8 1-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1.1 1.1 1.9 2.1 2.1 1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5c1-.2 1.8-1 2.1-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zm-14 9.4V8.4l6.3 3.6-6.3 3.6z" />
//                 </svg>
//                 YouTube
//               </button>
//             </div>
            
//             {/* Newsletter signup */}
//             <div className="mt-8 max-w-md mx-auto">
//               <div className="flex flex-col sm:flex-row gap-2">
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email" 
//                   className="flex-grow px-4 py-3 rounded-full bg-purple-900/50 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner"
//                 />
//                 <button className="bg-white text-purple-900 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-purple-300/30 transform hover:-translate-y-0.5 transition-all">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PodcastPlaylist;

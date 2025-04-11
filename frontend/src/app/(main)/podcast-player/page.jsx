// // 'use client';
// // import React from "react";
// // import { Play, Pause, Volume2, BookmarkPlus, Share2, Clock } from "lucide-react";

// // const PodcastDetailCard = () => {
// //   const [isPlaying, setIsPlaying] = React.useState(false);
// //   const [progress, setProgress] = React.useState(35);

// //   const togglePlayPause = () => {
// //     setIsPlaying(!isPlaying);
// //   };

// //   return (
// //     <div className=" mid-h-screen rounded-lg overflow-hidden shadow-xl bg-black text-white border border-purple-600">
// //       {/* Podcast Cover Image */}
// //       <div className="relative">
// //         <img 
// //           src="/api/placeholder/400/200" 
// //           alt="Podcast Cover" 
// //           className="w-full h-48 object-cover" 
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
// //         <div className="absolute bottom-4 left-4">
// //           <span className="bg-purple-600 text-xs font-medium px-2 py-1 rounded-full">
// //             Voice Control Enabled
// //           </span>
// //         </div>
// //       </div>

// //       {/* Podcast Details */}
// //       <div className="p-4">
// //         <h2 className="text-xl font-bold text-white">The Future of AI Technologies</h2>
// //         <p className="text-gray-400 text-sm mt-1">Tech Visionaries Podcast</p>
        
// //         <div className="flex items-center mt-3 text-gray-400 text-xs">
// //           <Clock className="h-4 w-4 mr-1" />
// //           <span>45 min</span>
// //           <span className="mx-2">•</span>
// //           <span>Apr 4, 2025</span>
// //           <span className="mx-2">•</span>
// //           <span>Episode 42</span>
// //         </div>
        
// //         <p className="mt-4 text-gray-300 text-sm">
// //           In this episode, we explore breakthrough AI technologies and their implications for the future of human-computer interaction.
// //         </p>

// //         {/* Progress Bar */}
// //         <div className="mt-4">
// //           <div className="flex justify-between text-xs mb-1">
// //             <span>12:30</span>
// //             <span>32:30 remaining</span>
// //           </div>
// //           <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
// //             <div 
// //               className="bg-purple-500 h-full" 
// //               style={{ width: `${progress}%` }}
// //             ></div>
// //           </div>
// //         </div>

// //         {/* Controls */}
// //         <div className="mt-6 flex justify-between items-center">
// //           <div className="flex items-center">
// //             <button 
// //               onClick={togglePlayPause}
// //               className="bg-purple-600 hover:bg-purple-700 rounded-full p-3 mr-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
// //             >
// //               {isPlaying ? 
// //                 <Pause className="h-6 w-6" /> : 
// //                 <Play className="h-6 w-6" />
// //               }
// //             </button>
// //             <Volume2 className="h-5 w-5 text-gray-400" />
// //           </div>
          
// //           <div className="flex space-x-4">
// //             <button className="text-gray-400 hover:text-purple-500 focus:outline-none">
// //               <BookmarkPlus className="h-5 w-5" />
// //             </button>
// //             <button className="text-gray-400 hover:text-purple-500 focus:outline-none">
// //               <Share2 className="h-5 w-5" />
// //             </button>
// //           </div>
// //         </div>

// //         {/* Voice Commands */}
// //         <div className="mt-6 bg-gray-900 rounded-lg p-3">
// //           <h3 className="text-sm font-medium text-purple-400 mb-2">Voice Commands</h3>
// //           <div className="grid grid-cols-2 gap-2 text-xs">
// //             <div className="flex items-center">
// //               <span className="text-gray-400">"Play podcast"</span>
// //             </div>
// //             <div className="flex items-center">
// //               <span className="text-gray-400">"Pause audio"</span>
// //             </div>
// //             <div className="flex items-center">
// //               <span className="text-gray-400">"Skip forward"</span>
// //             </div>
// //             <div className="flex items-center">
// //               <span className="text-gray-400">"Bookmark this"</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PodcastDetailCard;


// 'use client';

// import React, { useEffect, useState } from 'react';
// import { Play, Pause, Volume2, BookmarkPlus, Share2, Clock } from 'lucide-react';
// import { useParams } from 'next/navigation';

// const PodcastDetailCard = () => {
//   const { id } = useParams();
//   const [podcastDetail, setPodcastDetail] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(35);

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   useEffect(() => {
//     fetch(`http://localhost:5000/podcast/getbyid/${id}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch podcast details");
//         }
//         return response.json();
//       })
//       .then((result) => {
//         setPodcastDetail(result);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching podcast details:", error);
//         setError("Failed to load podcast.");
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return <div className="text-white text-center p-6">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center p-6">{error}</div>;
//   }

//   return (
//     <div className="min-h-screen rounded-lg overflow-hidden shadow-xl bg-black text-white border border-purple-600">
//       {/* Podcast Cover Image */}
//       <div className="relative">
//         <img 
//           src={podcastDetail.imageUrl || "/default-banner.jpg"} 
//           alt="Podcast Cover" 
//           className="w-full h-48 object-cover" 
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
//         <div className="absolute bottom-4 left-4">
//           <span className="bg-purple-600 text-xs font-medium px-2 py-1 rounded-full">
//             Voice Control Enabled
//           </span>
//         </div>
//       </div>

//       {/* Podcast Details */}
//       <div className="p-4">
//         <h2 className="text-xl font-bold text-white">{podcastDetail.title}</h2>
//         <p className="text-gray-400 text-sm mt-1">{podcastDetail.language}</p>

//         <div className="flex items-center mt-3 text-gray-400 text-xs">
//           <Clock className="h-4 w-4 mr-1" />
//           <span>{podcastDetail.duration} sec</span>
//           <span className="mx-2">•</span>
//           <span>{podcastDetail.date}</span>
//           <span className="mx-2">•</span>
//           <span>{`Episode ${podcastDetail.episode}`}</span>
//         </div>

//         <p className="mt-4 text-gray-300 text-sm">{podcastDetail.description}</p>

//         {/* Progress Bar */}
//         <div className="mt-4">
//           <div className="flex justify-between text-xs mb-1">
//             <span>12:30</span>
//             <span>32:30 remaining</span>
//           </div>
//           <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
//             <div className="bg-purple-500 h-full" style={{ width: `${progress}%` }}></div>
//           </div>
//         </div>

//         {/* Controls */}
//         <div className="mt-6 flex justify-between items-center">
//           <div className="flex items-center">
//             <button 
//               onClick={togglePlayPause}
//               className="bg-purple-600 hover:bg-purple-700 rounded-full p-3 mr-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             >
//               {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
//             </button>
//             <Volume2 className="h-5 w-5 text-gray-400" />
//           </div>

//           <div className="flex space-x-4">
//             <button className="text-gray-400 hover:text-purple-500 focus:outline-none">
//               <BookmarkPlus className="h-5 w-5" />
//             </button>
//             <button className="text-gray-400 hover:text-purple-500 focus:outline-none">
//               <Share2 className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

//         <audio controls className="mt-4 w-full">
//           <source src={podcastDetail.audioUrl} type="audio/mpeg" />
//           Your browser does not support the audio element.
//         </audio>

//         {/* Voice Commands */}
//         <div className="mt-6 bg-gray-900 rounded-lg p-3">
//           <h3 className="text-sm font-medium text-purple-400 mb-2">Voice Commands</h3>
//           <div className="grid grid-cols-2 gap-2 text-xs">
//             <div className="flex items-center">
//               <span className="text-gray-400">"Play podcast"</span>
//             </div>
//             <div className="flex items-center">
//               <span className="text-gray-400">"Pause audio"</span>
//             </div>
//             <div className="flex items-center">
//               <span className="text-gray-400">"Skip forward"</span>
//             </div>
//             <div className="flex items-center">
//               <span className="text-gray-400">"Bookmark this"</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PodcastDetailCard;



'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Play, Pause, Volume2, BookmarkPlus, Share2, Clock } from 'lucide-react';
import { useParams } from 'next/navigation';

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
};

const PodcastDetailCard = () => {
  const { id } = useParams();
  const [podcastDetail, setPodcastDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:5000/podcast/getbyid/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch podcast details');
        return response.json();
      })
      .then((result) => {
        setPodcastDetail(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching podcast details:', err);
        setError('Failed to load podcast.');
        setLoading(false);
      });
  }, [id]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) setDuration(audio.duration);
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  if (loading) return <div className="text-white text-center p-6">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-6">{error}</div>;

  return (
    <div className="min-h-screen rounded-lg overflow-hidden shadow-xl bg-black text-white border border-purple-600">
      {/* Cover Image */}
      <div className="relative">
        <img
          src={podcastDetail.imageUrl || '/default-banner.jpg'}
          alt="Podcast Cover"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-purple-600 text-xs font-medium px-2 py-1 rounded-full">
            Voice Control Enabled
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-white">{podcastDetail.title}</h2>
        <p className="text-gray-400 text-sm mt-1">{podcastDetail.language}</p>

        <div className="flex items-center mt-3 text-gray-400 text-xs">
          <Clock className="h-4 w-4 mr-1" />
          <span>{formatTime(podcastDetail.duration)}</span>
          <span className="mx-2">•</span>
          <span>{podcastDetail.date}</span>
          <span className="mx-2">•</span>
          <span>{`Episode ${podcastDetail.episode || 'N/A'}`}</span>
        </div>

        <p className="mt-4 text-gray-300 text-sm">{podcastDetail.description}</p>

        {/* Progress */}
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration - currentTime)}</span>
          </div>
          <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={togglePlayPause}
              className="bg-purple-600 hover:bg-purple-700 rounded-full p-3 mr-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
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

        {/* Audio */}
        <audio
          ref={audioRef}
          src={podcastDetail.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={handlePlay}
          onPause={handlePause}
          className="hidden"
        />

        {/* Voice Commands */}
        <div className="mt-6 bg-gray-900 rounded-lg p-3">
          <h3 className="text-sm font-medium text-purple-400 mb-2">Voice Commands</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <span className="text-gray-400">"Play podcast"</span>
            <span className="text-gray-400">"Pause audio"</span>
            <span className="text-gray-400">"Skip forward"</span>
            <span className="text-gray-400">"Bookmark this"</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetailCard;

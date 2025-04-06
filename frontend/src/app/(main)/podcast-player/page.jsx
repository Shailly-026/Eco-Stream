// 'use client';
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";

// export default function PodcastPlayer() {
//   const [podcast, setPodcast] = useState(null);
//   const [error, setError] = useState("");
//   const searchParams = useSearchParams();
//   const podcastId = searchParams.get("id");

//   useEffect(() => {
//     if (podcastId) {
//       fetch(`http://localhost:5000/podcast/get/${podcastId}`)
//         .then((res) => {
//           if (!res.ok) throw new Error("Failed to load podcast");
//           return res.json();
//         })
//         .then((data) => setPodcast(data))
//         .catch((err) => setError(err.message));
//     }
//   }, [podcastId]);

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white">
//         <p className="text-xl">{error}</p>
//       </div>
//     );
//   }

//   if (!podcast) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white">
//         <p className="text-xl">Loading Podcast...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white flex items-center justify-center p-6">
//       <div className="max-w-3xl w-full bg-purple-950 bg-opacity-50 rounded-xl p-8 shadow-2xl">
//         <h1 className="text-3xl font-bold mb-4 text-center">{podcast.title}</h1>
//         <p className="text-gray-300 mb-6 text-center">{podcast.description}</p>

//         <div className="flex flex-col items-center">
//           <audio controls className="w-full max-w-xl mb-4 rounded-lg">
//             <source src={podcast.audioUrl} type="audio/mpeg" />
//             Your browser does not support the audio element.
//           </audio>

//           <div className="text-sm text-gray-400">
//             <p><strong>Duration:</strong> {podcast.duration} seconds</p>
//             <p><strong>Tags:</strong> {podcast.tags.join(", ")}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

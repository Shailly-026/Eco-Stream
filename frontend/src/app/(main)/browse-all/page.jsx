 'use client';
// import { useState } from "react";
// import Confetti from "react-confetti";
// import { useWindowSize } from "react-use";

// export default function AddPodcast() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     audioUrl: "",
//     duration: "",
//     tags: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [showConfetti, setShowConfetti] = useState(false);
//   const { width, height } = useWindowSize();

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     // Convert tags string into an array
//     const podcastData = { ...formData, tags: formData.tags.split(",") };

//     try {
//       const response = await fetch("http://localhost:5000/podcast/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(podcastData),
//       });

//       if (response.ok) {
//         setMessage("🎉 Podcast added successfully!");
//         setFormData({ title: "", description: "", audioUrl: "", duration: "", tags: "" });

//         // Show confetti animation
//         setShowConfetti(true);
//         setTimeout(() => setShowConfetti(false), 3000); // Stop confetti after 3 seconds
//       } else {
//         setMessage("Failed to add podcast. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("An error occurred while adding the podcast.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
//       {showConfetti && <Confetti confettiSource={{x: width/2, y: 300}} width={width} height={height} />}

//       <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-4">Add a New Podcast</h2>
//         {message && <p className="text-center text-green-400">{message}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Podcast Title"
//             className="w-full p-2 bg-gray-700 text-white rounded"
//             required
//           />
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Podcast Description"
//             className="w-full p-2 bg-gray-700 text-white rounded"
//             required
//           />
//           <input
//             type="text"
//             name="audioUrl"
//             value={formData.audioUrl}
//             onChange={handleChange}
//             placeholder="Audio File URL"
//             className="w-full p-2 bg-gray-700 text-white rounded"
//             required
//           />
//           <input
//             type="number"
//             name="duration"
//             value={formData.duration}
//             onChange={handleChange}
//             placeholder="Duration (in seconds)"
//             className="w-full p-2 bg-gray-700 text-white rounded"
//             required
//           />
//           <input
//             type="text"
//             name="tags"
//             value={formData.tags}
//             onChange={handleChange}
//             placeholder="Tags (comma separated)"
//             className="w-full p-2 bg-gray-700 text-white rounded"
//           />

//           <button
//             type="submit"
//             className="w-full py-2 bg-green-500 rounded-lg hover:bg-green-600 disabled:opacity-50"
//             disabled={loading}
//           >
//             {loading ? "Adding..." : "Add Podcast"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import Image from 'next/image';

const BrowsePage = () => {
  const categories = [
    { name: 'Sparks', icon: 'play-circle' },
    { name: 'News', icon: 'newspaper' },
    { name: 'TV', icon: 'tv' },
    { name: 'Movies', icon: 'film' },
    { name: 'Sports', icon: 'trophy' }
  ];

  const studios = [
    { name: 'Hotstar Specials', logo: '/logos/hotstar-specials.png' },
    { name: 'Disney', logo: '/logos/disney.png' },
    { name: 'HBO', logo: '/logos/hbo.png' },
    { name: 'Peacock', logo: '/logos/peacock.png' },
    { name: 'Paramount+', logo: '/logos/paramount.png' }
  ];

  const languages = [
    { name: 'Hindi', nativeName: 'हिन्दी', image: '/languages/hindi.jpg' },
    { name: 'English', nativeName: 'English', image: '/languages/english.jpg' },
    { name: 'Tamil', nativeName: 'தமிழ்', image: '/languages/tamil.jpg' },
    { name: 'Telugu', nativeName: 'తెలుగు', image: '/languages/telugu.jpg' },
    { name: 'Malayalam', nativeName: 'മലയാളം', image: '/languages/malayalam.jpg' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Browse Section */}
        <h2 className="text-2xl font-bold mb-4">Browse</h2>
        <div className="grid grid-cols-5 gap-3 mb-12">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="relative bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg aspect-[4/3] cursor-pointer hover:opacity-90 transition"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-50">
                {/* Placeholder for icon - in a real app you would use actual icons */}
                <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center">
                  <span className="sr-only">{category.icon}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <span className="text-xl font-semibold">{category.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studios Section */}
        <h2 className="text-2xl font-bold mb-4">Studios</h2>
        <div className="grid grid-cols-5 gap-3 mb-12">
          {studios.map((studio, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg aspect-[4/3] cursor-pointer hover:opacity-90 transition flex items-center justify-center p-4"
            >
              <div className="relative w-full h-full">
                <div className="flex items-center justify-center h-full">
                  {/* In production, use next/image with actual studio logos */}
                  <div className="text-center text-xl font-bold text-white">{studio.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Languages Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Popular Languages</h2>
          <span className="text-purple-400 cursor-pointer">View</span>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {languages.map((language, index) => (
            <div 
              key={index} 
              className="relative bg-gray-900 rounded-lg overflow-hidden aspect-[4/3] cursor-pointer hover:opacity-90 transition"
            >
              {/* Language card with gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent z-10" />
              
              {/* In production, use next/image with proper language images */}
              <div className="absolute inset-0 bg-gray-800"></div>
              
              {/* Language text */}
              <div className="absolute bottom-0 left-0 p-4 z-20">
                <div className="text-xl font-semibold mb-1">{language.nativeName}</div>
                <div className="text-sm text-gray-300">{language.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
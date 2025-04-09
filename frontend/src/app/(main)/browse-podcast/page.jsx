// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function BrowsePodcasts() {
//   const [podcasts, setPodcasts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [editPodcast, setEditPodcast] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     audioUrl: "",
//     duration: "",
//     tags: "",
//   });

//   // Fetch all podcasts
//   useEffect(() => {
//     fetch("http://localhost:5000/podcast/getallpodcast")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch podcasts");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setPodcasts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching podcasts:", error);
//         setError("Failed to load podcasts.");
//         setLoading(false);
//       });
//   }, []);

//   // Handle Delete
//   const handleDelete = (id) => {
//     fetch(`http://localhost:5000/podcast/delete/${id}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to delete podcast");
//         }
//         setPodcasts(podcasts.filter((podcast) => podcast._id !== id)); // Remove from state
//       })
//       .catch((error) => console.error("Error deleting podcast:", error));
//   };

//   // Handle Edit (Fill form with selected podcast data)
//   const handleEdit = (podcast) => {
//     setEditPodcast(podcast._id);
//     setFormData({
//       title: podcast.title,
//       description: podcast.description,
//       audioUrl: podcast.audioUrl,
//       duration: podcast.duration,
//       tags: podcast.tags.join(", "),
//     });
//   };

//   // Handle Form Input Changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle Save (Update Podcast)
//   const handleSave = () => {
//     fetch(`http://localhost:5000/podcast/update/${editPodcast}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ...formData, tags: formData.tags.split(",") }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to update podcast");
//         }
//         return response.json();
//       })
//       .then((updatedPodcast) => {
//         setPodcasts(
//           podcasts.map((podcast) =>
//             podcast._id === editPodcast ? updatedPodcast : podcast
//           )
//         );
//         setEditPodcast(null); // Exit edit mode
//         setFormData({ title: "", description: "", audioUrl: "", duration: "", tags: "" });
//       })
//       .catch((error) => console.error("Error updating podcast:", error));
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Browse Podcasts</h1>

//       {loading && <p className="text-center">Loading podcasts...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {/* Podcast Cards Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {podcasts.length > 0 ? (
//           podcasts.map((podcast) => (
//             <div
//               key={podcast._id}
//               className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
//             >
//               {editPodcast === podcast._id ? (
//                 // Editable Form
//                 <div>
//                   <input
//                     type="text"
//                     name="title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
//                   />
//                   <textarea
//                     name="description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
//                   />
//                   <input
//                     type="text"
//                     name="audioUrl"
//                     value={formData.audioUrl}
//                     onChange={handleChange}
//                     className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
//                   />
//                   <input
//                     type="number"
//                     name="duration"
//                     value={formData.duration}
//                     onChange={handleChange}
//                     className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
//                   />
//                   <input
//                     type="text"
//                     name="tags"
//                     value={formData.tags}
//                     onChange={handleChange}
//                     className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
//                   />
//                   <button
//                     onClick={handleSave}
//                     className="w-full py-2 bg-green-500 rounded-lg hover:bg-green-600"
//                   >
//                     Save
//                   </button>
//                 </div>
//               ) : (
//                 // Podcast Display Mode
//                 <div>
//                   <h2 className="text-xl font-bold">{podcast.title}</h2>
//                   <p className="text-sm text-gray-400 mt-2">{podcast.description}</p>
//                   <p className="text-sm mt-2">
//                     <span className="font-semibold">Duration:</span> {podcast.duration} sec
//                   </p>
//                   <p className="text-sm mt-2">
//                     <span className="font-semibold">Tags:</span> {podcast.tags.join(", ")}
//                   </p>

//                   {/* Audio Player */}
//                   <audio controls className="mt-4 w-full">
//                     <source src={podcast.audioUrl} type="audio/mpeg" />
//                     Your browser does not support the audio element.
//                   </audio>

//                   {/* Edit & Delete Buttons */}
//                   <div className="mt-4 flex justify-between">
//                     <Link
//                     href={`/podcast-detail/${podcast._id}`}
//                       className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600"
//                     >
//                       View
//                     </Link>
//                     <button
//                       onClick={() => handleDelete(podcast._id)}
//                       className="px-3 py-1 bg-red-500 rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           !loading && <p className="text-center">No podcasts available.</p>
//         )}
//       </div>
//     </div>
//   );
// }
'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Play, Clock, Tag, ChevronRight } from "lucide-react";

export default function BrowsePodcasts() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [allTags, setAllTags] = useState([]);

  // Fetch podcasts on component mount
  useEffect(() => {
    fetchPodcasts();
  }, []);

  // Function to fetch podcasts from API
  const fetchPodcasts = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/podcast/all");
      
      if (!response.ok) {
        throw new Error("Failed to fetch podcasts");
      }
      
      const data = await response.json();
      setPodcasts(data);
      
      // Extract all unique tags
      const tags = new Set();
      data.forEach(podcast => {
        podcast.tags.forEach(tag => tags.add(tag));
      });
      setAllTags(Array.from(tags));
      
    } catch (err) {
      console.error("Error fetching podcasts:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter podcasts based on search term and selected tag
  const filteredPodcasts = podcasts.filter(podcast => {
    const matchesSearch = podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         podcast.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "" || podcast.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  // Format time from seconds to MM:SS
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-black">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-2">Browse Podcasts</h1>
          <p className="text-purple-300">Discover and listen to your favorite podcasts</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Search podcasts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="md:w-64">
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
          <button 
            onClick={() => {
              setSearchTerm("");
              setSelectedTag("");
            }}
            className="px-4 py-3 bg-purple-700 rounded-lg hover:bg-purple-600 transition"
          >
            Reset Filters
          </button>
        </div>

        {/* Podcasts Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="bg-red-900/30 border border-red-800 p-4 rounded-lg text-center">
            <p>Error: {error}</p>
            <button 
              onClick={fetchPodcasts}
              className="mt-2 px-4 py-2 bg-purple-700 rounded-lg hover:bg-purple-600 transition"
            >
              Try Again
            </button>
          </div>
        ) : filteredPodcasts.length === 0 ? (
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">No podcasts found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPodcasts.map((podcast) => (
              <div key={podcast._id || podcast.id} className="bg-gradient-to-br from-gray-800 to-purple-900 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-900/30 transition group">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold line-clamp-1">{podcast.title}</h3>
                    <button className="bg-purple-600 rounded-full p-2 hover:bg-purple-500 transition transform group-hover:scale-110">
                      <Play size={18} fill="white" />
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-2">{podcast.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Clock size={16} className="mr-1" />
                    <span>{formatDuration(podcast.duration)}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {podcast.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-purple-900/50 text-purple-300 text-xs px-2 py-1 rounded flex items-center"
                        onClick={() => setSelectedTag(tag)}
                      >
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-purple-800/30">
                  <Link
                    href={`/podcast/${podcast._id || podcast.id}`}
                    className="flex items-center justify-center p-3 bg-gray-800/50 text-sm text-purple-300 hover:bg-purple-800/30 transition"
                  >
                    View Details
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add New Podcast Button */}
        <div className="mt-12 text-center">
          <Link
            href="/add-podcast"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg font-medium hover:from-purple-500 hover:to-purple-700 transition"
          >
            Add New Podcast
          </Link>
        </div>
      </div>
    </div>
  );
}
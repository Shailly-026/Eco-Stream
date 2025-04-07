"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BrowsePodcasts() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editPodcast, setEditPodcast] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    audioUrl: "",
    duration: "",
    tags: "",
  });

  // Fetch all podcasts
  useEffect(() => {
    fetch("http://localhost:5000/podcast/getallpodcast")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch podcasts");
        }
        return response.json();
      })
      .then((data) => {
        setPodcasts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching podcasts:", error);
        setError("Failed to load podcasts.");
        setLoading(false);
      });
  }, []);

  // Handle Delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/podcast/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete podcast");
        }
        setPodcasts(podcasts.filter((podcast) => podcast._id !== id)); // Remove from state
      })
      .catch((error) => console.error("Error deleting podcast:", error));
  };

  // Handle Edit (Fill form with selected podcast data)
  const handleEdit = (podcast) => {
    setEditPodcast(podcast._id);
    setFormData({
      title: podcast.title,
      description: podcast.description,
      audioUrl: podcast.audioUrl,
      duration: podcast.duration,
      tags: podcast.tags.join(", "),
    });
  };

  // Handle Form Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Save (Update Podcast)
  const handleSave = () => {
    fetch(`http://localhost:5000/podcast/update/${editPodcast}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, tags: formData.tags.split(",") }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update podcast");
        }
        return response.json();
      })
      .then((updatedPodcast) => {
        setPodcasts(
          podcasts.map((podcast) =>
            podcast._id === editPodcast ? updatedPodcast : podcast
          )
        );
        setEditPodcast(null); // Exit edit mode
        setFormData({ title: "", description: "", audioUrl: "", duration: "", tags: "" });
      })
      .catch((error) => console.error("Error updating podcast:", error));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Browse Podcasts</h1>

      {loading && <p className="text-center">Loading podcasts...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Podcast Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {podcasts.length > 0 ? (
          podcasts.map((podcast) => (
            <div
              key={podcast._id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              {editPodcast === podcast._id ? (
                // Editable Form
                <div>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
                  />
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
                  />
                  <input
                    type="text"
                    name="audioUrl"
                    value={formData.audioUrl}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
                  />
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
                  />
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
                  />
                  <button
                    onClick={handleSave}
                    className="w-full py-2 bg-green-500 rounded-lg hover:bg-green-600"
                  >
                    Save
                  </button>
                </div>
              ) : (
                // Podcast Display Mode
                <div>
                  <h2 className="text-xl font-bold">{podcast.title}</h2>
                  <p className="text-sm text-gray-400 mt-2">{podcast.description}</p>
                  <p className="text-sm mt-2">
                    <span className="font-semibold">Duration:</span> {podcast.duration} sec
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-semibold">Tags:</span> {podcast.tags.join(", ")}
                  </p>

                  {/* Audio Player */}
                  <audio controls className="mt-4 w-full">
                    <source src={podcast.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>

                  {/* Edit & Delete Buttons */}
                  <div className="mt-4 flex justify-between">
                    <Link
                    href={`/podcast-detail/${podcast._id}`}
                      className="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => handleDelete(podcast._id)}
                      className="px-3 py-1 bg-red-500 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          !loading && <p className="text-center">No podcasts available.</p>
        )}
      </div>
    </div>
  );
}
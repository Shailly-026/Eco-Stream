'use client';
import axios from "axios";
import { useState } from "react";
import Confetti from "react-confetti";
import toast from "react-hot-toast";
import { useWindowSize } from "react-use";

export default function AddPodcast() {

  const [audioFile, setAudioFile] = useState('');

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    audioUrl: "",
    duration: "",
    tags: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Convert tags string into an array
    const podcastData = { ...formData, tags: formData.tags.split(","), audioUrl: audioFile };

    fetch("http://localhost:5000/podcast/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(podcastData),
    })
      .then(response => {
        if (response.ok) {
          setMessage("🎉 Podcast added successfully!");
          setFormData({ title: "", description: "", audioUrl: "", duration: "", tags: "" });

          // Show confetti animation
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000); // Stop confetti after 3 seconds
        } else {
          setMessage("Failed to add podcast. Please try again.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        setMessage("An error occurred while adding the podcast.");
      });

    setLoading(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) toast.error('No file selected');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ecostream');
    formData.append('cloud_name', 'dssjgtsjl');

    axios.post('http://api.cloudinary.com/v1_1/dssjgtsjl/auto/upload', formData)
      .then((result) => {
        toast.success('File Uploaded Successfully');
        console.log(result.data.url);
        setAudioFile(result.data.url);
      }).catch((err) => {
        console.log(err);
        toast.error('File upload successfully');
      });
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      {showConfetti && <Confetti confettiSource={{ x: width / 2, y: 300 }} width={width} height={height} />}

      <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Add a New Podcast</h2>
        {message && <p className="text-center text-purple-500">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Podcast Title"
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Podcast Description"
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />
          <input
            type="file"
            onChange={handleFileUpload}
            placeholder="Audio File URL"
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Duration (in seconds)"
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags (comma separated)"
            className="w-full p-2 bg-gray-700 text-white rounded"
          />

          <button
            type="submit"
            className="w-full py-2 bg-purple-500 rounded-lg hover:bg-white-600 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Podcast"}
          </button>
        </form>
      </div>
    </div>
  );
}
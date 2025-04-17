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
    category: "",
    language: "",
    transcript: "",
    coverImageUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const podcastData = {
      ...formData,
      tags: formData.tags.split(","),
      audioUrl: audioFile,
    };

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/podcast/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(podcastData),
    })
      .then(response => {
        if (response.ok) {
          setMessage("🎉 Podcast added successfully!");
          setFormData({
            title: "",
            description: "",
            audioUrl: "",
            duration: "",
            tags: "",
            category: "",
            language: "",
            transcript: "",
            coverImageUrl: "",
          });

          setAudioFile('');
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);
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
    if (!file) return toast.error('No file selected');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ecostream');
    formData.append('cloud_name', 'dssjgtsjl');

    axios.post('http://api.cloudinary.com/v1_1/dssjgtsjl/auto/upload', formData)
      .then((result) => {
        toast.success('Audio Uploaded Successfully');
        setAudioFile(result.data.url);
      }).catch((err) => {
        console.log(err);
        toast.error('Audio upload failed');
      });
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return toast.error("No image selected");

    const formDataImg = new FormData();
    formDataImg.append("file", file);
    formDataImg.append("upload_preset", "ecostream");
    formDataImg.append("cloud_name", "dssjgtsjl");

    axios
      .post("http://api.cloudinary.com/v1_1/dssjgtsjl/image/upload", formDataImg)
      .then((result) => {
        toast.success("Image Uploaded Successfully");
        setFormData(prev => ({ ...prev, coverImageUrl: result.data.url }));
      })
      .catch((err) => {
        console.log(err);
        toast.error("Image upload failed");
      });
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex justify-center items-center">
      {showConfetti && <Confetti confettiSource={{ x: width / 2, y: 200 }} width={width} height={height} />}

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

          <select
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Comedy">Comedy</option>
            <option value="Education">Education</option>
            <option value="News">News</option>
          </select>

          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>

          <textarea
            name="transcript"
            value={formData.transcript}
            onChange={handleChange}
            placeholder="Transcript"
            className="w-full p-2 bg-gray-700 text-white rounded"
          />

          <input
            type="file"
            onChange={handleFileUpload}
            className="w-full p-2 bg-gray-700 text-white rounded"
            accept="audio/*"
            placeholder="Audio File URL"
            required
          />


          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 bg-gray-700 text-white rounded"
            placeholder="Cover Image URL"
            required
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

const { default: mongoose } = require('mongoose');
const { Schema, model } = require("../connection");


const podcastSchema = new Schema(
  {
    artist: { type: Schema.Types.ObjectId, ref: "artiste" }, // Reference to the artist who created the podcast
    title: { type: String, required: true },
    description: { type: String },
    audioUrl: { type: String, required: true }, // URL to the audio file
    coverImageUrl: { type: String, default: "default-thumbnail.jpg" }, // Cover image for the podcast
    duration: { type: Number, required: true }, // Duration in seconds
    tags: [{ type: String }], // Example: ["Sci-fi", "Thriller"]
    category: { type: String, required: true }, // Example: "Technology", "Fiction", "Science"
    language: { type: String, default: "English" }, // Podcast language
    transcript: { type: String }, // Optional transcript of the podcast
    releaseDate: { type: Date, default: Date.now },
    listens: { type: Number, default: 0 }, // Track how many times it's played
    likes: { type: Number, default: 0 }, // Count of likes
    comments: [
      {
        comment: { type: String },
        timestamp: { type: Date, default: Date.now },
      },
    ],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Podcast", podcastSchema);


const {default: mongoose} =require('mongoose');
const { Schema, model } = require("../connection");


const podcastSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    audioUrl: { type: String, required: true }, // URL to the audio file
    duration: { type: Number, required: true }, // Duration in seconds
    tags: [{ type: String }], // Example: ["Sci-fi", "Thriller"]
    releaseDate: { type: Date, default: Date.now },
    listens: { type: Number, default: 0 }, // Track how many times it's played
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = model("Podcast", podcastSchema);

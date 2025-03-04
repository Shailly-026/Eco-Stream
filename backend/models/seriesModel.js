const {default: mongoose} =require('mongoose');
const { Schema, model } = require("../connection");

const seriesSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: { type: String }, // URL to cover image,
    genres: [{ type: String }], // Example: ["Horror", "Fantasy"],
    isCompleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = model("Series", seriesSchema);

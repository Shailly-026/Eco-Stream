const {default: mongoose} =require('mongoose');
const { Schema, model } = require("../connection");

const artistSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, unique: true },
    avatar: { type: String, default: '' },
    bio: String,
    profileImage: {type:String},
    genres: [{
        type: String,
        enum: ['fiction', 'non-fiction', 'horror', 'fantasy', 'sci-fi', 'mystery', 'history', 'comedy', 'drama', 'self-help', 'educational', 'other'],
        default: 'other'
    }],
    createdAt: { type: Date, default: Date.now }

})

model.exports = model('artist', artistSchema);
'use client';
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1d1c2b] to-[#0f0e17] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-4 text-center">
          About Eco Stream
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 text-center mb-10 max-w-3xl mx-auto">
          Eco Stream is your immersive destination for audio storytelling—crafted for voice, built for imagination. We redefine how you experience podcasts with ambient 3D sound, interactive choices, and a screen-free journey into stories.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#1c1a2e] p-6 rounded-2xl shadow-lg hover:shadow-purple-700/30 transition duration-300">
            <h3 className="text-xl font-semibold text-purple-300 mb-2">Voice-Controlled</h3>
            <p className="text-sm text-neutral-400">
              Navigate effortlessly using just your voice. Hands-free, eyes-free listening on-the-go.
            </p>
          </div>

          <div className="bg-[#1c1a2e] p-6 rounded-2xl shadow-lg hover:shadow-purple-700/30 transition duration-300">
            <h3 className="text-xl font-semibold text-purple-300 mb-2">Interactive Stories</h3>
            <p className="text-sm text-neutral-400">
              Choose your path as the narrative unfolds—just like a gamebook, but with your ears.
            </p>
          </div>

          <div className="bg-[#1c1a2e] p-6 rounded-2xl shadow-lg hover:shadow-purple-700/30 transition duration-300">
            <h3 className="text-xl font-semibold text-purple-300 mb-2">3D Audio Worlds</h3>
            <p className="text-sm text-neutral-400">
              Feel the space, tension, and emotion through immersive spatial soundscapes.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">Our Vision</h2>
          <p className="text-md md:text-lg text-neutral-400 max-w-3xl mx-auto">
            We believe storytelling should be accessible, screenless, and deeply personal. Eco Stream exists to bring voices to life and listeners into new realms—one word, one choice, one echo at a time.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/"
            className="inline-block px-8 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

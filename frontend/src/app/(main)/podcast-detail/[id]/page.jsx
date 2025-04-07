'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Play, Plus } from 'lucide-react';
import { useParams } from 'next/navigation';

const DemonSlayerBanner = () => {

  const { id } = useParams();
  const [podcastDetail, setPodcastDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPodcastDetails = () => {
    fetch(`http://localhost:5000/podcast/getpodcast/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch podcast details");
        }
        return response.json();
      })
      .then((data) => {
        setPodcastDetail(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching podcast details:", error);
        setError("Failed to load podcasts.");
        setLoading(false);
      });
    };
  

  useEffect(() => {
    fetchPodcastDetails();
  }, [])
  

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
      <div className="absolute inset-0">
        <Image
          src="/demon-slayer-banner.jpg"
          alt="Demon Slayer"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
        {/* Logo */}
        <div className="absolute top-6 left-6 w-36 h-36">
          <div className="relative w-full h-full">
            <Image
              src="/demon-slayer-logo.png"
              alt="Demon Slayer Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* Info - Bottom Section */}
        <div className="space-y-2">
          {/* Metadata */}
          <div className="flex items-center space-x-2 text-xs text-gray-300">
            <span>2024</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>U/A 16+</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>4 Seasons</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>2 Languages</span>
          </div>

          {/* Description */}
          <div className="text-white text-sm">
            <p>Demon Slayer Hashira training. Prepare for Muzan&apos;s attack!</p>
            <p>Daily Hindi episodes.</p>
          </div>

          {/* Categories */}
          <div className="flex items-center space-x-2 text-xs text-gray-300 pt-1">
            <span>Anime</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Action</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Fantasy</span>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-md">
              <Play size={20} />
              <span className="font-medium">Watch First Episode</span>
              <span className="text-xs ml-1">S1 E1</span>
            </button>
            <button className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-md">
              <Plus size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemonSlayerBanner;






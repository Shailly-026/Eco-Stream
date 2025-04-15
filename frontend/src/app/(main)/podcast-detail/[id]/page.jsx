'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, Plus } from 'lucide-react';
import { useParams } from 'next/navigation';
import { usePlayer } from '../../../../context/PlayerContext';

const PodcastDetailBanner = () => {
  const { id } = useParams();
  const [podcastDetail, setPodcastDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { play, pause, loadPodcast, isPlaying, currentPodcast } = usePlayer();

  useEffect(() => {
    fetchPodcastDetail();
  }, [id]);

  const fetchPodcastDetail = () => {
    fetch(`http://localhost:5000/podcast/getbyid/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch podcast details');
        return response.json();
      })
      .then((data) => setPodcastDetail(data))
      .catch((err) => {
        console.error('Fetch error:', err);
        setError('Failed to load podcast.');
      })
      .finally(() => setLoading(false));
  };

  const handleAddToPlaylist = () => {
    if (!podcastDetail) return;

    const payload = {
      podcastId: id,
      artistId: podcastDetail.artistId,
    };

    fetch('http://localhost:5000/user/playlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to add to playlist');
        alert('Podcast added to playlist!');
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to add podcast to playlist.');
      });
  };

  const handlePlayPodcast = () => {
    if (currentPodcast?.id === id && isPlaying) {
      pause();
    } else {
      loadPodcast({
        id,
        title: podcastDetail.title,
        duration: podcastDetail.duration,
        audioUrl: podcastDetail.audioUrl,
        coverImageUrl: podcastDetail.coverImageUrl,
        artist: podcastDetail.artist,
      });
      play();
    }
  };

  if (loading)
    return (
      <div className="text-purple-300 text-center p-6 bg-black">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  if (error)
    return (
      <div className="text-red-400 text-center p-6 bg-black">
        {error}
      </div>
    );

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 left-[40vw]">
        <img
          src={podcastDetail.coverImageUrl || '/default-banner.jpg'}
          alt={podcastDetail.title}
          className="w-50 h-[350px] object-fill"
        />
      </div>

      <div className="relative z-20 p-6 md:p-12 flex flex-col justify-end min-h-screen">
        <div className="space-y-5">
          <div className="flex items-center text-sm text-purple-300 gap-3">
            <span>{new Date().getFullYear()}</span>
            <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
            <span>U/A 16+</span>
            <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
            <span>{podcastDetail.duration} sec</span>
            <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
            <span>{podcastDetail.language}</span>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 text-transparent bg-clip-text drop-shadow-lg">
              {podcastDetail.title}
            </h1>
            <p className="mt-2 text-gray-300 max-w-3xl">{podcastDetail.description}</p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {podcastDetail.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-purple-800/50 text-purple-200 rounded-full backdrop-blur-sm hover:bg-purple-700/50 transition"
              >
                {tag}
              </span>
            ))}

            {(Array.isArray(podcastDetail.category)
              ? podcastDetail.category
              : [podcastDetail.category]
            ).map((category, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-purple-950/30 border border-purple-700 text-purple-300 rounded-full backdrop-blur-sm hover:bg-purple-800/40 transition"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={handlePlayPodcast}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-md hover:shadow-purple-800/50 hover:from-purple-600 hover:to-purple-800 transition-all"
            >
              <Play size={20} />
              <span>{isPlaying && currentPodcast?.id === id ? 'Pause Podcast' : 'Play Podcast'}</span>
            </button>
            <button
              onClick={handleAddToPlaylist}
              className="flex items-center justify-center w-12 h-12 rounded-lg bg-black bg-opacity-50 border border-purple-700 text-purple-300 hover:bg-purple-800/20 hover:scale-105 transition-all"
            >
              <Plus size={24} />
            </button>
          </div>

          {podcastDetail.transcript && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Transcript</h3>
              <p className="text-sm text-gray-300 whitespace-pre-wrap bg-black/40 p-4 rounded-lg border border-purple-800">
                {podcastDetail.transcript}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PodcastDetailBanner;

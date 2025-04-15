'use client';
import React from 'react';
import { usePlaylist } from '@/context/PlaylistContext';
const Playlist = () => {
  const { playlist, removeFromPlaylist, clearPlaylist } = usePlaylist();

  return (
    <div className="p-6 bg-black text-white">
      <h1 className="text-2xl font-bold mb-4">Your Playlist</h1>
      {playlist.length === 0 ? (
        <p className="text-gray-400">Your playlist is empty.</p>
      ) : (
        <div>
          <ul>
            {playlist.map((podcast) => (
              <li key={podcast.id} className="flex items-center justify-between mb-2">
                <div>
                  <h2 className="text-lg">{podcast.title}</h2>
                  <p className="text-sm text-gray-400">{podcast.artist}</p>
                </div>
                <button
                  onClick={() => removeFromPlaylist(podcast.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={clearPlaylist}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
          >
            Clear Playlist
          </button>
        </div>
      )}
    </div>
  );
};

export default Playlist;

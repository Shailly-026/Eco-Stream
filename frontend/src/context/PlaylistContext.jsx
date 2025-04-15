'use client';
import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

// Create the PlaylistContext
const PlaylistContext = createContext();

// PlaylistContext Provider Component
export const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState(() => {
    // Load the playlist from localStorage on initialization
    const storedPlaylist = localStorage.getItem('playlist');
    return storedPlaylist ? JSON.parse(storedPlaylist) : [];
  });

  // Save the playlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('playlist', JSON.stringify(playlist));
  }, [playlist]);

  // Add a podcast to the playlist
  const addToPlaylist = useCallback((podcast) => {
    setPlaylist((prevPlaylist) => {
      // Avoid duplicates
      if (prevPlaylist.some((item) => item.id === podcast.id)) {
        return prevPlaylist;
      }
      return [...prevPlaylist, podcast];
    });
  }, []);

  // Remove a podcast from the playlist
  const removeFromPlaylist = useCallback((podcastId) => {
    setPlaylist((prevPlaylist) =>
      prevPlaylist.filter((podcast) => podcast.id !== podcastId)
    );
  }, []);

  // Clear the entire playlist
  const clearPlaylist = useCallback(() => {
    setPlaylist([]);
  }, []);

  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        addToPlaylist,
        removeFromPlaylist,
        clearPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

// Custom hook to use the PlaylistContext
export const usePlaylist = () => {
  const context = useContext(PlaylistContext);
  if (!context) {
    throw new Error('usePlaylist must be used within a PlaylistProvider');
  }
  return context;
};
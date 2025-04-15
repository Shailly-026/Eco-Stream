'use client';
import React, { createContext, useState, useContext, useCallback, useRef, useEffect } from 'react';

// Create the PlayerContext
const PlayerContext = createContext();

// PlayerContext Provider Component
export const PlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Volume range: 0 to 1
  const [currentPodcast, setCurrentPodcast] = useState(null);

  const audioRef = useRef(null);

  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const seek = useCallback((time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const changeVolume = useCallback((newVolume) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  }, []);

  const loadPodcast = useCallback((podcast) => {
    setCurrentPodcast(podcast);
    setCurrentTime(0);
    setDuration(podcast.duration || 0);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.src = podcast.audioUrl;
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
      const handleLoadedMetadata = () => setDuration(audio.duration);

      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        currentTime,
        duration,
        volume,
        currentPodcast,
        play,
        pause,
        seek,
        changeVolume,
        loadPodcast,
      }}
    >
      {children}
      <audio ref={audioRef} />
      <PlayerUI />
    </PlayerContext.Provider>
  );
};

// Custom hook to use the PlayerContext
export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};

// Player UI Component
const PlayerUI = () => {
  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    currentPodcast,
    play,
    pause,
    seek,
    changeVolume,
  } = usePlayer();

  if (!currentPodcast) return null; // Hide the player if no podcast is loaded

  const handleSeekChange = (e) => {
    seek(Number(e.target.value));
  };

  const handleVolumeChange = (e) => {
    changeVolume(Number(e.target.value));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 shadow-lg flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={currentPodcast.coverImageUrl || '/default-cover.jpg'}
          alt={currentPodcast.title}
          className="w-12 h-12 object-cover rounded"
        />
        <div>
          <h4 className="text-sm font-bold">{currentPodcast.title}</h4>
          <p className="text-xs text-gray-400">{currentPodcast.artist || 'Unknown Artist'}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={isPlaying ? pause : play}
            className="p-2 bg-purple-600 rounded-full hover:bg-purple-500 transition"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeekChange}
            className="w-64"
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="volume" className="text-xs">Volume</label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24"
        />
      </div>
    </div>
  );
};

// Helper function to format time
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
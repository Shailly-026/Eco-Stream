'use client';
import React, { createContext, useState, useContext, useCallback, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IoMdSkipForward, IoMdSkipBackward } from 'react-icons/io';
import useVoiceContext from './VoiceContext';

// Create the PlayerContext
const PlayerContext = createContext();

// PlayerContext Provider Component
export const PlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Volume range: 0 to 1
  const [currentPodcast, setCurrentPodcast] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef(null);
  const { finalTranscript, resetTranscript, voiceResponse } = useVoiceContext();

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

  const skipForward = useCallback(() => {
    if (audioRef.current) {
      const newTime = Math.min(audioRef.current.currentTime + 10, duration);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }, [duration]);

  const skipBackward = useCallback(() => {
    if (audioRef.current) {
      const newTime = Math.max(audioRef.current.currentTime - 10, 0);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const changeVolume = useCallback((newVolume) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
      if (newVolume > 0 && isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    }
  }, [isMuted]);

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

  // Voice control functionality
  useEffect(() => {
    if (!finalTranscript) return;
    
    const transcript = finalTranscript.toLowerCase();
    
    // Handle playback controls
    if (transcript.includes('play podcast') || transcript.includes('resume podcast')) {
      play();
      voiceResponse('Playing podcast');
      resetTranscript();
    } 
    else if (transcript.includes('pause podcast') || transcript.includes('stop podcast')) {
      pause();
      voiceResponse('Pausing podcast');
      resetTranscript();
    }
    else if (transcript.includes('skip forward') || transcript.includes('fast forward')) {
      skipForward();
      voiceResponse('Skipping forward 10 seconds');
      resetTranscript();
    }
    else if (transcript.includes('skip backward') || transcript.includes('go back')) {
      skipBackward();
      voiceResponse('Going back 10 seconds');
      resetTranscript();
    }
    
    // Handle volume controls
    else if (transcript.includes('mute') || transcript.includes('silence')) {
      toggleMute();
      voiceResponse('Muting audio');
      resetTranscript();
    }
    else if (transcript.includes('unmute') || transcript.includes('sound on')) {
      if (isMuted) {
        toggleMute();
        voiceResponse('Unmuting audio');
        resetTranscript();
      }
    }
    else if (transcript.includes('volume up') || transcript.includes('increase volume')) {
      const newVolume = Math.min(volume + 0.1, 1);
      changeVolume(newVolume);
      voiceResponse('Increasing volume');
      resetTranscript();
    }
    else if (transcript.includes('volume down') || transcript.includes('decrease volume')) {
      const newVolume = Math.max(volume - 0.1, 0);
      changeVolume(newVolume);
      voiceResponse('Decreasing volume');
      resetTranscript();
    }
    else if (transcript.includes('max volume') || transcript.includes('full volume')) {
      changeVolume(1);
      voiceResponse('Volume set to maximum');
      resetTranscript();
    }
  }, [finalTranscript, play, pause, skipForward, skipBackward, toggleMute, changeVolume, volume, isMuted, voiceResponse, resetTranscript]);

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        currentTime,
        duration,
        volume,
        currentPodcast,
        isMuted,
        play,
        pause,
        seek,
        changeVolume,
        loadPodcast,
        skipForward,
        skipBackward,
        toggleMute,
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

// Player UI Component - Enhanced with better UI and voice control indicators
const PlayerUI = () => {
  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    currentPodcast,
    isMuted,
    play,
    pause,
    seek,
    changeVolume,
    skipForward,
    skipBackward,
    toggleMute,
  } = usePlayer();
  
  const [showVoiceCommands, setShowVoiceCommands] = useState(false);

  if (!currentPodcast) return null;

  const handleSeekChange = (e) => {
    seek(Number(e.target.value));
  };

  const handleVolumeChange = (e) => {
    changeVolume(Number(e.target.value));
  };

  const voiceCommands = [
    { command: "Play podcast", description: "Starts or resumes playback" },
    { command: "Pause podcast", description: "Pauses current playback" },
    { command: "Skip forward", description: "Jumps ahead 10 seconds" },
    { command: "Go back", description: "Jumps back 10 seconds" },
    { command: "Mute", description: "Mutes the audio" },
    { command: "Unmute", description: "Unmutes the audio" },
    { command: "Volume up", description: "Increases volume" },
    { command: "Volume down", description: "Decreases volume" },
    { command: "Max volume", description: "Sets volume to maximum" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md text-white p-4 shadow-lg border-t border-purple-900/50" style={{ zIndex: 90 }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Podcast info */}
        <div className="flex items-center gap-4">
          <img
            src={currentPodcast.coverImageUrl || '/default-cover.jpg'}
            alt={currentPodcast.title}
            className="w-12 h-12 object-cover rounded-md"
          />
          <div>
            <h4 className="text-sm font-bold">{currentPodcast.title}</h4>
            <p className="text-xs text-gray-400">{currentPodcast.artist || 'Unknown Artist'}</p>
          </div>
        </div>
        
        {/* Player controls */}
        <div className="flex flex-col items-center w-full md:w-auto max-w-lg">
          <div className="flex items-center gap-4">
            <button
              onClick={skipBackward}
              className="p-2 text-gray-300 hover:text-white transition"
              title="Skip backward 10 seconds (say 'go back')"
            >
              <IoMdSkipBackward size={20} />
            </button>
            
            <button
              onClick={isPlaying ? pause : play}
              className="p-3 bg-purple-600 rounded-full hover:bg-purple-500 transition flex items-center justify-center"
              title={isPlaying ? "Pause (say 'pause podcast')" : "Play (say 'play podcast')"}
            >
              {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
            </button>
            
            <button
              onClick={skipForward}
              className="p-2 text-gray-300 hover:text-white transition"
              title="Skip forward 10 seconds (say 'skip forward')"
            >
              <IoMdSkipForward size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-2 text-xs w-full mt-2">
            <span className="text-gray-400 w-10 text-right">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 1}
              value={currentTime}
              onChange={handleSeekChange}
              className="w-full h-1 accent-purple-500"
            />
            <span className="text-gray-400 w-10">{formatTime(duration)}</span>
          </div>
        </div>
        
        {/* Volume control */}
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleMute}
            className="text-gray-300 hover:text-white transition"
            title={isMuted ? "Unmute (say 'unmute')" : "Mute (say 'mute')"}
          >
            {isMuted || volume === 0 ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 accent-purple-500"
            title="Change volume (say 'volume up' or 'volume down')"
          />
        </div>
      </div>
      
      {/* Voice commands collapsible dropdown */}
      <div 
        className="absolute right-4 transition-all duration-300 bg-black"  
        style={{ 
          top: showVoiceCommands ? '-280px' : '-45px',
          opacity: showVoiceCommands ? '1' : '0.8',
          // transform: `translateY(${showVoiceCommands ? '0' : '5px'})`,
          filter: `drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))`,
        }}
        onMouseEnter={() => setShowVoiceCommands(true)}
        onMouseLeave={() => setShowVoiceCommands(false)}
      >
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-t-md overflow-hidden transition-all duration-300 border border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.15)]">
          <div className="flex items-center justify-between px-4 py-2 cursor-pointer bg-gradient-to-r from-purple-900/80 to-gray-800/80 border-b border-purple-500/30">
            <span className="text-sm font-medium text-purple-100 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              Available Voice Commands
            </span>
            <button className="text-purple-300 hover:text-white transition-colors">
              {showVoiceCommands ? <FaChevronDown size={14} /> : <FaChevronUp size={14} />}
            </button>
          </div>
          
          <div 
            className="transition-all duration-300 overflow-hidden"
            style={{ 
              maxHeight: showVoiceCommands ? '280px' : '0',
              opacity: showVoiceCommands ? '1' : '0' 
            }}
          >
            <div className="p-4 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700">
              <table className="w-full text-xs">
                <thead>
                  <tr>
                    <th className="text-left pb-2 text-purple-300 font-semibold">Command</th>
                    <th className="text-left pb-2 text-purple-300 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {voiceCommands.map((cmd, index) => (
                    <tr key={index} className="border-t border-gray-700/50 hover:bg-purple-900/10 transition-colors">
                      <td className="py-1.5 pr-4 font-medium text-purple-100">" {cmd.command} "</td>
                      <td className="py-1.5 text-gray-300">{cmd.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to format time
const formatTime = (time) => {
  if (!time) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
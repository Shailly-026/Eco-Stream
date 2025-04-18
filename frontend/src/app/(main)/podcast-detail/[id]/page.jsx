'use client';

import React, { useEffect, useState } from 'react';
import { Play, Plus, Heart, Mic } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { usePlayer } from '../../../../context/PlayerContext';
import { usePlaylist } from '../../../../context/PlaylistContext';
import useVoiceContext from '../../../../context/VoiceContext';
import axios from 'axios';

const PodcastDetailBanner = () => {
  const { id } = useParams();
  const router = useRouter();
  const [podcastDetail, setPodcastDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showVoiceHint, setShowVoiceHint] = useState(false);

  const { play, pause, loadPodcast, isPlaying, currentPodcast } = usePlayer();
  const { addToPlaylist } = usePlaylist();
  const { finalTranscript, resetTranscript, voiceResponse, listening } = useVoiceContext();

  const isLoggedIn = !!localStorage.getItem('authToken');

  useEffect(() => {
    fetchPodcastDetail();
  }, [id]);

  // Voice command listener
  useEffect(() => {
    if (!finalTranscript || !podcastDetail) return;
    
    const transcript = finalTranscript.toLowerCase();
    
    if (transcript.includes('play this podcast') || 
        transcript.includes('play podcast') || 
        transcript.includes('start podcast')) {
      handlePlayPodcast();
      voiceResponse(`Playing ${podcastDetail.title}`);
      resetTranscript();
    }
    else if (transcript.includes('add to playlist') ||
             transcript.includes('save podcast')) {
      handleAddToPlaylist();
      resetTranscript();
    }
    else if (transcript.includes('like podcast') ||
             transcript.includes('like this podcast')) {
      handleLikePodcast();
      resetTranscript();
    }
  }, [finalTranscript, podcastDetail, resetTranscript, voiceResponse]);

  const fetchPodcastDetail = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/podcast/getbyid/${id}`);
      if (!response.ok) throw new Error('Failed to fetch podcast details');
      const data = await response.json();
      setPodcastDetail(data);
      setLikes(data.likes || 0);
      setComments(data.comments || []);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to load podcast.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToPlaylist = () => {
    const token = localStorage.getItem('user');
    if (!token) {
      alert('Please sign in to create a playlist.');
      router.push('/user-login');
      return;
    }

    if (!podcastDetail) return;

    addToPlaylist({
      id,
      title: podcastDetail.title,
      artist: podcastDetail.artist?.name || 'Unknown Artist',
      duration: podcastDetail.duration,
      audioUrl: podcastDetail.audioUrl,
      coverImageUrl: podcastDetail.coverImageUrl,
    });

    alert('Podcast added to playlist!');
  };

  const handlePlayPodcast = () => {
    if (currentPodcast?.id === id && isPlaying) {
      pause();
    } else {
      loadPodcast({
        id,
        title: podcastDetail?.title,
        duration: podcastDetail?.duration,
        audioUrl: podcastDetail?.audioUrl,
        coverImageUrl: podcastDetail?.coverImageUrl,
        artist: podcastDetail?.artist?.name || 'Unknown Artist',
      });
      play();
    }
  };

  const handleLikePodcast = async () => {
    try {
      const token = localStorage.getItem('user');
      if (!token) {
        alert('You must be logged in to like a podcast.');
        return;
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/podcast/like/${id}`,
        {},
        { headers: { 'x-auth-token': token } }
      );

      setLikes(response.data.likes || 0);
    } catch (err) {
      console.error('Error liking podcast:', err);
      alert('Failed to like podcast.');
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();

    if (!newComment.trim()) {
      alert('Comment cannot be empty.');
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/podcast/comment/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment: newComment }),
      });

      if (!response.ok) throw new Error('Failed to add comment');

      const data = await response.json();
      setComments(data.comments || []);
      setNewComment('');
    } catch (err) {
      console.error('Error adding comment:', err);
      alert('Failed to add comment.');
    }
  };

  if (loading) {
    return (
      <div className="text-purple-300 text-center p-6 bg-black">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-400 text-center p-6 bg-black">
        {error}
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 left-[40vw]">
        <img
          src={podcastDetail?.coverImageUrl || '/default-banner.jpg'}
          alt={podcastDetail?.title || 'Podcast Cover'}
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
            <span>{podcastDetail?.duration || 0} sec</span>
            <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
            <span>{podcastDetail?.language || 'English'}</span>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 text-transparent bg-clip-text drop-shadow-lg">
              {podcastDetail?.title}
            </h1>
            <p className="mt-2 text-gray-300 max-w-3xl">{podcastDetail?.description}</p>
            <p className="mt-2 text-gray-300 max-w-3xl">
              {podcastDetail?.artist?.name || 'Unknown Artist'}
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={handlePlayPodcast}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-md hover:shadow-purple-800/50 hover:from-purple-600 hover:to-purple-800 transition-all"
              title='Say "play this podcast" to play using voice'
            >
              <Play size={20} />
              <span>{isPlaying && currentPodcast?.id === id ? 'Pause Podcast' : 'Play Podcast'}</span>
            </button>

            <button
              onClick={handleAddToPlaylist}
              className="flex items-center justify-center w-12 h-12 rounded-lg bg-black bg-opacity-50 border border-purple-700 text-purple-300 hover:bg-purple-800/20 hover:scale-105 transition-all"
              title='Say "add to playlist" to save using voice'
            >
              <Plus size={24} />
            </button>

            <button
              onClick={handleLikePodcast}
              className="flex items-center justify-center w-12 h-12 rounded-lg bg-black bg-opacity-50 border border-red-500 text-red-500 hover:bg-red-500/20 hover:scale-105 transition-all"
              title='Say "like podcast" using voice'
            >
              <Heart size={24} />
            </button>

            <span className="text-sm text-gray-300">{likes} Likes</span>
            
            {/* Voice command tooltip */}
            <div 
              className="relative"
              onMouseEnter={() => setShowVoiceHint(true)}
              onMouseLeave={() => setShowVoiceHint(false)}
            >
              <button className={`flex items-center justify-center w-12 h-12 rounded-lg border transition-all ${listening ? 'bg-purple-600 text-white border-purple-400 animate-pulse' : 'bg-black bg-opacity-50 border-purple-700 text-purple-300'}`}>
                <Mic size={20} />
              </button>
              
              {showVoiceHint && (
                <div className="absolute top-full right-0 mt-2 w-64 p-3 bg-gray-800/90 backdrop-blur-sm rounded-md border border-purple-500/40 shadow-lg z-50 text-xs">
                  <p className="font-medium text-purple-300 mb-2">Voice Commands:</p>
                  <ul className="space-y-1 text-gray-200">
                    <li>"Play this podcast" - Start playing</li>
                    <li>"Add to playlist" - Save to your playlist</li>
                    <li>"Like podcast" - Like this podcast</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-300 mb-2">Comments</h3>

            <form onSubmit={handleAddComment} className="flex items-center gap-2 mb-4">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 px-4 py-2 rounded-lg bg-black text-white border border-purple-700 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition"
              >
                Submit
              </button>
            </form>

            <ul className="space-y-2">
              {comments.map((comment, index) => (
                <li
                  key={index}
                  className="p-3 bg-black bg-opacity-50 border border-purple-700 rounded-lg text-gray-300"
                >
                  {comment?.comment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetailBanner;

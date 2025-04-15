import React, { Profiler } from 'react'
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import { VoiceProvider } from '@/context/VoiceContext';
import { PlayerProvider } from '@/context/PlayerContext';
import { PlaylistProvider } from '@/context/PlaylistContext';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <VoiceProvider>
          <PlayerProvider>
            <PlaylistProvider>

              <Toaster />
              {children}
              <Footer />
            </PlaylistProvider>
          </PlayerProvider>
        </VoiceProvider>
      </body>
    </html>
  );
};

export default RootLayout;



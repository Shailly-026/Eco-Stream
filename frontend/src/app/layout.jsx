import React, { Profiler } from 'react'
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import { VoiceProvider } from '@/context/VoiceContext';
import { PlayerProvider } from '@/context/PlayerContext';
import { PlaylistProvider } from '@/context/PlaylistContext';
import { AppProvider } from '@/context/AppContext';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <VoiceProvider>
            <PlayerProvider>
              <PlaylistProvider>
                <Toaster />
                {children}
                <Footer />
              </PlaylistProvider>
            </PlayerProvider>
          </VoiceProvider>
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;



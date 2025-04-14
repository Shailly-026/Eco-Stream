import React, { Profiler } from 'react'
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';
import { VoiceProvider } from '@/context/VoiceContext';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <VoiceProvider>
            <Toaster />
            {children}
            <Footer />
        </VoiceProvider>
      </body>
    </html>
  );
};

export default RootLayout;



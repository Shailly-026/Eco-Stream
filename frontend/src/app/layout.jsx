import React, { Profiler } from 'react'


import "./globals.css";
import { Toaster } from 'react-hot-toast';






const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Toaster />
        {children}

      </body>
    </html>
  );
};

export default RootLayout;



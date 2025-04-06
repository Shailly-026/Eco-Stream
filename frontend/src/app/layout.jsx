import React, { Profiler } from 'react'


import "./globals.css";
//import Sidebar from './components/Sidebar';
// import Footer from './components/Footer';
// import Avatar from './components/Avatar';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Toaster } from 'react-hot-toast';






const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Toaster />
        {/* Sidebar for navigation */}
        {/* <Navbar /> */}
        {/* {<Avatar />} */}
        {children}

        {/* Main content area */}
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;



import React, { Profiler } from 'react'


import "./globals.css";
//import Sidebar from './components/Sidebar';
// import Footer from './components/Footer';
// import Avatar from './components/Avatar';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';






const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* Sidebar for navigation */}
        <Navbar />
        {/* {<Avatar />} */}

          <main className="flex-1 p-4">{children}</main>
        
        {/* Main content area */}
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;



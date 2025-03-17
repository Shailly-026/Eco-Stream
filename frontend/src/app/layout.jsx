import React from  'react';
import "./globals.css";


import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body >
        {/* Sidebar for navigation */}
        <Navbar/>        

        {/* Main content area */}
        <main className="flex-1 p-4">{children}</main>
        <Footer/>
        
        
      </body>
    </html>
  );
};

export default RootLayout;

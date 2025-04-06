'use client';

import "./globals.css";
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* Sidebar for navigation */}
        {/* <Sidebar/> */}

        {/* Main content area */}
       
        <main className="flex-1 p-4">{children}</main>
      
      </body>
    </html>
  );
};

export default RootLayout;



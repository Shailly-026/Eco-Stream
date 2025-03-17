'use client';
import { Sidebar } from "lucide-react";
import "./globals.css";
import Footer from "./components/Footer";
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* Sidebar for navigation */}
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1 p-4">{children}</main>
        <Footer/>
      </body>
    </html>
  );
};

export default RootLayout;



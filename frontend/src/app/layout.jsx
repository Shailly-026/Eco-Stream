import React from 'react'

import "./globals.css";
import Footer from "./components/Footer";
import { Sidebar } from "lucide-react";

const RootLayout= ({ children }) => {
  return (
    <html lang="en">
      <body
      > <Sidebar/>
        <main className="flex-1 p-4">{children}</main>
        <Footer/>
      </body>
    </html>
  );
};

export default RootLayout;



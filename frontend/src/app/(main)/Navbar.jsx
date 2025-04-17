'use client';
import React, { useState } from "react";
import Head from 'next/head';
import { Mic } from 'lucide-react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authType, setAuthType] = useState(""); // "login" or "signup"

  // Open modal and set auth type
  const openModal = (type) => {
    setAuthType(type);
    setIsModalOpen(true);
  };

  // Redirect user based on selection
  const handleSelection = (role) => {
    const path = authType === "login" ? `/${role}-login` : `/${role}-signup`;
    window.location.href = path;
  };

  return (
    <div className="bg-black text-white">
      <Head>
        <title>EcoStream</title>
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Mic className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">EcoStream</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="/#Features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="/#How-it-works" className="hover:text-purple-400 transition-colors">How It Works</a>
            <a href="/#Pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center space-x-4">
          </div>
        </div>
      </header>

    </div>
  );
}

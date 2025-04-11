'use client';
import React, { useState } from "react";
import Head from 'next/head';
import { Mic, PlayCircle, Headphones, Settings, Star, ChevronRight } from 'lucide-react';

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
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>EcoStream | Voice-Operated Podcast Platform</title>
        <meta name="description" content="Listen and control podcasts completely with your voice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Mic className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">EcoStream</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={() => openModal("login")} className="text-sm px-4 py-2 border border-purple-500 rounded-full hover:bg-purple-500/20 transition-colors">Log In</button>
            <button onClick={() => openModal("signup")} className="text-sm px-4 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">Sign Up Free</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black"></div>
          <div className="absolute top-40 right-0 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-64 h-64 bg-purple-800/20 rounded-full filter blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Podcast Control</span> Using Just Your Voice
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Discover, play, and manage your favorite podcasts hands-free with cutting-edge voice technology.
              Say goodbye to tapping and scrolling.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-purple-600 rounded-full font-medium hover:bg-purple-700 transition-colors flex items-center justify-center">
                Try for Free <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-4 border border-purple-500 rounded-full font-medium hover:bg-purple-500/20 transition-colors flex items-center justify-center">
                Watch Demo <PlayCircle className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
            <h2 className="text-xl font-bold mb-4">Select Your Role</h2>
            <div className="space-x-4">
              <button
                onClick={() => handleSelection("user")}
                className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg text-lg"
              >
                User
              </button>
              <button
                onClick={() => handleSelection("artist")}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg text-lg"
              >
                Artist
              </button>
            </div>
            <button onClick={() => setIsModalOpen(false)} className="mt-4 text-gray-400 hover:text-white">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section id="features" className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Features</span> You'll Love
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-purple-900/50 hover:border-purple-500 transition-colors">
              <div className="h-12 w-12 bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                <Mic className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Voice Commands</h3>
              <p className="text-gray-400">Control everything with natural language. Play, pause, skip, save episodes with just your voice.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-purple-900/50 hover:border-purple-500 transition-colors">
              <div className="h-12 w-12 bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                <Headphones className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Recommendations</h3>
              <p className="text-gray-400">Get personalized podcast suggestions based on your listening history and preferences.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-purple-900/50 hover:border-purple-500 transition-colors">
              <div className="h-12 w-12 bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Hands-Free Management</h3>
              <p className="text-gray-400">Create playlists, organize favorites, and share episodes with friends using just your voice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-b from-black to-purple-950/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">EcoStream</span> Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-purple-700 flex items-center justify-center">
                  <span className="text-2xl font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Say "Hey EcoStream"</h3>
              <p className="text-gray-400">Activate the voice assistant with our wake phrase to start controlling your podcast experience.</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-purple-700 flex items-center justify-center">
                  <span className="text-2xl font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Tell Us What You Want</h3>
              <p className="text-gray-400">Use natural language commands like "Play the latest episode of Tech Talk" or "Find podcasts about space."</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-purple-700 flex items-center justify-center">
                  <span className="text-2xl font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Enjoy Hands-Free</h3>
              <p className="text-gray-400">Listen to your podcasts while cooking, driving, or working out without touching your device.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Our <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Users</span> Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-purple-900/50">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-purple-500" fill="currentColor" />
                <Star className="h-5 w-5 text-purple-500" fill="currentColor" />
                <Star className="h-5 w-5 text-purple-500" fill="currentColor" />
                <Star className="h-5 w-5 text-purple-500" fill="currentColor" />
                <Star className="h-5 w-5 text-purple-500" fill="currentColor" />
              </div>
              <p className="text-gray-300 mb-6">"EcoStream has revolutionized how I listen to podcasts during my commute. I can safely control everything while driving without taking my eyes off the road."</p>
              <p className="font-semibold">Sarah T., Daily Commuter</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-purple-900/50">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-purple-500" fill="currentColor" />
                <Star className="h-5 w-5 text-purple-500" fill="currentColor" />
                <Star className="h-5 w-5 text-purple-500" fill="currentColor" />
                <Star className="h-5 w-5 text-purple-500" fill="currentColor" />
                <Star className="h-5 w-5 text-purple-500" fill="currentColor" />
              </div>
              <p className="text-gray-300 mb-6">"As someone with limited mobility, VoiceCast has been a game-changer. The voice recognition is incredibly accurate and understands my commands perfectly."</p>
              <p className="font-semibold">Alex M., Technology Enthusiast</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-black to-purple-950/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Simple <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">Choose the plan that works for you. All plans include our core voice control features.</p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-xl border border-purple-900/50 overflow-hidden">
              <div className="p-6 bg-gray-900">
                <h3 className="text-xl font-semibold mb-2">Free</h3>
                <p className="text-3xl font-bold mb-4">$0<span className="text-gray-400 text-sm font-normal">/month</span></p>
                <p className="text-gray-400 mb-6">Perfect for casual listeners</p>
                <button className="w-full py-2 border border-purple-500 rounded-lg hover:bg-purple-500/20 transition-colors">Get Started</button>
              </div>
              <div className="p-6 bg-gray-900">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Basic voice commands</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>5 hours of listening/month</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Ad-supported</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl border-2 border-purple-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-purple-600 text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <div className="p-6 bg-gray-900">
                <h3 className="text-xl font-semibold mb-2">Premium</h3>
                <p className="text-3xl font-bold mb-4">$9.99<span className="text-gray-400 text-sm font-normal">/month</span></p>
                <p className="text-gray-400 mb-6">For dedicated podcast fans</p>
                <button className="w-full py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">Start Free Trial</button>
              </div>
              <div className="p-6 bg-gray-900">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Advanced voice commands</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Unlimited listening</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Ad-free experience</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Custom playlists</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Download for offline</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl border border-purple-900/50 overflow-hidden">
              <div className="p-6 bg-gray-900">
                <h3 className="text-xl font-semibold mb-2">Business</h3>
                <p className="text-3xl font-bold mb-4">$19.99<span className="text-gray-400 text-sm font-normal">/month</span></p>
                <p className="text-gray-400 mb-6">For teams and professionals</p>
                <button className="w-full py-2 border border-purple-500 rounded-lg hover:bg-purple-500/20 transition-colors">Contact Sales</button>
              </div>
              <div className="p-6 bg-gray-900">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>All Premium features</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Analytics dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Custom voice commands</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-purple-950/30 to-black">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 rounded-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/30 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-32 -left-20 w-64 h-64 bg-purple-800/30 rounded-full filter blur-3xl"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Try EcoStream?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                Join thousands of podcast lovers who've switched to a hands-free listening experience.
              </p>
              <button className="px-8 py-4 bg-purple-600 rounded-full font-medium hover:bg-purple-700 transition-colors mx-auto flex items-center justify-center">
                Start Free Trial <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Mic className="h-6 w-6 text-purple-500" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">EcoStream</span>
              </div>
              <p className="text-gray-400 mb-6">The future of voice-controlled podcast listening is here.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-purple-400">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-purple-400">Pricing</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-purple-400">Testimonials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text"></a></li>
                <li><a href="/about" className="text-gray-400 hover:text-purple-400">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Voice Commands</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Terms of Service</a></li>
                <li><a href="/support" className="text-gray-400 hover:text-purple-400">Support</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-purple-400">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} EcoStream. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div >
  );
}

'use client';
import React, { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import { Mic, PlayCircle, Headphones, Settings, Star, ChevronRight } from 'lucide-react';
import useAppContext from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authType, setAuthType] = useState(""); // "login" or "signup"

  const { loggedIn, logout } = useAppContext();
  const router = useRouter();

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

  const openProfile = () => {
    const user = localStorage.getItem("user");
    if (user) {
      router.push("/user/profile");
    }else{
      router.push("/artist/profile");
    }
  }

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
          <Link href="/" className="flex items-center">
            <Mic className="h-8 w-8 text-purple-500 cursor-pointer" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">EcoStream</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <a href="#Features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#How-it-works" className="hover:text-purple-400 transition-colors">How It Works</a>
            <a href="#Pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
          </nav>
          {
            loggedIn ? (
              <div className="flex items-center space-x-4">
                <button onClick={openProfile} className="text-sm px-4 py-2 border border-purple-500 rounded-full hover:bg-purple-500/20 transition-colors">Profile</button>
                <button onClick={logout} className="text-sm px-4 py-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors">Log Out</button>
              </div>
            ) : (

              <div className="flex items-center space-x-4">
                <button onClick={() => openModal("login")} className="text-sm px-4 py-2 border border-purple-500 rounded-full hover:bg-purple-500/20 transition-colors">Log In</button>
                <button onClick={() => openModal("signup")} className="text-sm px-4 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">Sign Up Free</button>
              </div>
            )
          }
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
              <div className="flex gap-4">
                <Link href="/browse-podcast" >
                  <button className="px-8 py-4 bg-purple-600 rounded-full font-medium hover:bg-purple-700 transition-colors flex items-center justify-center">
                    Try for Free <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>

                <Link href="/browse-all" >
                  <button className="px-8 py-4 border border-purple-500 rounded-full font-medium hover:bg-purple-500/20 transition-colors flex items-center justify-center">
                    Demo <PlayCircle className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
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
      <section id="Features" className="py-20 bg-black/90">
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
              <p className="text-gray-400">Control everything with natural language. Play, pause, skip, save podcast with just your voice.</p>
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
      <section id="How-it-works" className="py-20 bg-gradient-to-b from-black to-purple-950/40">
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
              <h3 className="text-xl font-semibold mb-4">Say "hello"</h3>
              <p className="text-gray-400">Activate the voice assistant with our wake phrase to start controlling your podcast experience.</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-purple-700 flex items-center justify-center">
                  <span className="text-2xl font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Tell Us What You Want</h3>
              <p className="text-gray-400">Use natural language commands like "i want to listen podcast" or "Tell me about Eco Stream."</p>
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
      <section id="Pricing" className="py-20 bg-gradient-to-b from-black to-purple-950/30">
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

    </div >
  );
}

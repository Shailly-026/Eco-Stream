import React from 'react'
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold">Welcome to Eco Stream</h1>
      <p className="mt-4 text-lg text-gray-400">A fully voice-operated storytelling podcast platform.</p>

      <div className="mt-8 space-x-4">
        <Link href="/podcasts">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-lg">Explore Podcasts</button>
        </Link>
        <Link href="/add-podcast">
          <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-lg">Add Your Podcast</button>
        </Link>
      </div>
    </div>
  );
}

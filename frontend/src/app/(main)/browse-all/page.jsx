
import React from 'react';
import Image from 'next/image';

const BrowsePage = () => {
  const categories = [
    { name: 'Entertainment', icon: 'play-circle' },
    { name: 'Education', icon: 'newspaper' },
    { name: 'Lifestyle & Health', icon: 'tv' },
    { name: 'Travel & Adventure', icon: 'film' },
    { name: 'Gaming & Hobbies', icon: 'trophy' }
  ];

  const studios = [
    { name: 'Storytelling & Drama', logo: '/logos/hotstar-specials.png' },
    { name: 'Talk & Interviews', logo: '/logos/disney.png' },
    { name: 'Mind & soul', logo: '/logos/hbo.png' },
    { name: 'Music & Vibe', logo: '/logos/peacock.png' },
    { name: 'Mental Wellness', logo: '/logos/paramount.png' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Browse Section */}
        <h2 className="text-2xl font-bold mb-4">Browse</h2>
        <div className="grid grid-cols-5 gap-3 mb-12">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="relative bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg aspect-[4/3] cursor-pointer hover:opacity-90 transition"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-50">
                {/* Placeholder for icon - in a real app you would use actual icons */}
                <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center">
                  <span className="sr-only">{category.icon}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <span className="text-xl font-semibold">{category.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studios Section */}
        <h2 className="text-2xl font-bold mb-4">EcostreamSpecial</h2>
        <div className="grid grid-cols-5 gap-3 mb-12">
          {studios.map((studios, index) => (
            <div 
              key={index} 
              className="relative bg-gradient-to-br from-gray-900 to-purple-900  rounded-lg aspect-[4/3] cursor-pointer hover:opacity-90 transition "
            >
              <div className="relative w-full h-full">
                <div className="flex items-center justify-center h-full">
                  {/* In production, use next/image with actual studio logos */}
                  <div className="text-center text-xl font-bold text-white">{studios.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
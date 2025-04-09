
import React from 'react';
import Image from 'next/image';

const BrowsePage = () => {
  const categories = [
    { name: 'Sparks', icon: 'play-circle' },
    { name: 'News', icon: 'newspaper' },
    { name: 'TV', icon: 'tv' },
    { name: 'Movies', icon: 'film' },
    { name: 'Sports', icon: 'trophy' }
  ];

  const studios = [
    { name: 'Hotstar Specials', logo: '/logos/hotstar-specials.png' },
    { name: 'Disney', logo: '/logos/disney.png' },
    { name: 'HBO', logo: '/logos/hbo.png' },
    { name: 'Peacock', logo: '/logos/peacock.png' },
    { name: 'Paramount+', logo: '/logos/paramount.png' }
  ];

  const languages = [
    { name: 'Hindi', nativeName: 'हिन्दी', image: '/languages/hindi.jpg' },
    { name: 'English', nativeName: 'English', image: '/languages/english.jpg' },
    { name: 'Tamil', nativeName: 'தமிழ்', image: '/languages/tamil.jpg' },
    { name: 'Telugu', nativeName: 'తెలుగు', image: '/languages/telugu.jpg' },
    { name: 'Malayalam', nativeName: 'മലയാളം', image: '/languages/malayalam.jpg' }
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
        <h2 className="text-2xl font-bold mb-4">Studios</h2>
        <div className="grid grid-cols-5 gap-3 mb-12">
          {studios.map((studio, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg aspect-[4/3] cursor-pointer hover:opacity-90 transition flex items-center justify-center p-4"
            >
              <div className="relative w-full h-full">
                <div className="flex items-center justify-center h-full">
                  {/* In production, use next/image with actual studio logos */}
                  <div className="text-center text-xl font-bold text-white">{studio.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Languages Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Popular Languages</h2>
          <span className="text-purple-400 cursor-pointer">View</span>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {languages.map((language, index) => (
            <div 
              key={index} 
              className="relative bg-gray-900 rounded-lg overflow-hidden aspect-[4/3] cursor-pointer hover:opacity-90 transition"
            >
              {/* Language card with gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent z-10" />
              
              {/* In production, use next/image with proper language images */}
              <div className="absolute inset-0 bg-gray-800"></div>
              
              {/* Language text */}
              <div className="absolute bottom-0 left-0 p-4 z-20">
                <div className="text-xl font-semibold mb-1">{language.nativeName}</div>
                <div className="text-sm text-gray-300">{language.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
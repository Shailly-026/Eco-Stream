import React from 'react'

const Music$Vibe = () => {
    const studios = [
        { name: 'Music Reviews', logo: '/logos/hotstar-specials.png' },
        { name: 'Behind the beat', logo: '/logos/disney.png' },
        { name: 'Soundscapes', logo: '/logos/hbo.png' },
        { name: 'Instrumental stories', logo: '/logos/peacock.png' },
        { name: 'Artist spotlights', logo: '/logos/paramount.png' }
    ];
  return (
    <div className="min-h-screen bg-black text-white">
        {/* music $ vibe Section */}
        <h2 className="text-2xl font-bold mb-4">Music $ Vibe</h2>
        <div className="grid grid-cols-3 gap-3 mb-12">
            {studios.map((studios, index) => (
                <div
                    key={index}
                    className="relative bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg aspect-[4/3] cursor-pointer hover:opacity-90 transition"
                >
                    <div className="absolute inset-0 flex items-center justify-center opacity-50">
                        {/* Placeholder for icon - in a real app you would use actual icons */}
                        <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center">
                            <span className="sr-only">{studios.icon}</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-4">
                        <span className="text-xl font-semibold">{studios.name}</span>
                    </div>
                </div>
            ))}
        </div>

    </div>

    

    
  )
}

export default Music$Vibe
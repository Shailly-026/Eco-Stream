import React from 'react'

const Education = () => {
    const categories = [
        { name: 'Language learning', icon: 'play-circle' },
        { name: 'Study tips', icon: 'newspaper' },
        { name: 'Motivation', icon: 'tv' },
        { name: 'Career development', icon: 'film' },
        { name: 'Psychology', icon: 'trophy' }
    ];
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Education Section */}
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="grid grid-cols-3 gap-3 mb-12">
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

        </div>



    )
}

export default Education
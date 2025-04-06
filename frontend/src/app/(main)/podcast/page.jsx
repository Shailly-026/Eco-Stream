import React from 'react';

const PodcastSection = () => {
    const podcasts = [
        {
            title: "Bill Gates on India, Billion-Dollar...",
            episode: 135,
            date: "Mar 29",
            duration: "44 min",
            image: "/images/bill-gates.jpg", // Add the correct image path
        },
        {
            title: "Swipe Right on Pleasure? Prajakt...",
            episode: 'E',
            date: "Mar 28",
            duration: "43 min",
            image: "/images/durex-podcast.jpg", // Add the correct image path
        },
        {
            title: "Why longevity demands a new retirement plan?",
            episode: 1,
            date: "Mar 27",
            duration: "24 min",
            image: "/images/temperament.jpg", // Add the correct image path
        },
        {
            title: "Khidkiyaan",
            episode: '',
            date: "Mar 26",
            duration: "20 min",
            image: "/images/khidkiyaan.jpg", // Add the correct image path
        },
        {
            title: "Indian Premier League Cricket",
            episode: '',
            date: "Mar 24",
            duration: "269 min",
            image: "/images/acquired.jpg", // Add the correct image path
        },
    ];

    return (
        <div className="bg-purple-900 p-6">
            <h1 className="text-white text-4xl font-bold mb-4">Podcasts</h1>

            <h2 className="text-gray-300 text-lg mb-2">Best episodes of the week</h2>

            <div className="grid grid-cols-2 gap-4">
                {podcasts.map((podcast, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                        <img src={podcast.image} alt={podcast.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-white font-semibold">Episode {podcast.episode}</h3>
                            <p className="text-gray-300">{podcast.title}</p>
                            <p className="text-gray-400 text-sm">{podcast.date} • {podcast.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PodcastSection;
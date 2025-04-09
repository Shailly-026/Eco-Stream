import React from 'react'

const Navbar = () => {
  return (
    <div>

      <header className="bg-black text-white flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-2">
            {/* Spotify Icon (you can replace this with an actual icon) */}
            <span className="text-white">&#xf1c8;</span>
          </div>
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-2">
            {/* Home Icon (you can replace this with an actual icon) */}
            <span className="text-white">&#xf015;</span>
          </div>
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none"
          />
        </div>

        <nav className="flex items-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">Premium</a>
          <a href="#" className="text-gray-300 hover:text-white">Support</a>
          <a href="#" className="text-gray-300 hover:text-white">Download</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="bg-white text-black rounded-full px-4 py-2">Log in</button>
          <button className="border border-white rounded-full px-4 py-2 text-white">Sign up</button>
        </div>
      </header>

    </div>
  )
}

export default Navbar
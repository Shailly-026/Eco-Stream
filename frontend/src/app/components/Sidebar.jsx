import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, Mic, PlusCircle, User, Settings } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state

  return (
    <div className="flex">
      {/* Sidebar Container */}
      <div className={`bg-gray-900 text-white h-screen fixed transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4">
          {isOpen && <h1 className="text-xl font-bold">Eco Stream</h1>}
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <nav className="mt-4 space-y-4">
          <SidebarLink href="/" icon={<Home size={20} />} text="Home" isOpen={isOpen} />
          <SidebarLink href="/podcasts" icon={<Mic size={20} />} text="Podcasts" isOpen={isOpen} />
          <SidebarLink href="/add-podcast" icon={<PlusCircle size={20} />} text="Add Podcast" isOpen={isOpen} />
          <SidebarLink href="/profile" icon={<User size={20} />} text="Profile" isOpen={isOpen} />
          <SidebarLink href="/settings" icon={<Settings size={20} />} text="Settings" isOpen={isOpen} />
        </nav>
      </div>

      {/* Main Content Wrapper */}
      <div className={`ml-${isOpen ? "64" : "20"} p-4 transition-all duration-300 w-full`}>
        <p className="text-gray-400">Your main content goes here...</p>
      </div>
    </div>
  );
};

// Sidebar Link Component
const SidebarLink = ({ href, icon, text, isOpen }) => (
  <Link href={href} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700">
    {icon}
    {isOpen && <span>{text}</span>}
  </Link>
);

export default Sidebar;

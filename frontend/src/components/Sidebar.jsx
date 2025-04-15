'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Users, FolderClosed, Calendar, FileText, Blocks, CircleUserRound, Search } from 'lucide-react';

const CollapsibleSidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', active: true },
    { icon: <CircleUserRound size={20} />, label: 'My Space' },
    { icon: <Blocks size={20} />, label: 'Categories' },
    { icon: <Search size={20} />, label: 'Search' },
  ];

  return (
    <div className="flex h-full bg-gray-900">
      <div
        className={`bg-gradient-to-b from-purple-900 via-purple-800 to-black text-white transition-all duration-300 flex flex-col ${collapsed ? 'w-16' : 'w-64'}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {!collapsed && <h1 className="text-xl font-bold text-purple-300">EcoStream</h1>}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-purple-600 ml-auto"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul className="py-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center px-4 py-3 hover:bg-purple-700 transition-colors ${item.active ? 'bg-purple-600' : ''}`}
                >
                  <span className="inline-flex items-center justify-center">{item.icon}</span>
                  {!collapsed && (
                    <>
                      <span className="ml-3 text-gray-300">{item.label}</span>
                      {item.hasSubmenu && (
                        <ChevronRight size={16} className="ml-auto" />
                      )}
                      {item.badge && (
                        <span className="ml-auto bg-purple-700 text-xs px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default CollapsibleSidebar;


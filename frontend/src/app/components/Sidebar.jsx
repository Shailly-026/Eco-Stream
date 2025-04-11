'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Users, Briefcase, FolderClosed, Calendar, FileText } from 'lucide-react';

const CollapsibleSidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', active: true },
    { icon: <Users size={20} />, label: 'My Space', hasSubmenu: true },
    { icon: <Briefcase size={20} />, label: 'Categories', hasSubmenu: true },
    { icon: <FolderClosed size={20} />, label: 'Projects', hasSubmenu: true },
    { icon: <Calendar size={20} />, label: 'Calendar', badge: 'New' },
    { icon: <FileText size={20} />, label: 'Documentation' },
  ];

  return (
    <div className="flex h-full bg-gray-100">
      <div
        className={`bg-gray-900 text-white transition-all duration-300 flex flex-col ${collapsed ? 'w-16' : 'w-64'
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          {!collapsed && <h1 className="text-xl font-bold">EcoStream</h1>}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-full hover:bg-gray-800 ml-auto"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
        <>
          
          <div className="hs-dropdown [--strategy:absolute] [--auto-close:inside] relative w-full inline-flex">

            <div
              className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-neutral-900 dark:border-neutral-700"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-sidebar-header-example-with-dropdown"
            >
              <div className="p-1">
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  My account
                </a>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  Settings
                </a>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  Billing
                </a>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  Sign out
                </a>
              </div>
            </div>
            {/* End Account Dropdown */}
          </div>
        </>




        <div className="flex-1 overflow-y-auto">
          <ul className="py-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center px-4 py-3 hover:bg-gray-800 transition-colors ${item.active ? 'bg-gray-800' : ''
                    }`}
                >
                  <span className="inline-flex items-center justify-center">{item.icon}</span>
                  {!collapsed && (
                    <>
                      <span className="ml-3">{item.label}</span>
                      {item.hasSubmenu && (
                        <ChevronRight size={16} className="ml-auto" />
                      )}
                      {item.badge && (
                        <span className="ml-auto bg-gray-700 text-xs px-2 py-1 rounded-full">
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
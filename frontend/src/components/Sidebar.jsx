// 'use client';
// import React, { useState } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import { ChevronLeft, ChevronRight, Home, CircleUserRound, Blocks, Search } from 'lucide-react';

// const CollapsibleSidebar = ({ children }) => {
//   const [collapsed, setCollapsed] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();

//   const toggleSidebar = () => {
//     setCollapsed(!collapsed);
//   };

//   const menuItems = [
//     { icon: <Home size={20} />, label: 'Home', href: '/' },
//     { icon: <CircleUserRound size={20} />, label: 'My Space', href: '/artist/profile' },
//     { icon: <Blocks size={20} />, label: 'Categories', href: '/browse-all' },
//     { icon: <Search size={20} />, label: 'Search', href: '/search' },
//   ];

//   const handleNavigation = (href) => {
//     router.push(href);
//   };

//   return (
//     <div className="flex h-full bg-gray-900">
//       <div className={`bg-gradient-to-b from-purple-900 via-purple-800 to-black text-white transition-all duration-300 flex flex-col ${collapsed ? 'w-16' : 'w-64'}`}>
//         <div className="flex items-center justify-between p-4 border-b border-gray-800">
//           {!collapsed && <h1 className="text-xl font-bold text-purple-300">EcoStream</h1>}
//           <button
//             onClick={toggleSidebar}
//             className="p-2 rounded-full hover:bg-purple-600 ml-auto"
//           >
//             {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto">
//           <ul className="py-2">
//             {menuItems.map((item, index) => (
//               <li key={index}>
//                 <button
//                   onClick={() => handleNavigation(item.href)}
//                   className={`w-full flex items-center px-4 py-3 hover:bg-purple-700 transition-colors ${pathname === item.href ? 'bg-purple-600' : ''}`}
//                 >
//                   <span className="inline-flex items-center justify-center">{item.icon}</span>
//                   {!collapsed && (
//                     <span className="ml-3 text-gray-300">{item.label}</span>
//                   )}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {children}
//     </div>
//   );
// };

// export default CollapsibleSidebar;


'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Home, Users, FolderClosed, Calendar, FileText, Blocks, CircleUserRound, Search } from 'lucide-react';

const CollapsibleSidebar = ({ children, userType }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', link: '/' },
    { icon: <CircleUserRound size={20} />, label: userType === 'artist' ? 'Artist Profile' : 'My Profile', link: userType === 'artist' ? '/artist-profile' : '/user-profile' },
    { icon: <Blocks size={20} />, label: 'Categories', link: '/categories' },
    { icon: <Search size={20} />, label: 'Search', link: '/search' },
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
                <button
                  onClick={() => router.push(item.link)}
                  className={`w-full flex items-center px-4 py-3 hover:bg-purple-700 transition-colors text-left`}
                >
                  <span className="inline-flex items-center justify-center">{item.icon}</span>
                  {!collapsed && (
                    <span className="ml-3 text-gray-300">{item.label}</span>
                  )}
                </button>
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

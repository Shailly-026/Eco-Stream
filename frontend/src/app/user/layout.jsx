import React from 'react';
import CollapsibleSidebar from '@/components/Sidebar';
const Layout = ({ children }) => {
    return (
        <CollapsibleSidebar>
            {children}
        </CollapsibleSidebar>
        
    )
}

export default Layout;
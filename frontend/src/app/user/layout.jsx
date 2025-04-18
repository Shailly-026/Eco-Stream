'use client';
import React, { useEffect } from 'react';
import CollapsibleSidebar from '@/components/Sidebar';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const Layout = ({ children }) => {

    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if(!user){
            toast.error('Please login to access this page');
            router.replace('/user-login');
        }
    }, [])
    

    return (
        <CollapsibleSidebar>
            {children}
        </CollapsibleSidebar>
        
    )
}

export default Layout;
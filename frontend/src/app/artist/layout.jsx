'use client';
import React, { useEffect } from 'react'
import CollapsibleSidebar from '@/components/Sidebar';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const Layout = ({ children }) => {

    const router = useRouter();

    useEffect(() => {
        const artist = localStorage.getItem('artist');
        if(!artist){
            toast.error('Please login to access this page');
            router.replace('/artist-login');
        }
    }, [])
    

    return (
        <CollapsibleSidebar>
            {children}
        </CollapsibleSidebar>

    )
}

export default Layout;
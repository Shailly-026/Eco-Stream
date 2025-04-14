import { AppProvider } from '@/context/appContext'
import React from 'react'

const Template = ({ children }) => {

    return (
        <AppProvider>{children}</AppProvider>
    )
}

export default Template
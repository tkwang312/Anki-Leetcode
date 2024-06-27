import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

const Home = () => {
    const { currentUser } = useAuth()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    console.log(sidebarOpen)

    return (
        <div className='flex'>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Dashboard sidebarOpen={sidebarOpen}/>
        </div>
    )
}

export default Home
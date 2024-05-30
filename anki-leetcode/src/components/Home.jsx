import React from 'react'
import { useAuth } from '../context/AuthContext'
import Sidebar from './Sidebar'

const Home = () => {
    const { currentUser } = useAuth()
    return (
        <>
            <Sidebar />
            <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
        </>
    )
}

export default Home
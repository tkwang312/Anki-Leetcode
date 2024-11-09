import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { doSignOut } from '../auth'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 fixed bottom-0 left-0 h-10 border-b place-content-center items-center thisle'>
            {
                userLoggedIn
                    ?
                    <>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button>
                        <button onClick={() => {navigate('/home')}} className='text-sm text-blue-600 underline'>Home</button>
                    </>
                    :
                    <>
                        {/* <div className='flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0'> */}
                            <Link className='flex text-sm text-blue-600 underline' to={'/login'}>Login</Link>
                            <Link className='flex text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
                        {/* </div> */}
                    </>
            }

        </nav>
    )
}

export default Header
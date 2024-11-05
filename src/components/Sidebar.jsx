import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp, faBars, faHouse, faPerson, faPhone, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

    function handleSidebarOpen(e){
        e.preventDefault()
        setSidebarOpen(true);
    };

    function handleSidebarClose(e){
        e.preventDefault()
        setSidebarOpen(false);
    };

    return (
    <div>
        {!sidebarOpen ? (
        <div className="w-16 bg-purple-300 fixed h-full">
            <ul className="mt-3 text-white font-bold">
                <li className="mb-2 rounded hover:shadow hover:bg-purple-500 py-2 group" onClick={handleSidebarOpen}>
                    <div className="flex">
                        <a href="" className="px-4">
                            <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faBars} />
                        </a>

                        <div
                        className='absolute left-full rounded-md px-1 py-2 ml-6 text-indigo-800 text-sm bg-indigo-100 invisible opacity-20 -tranlsate-x-3 transition-all
                        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                        '
                        >
                            <h1>Menu</h1>
                        </div>
                    </div>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-purple-500 py-2 group">
                    <div className="flex">
                        <a href="" className="px-4">
                            <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faHouse}/>
                        </a>
                        <div
                            className='absolute left-full rounded-md px-1 py-2 ml-6 text-indigo-800 text-sm bg-indigo-100 invisible opacity-20 -tranlsate-x-3 transition-all
                            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                            '
                            >
                                <h1>Home</h1>
                            </div>
                    </div>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-purple-500 py-2 group">
                    <div className="flex">
                        <a href="" className="px-4">
                            <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faUserCircle}/>
                        </a>
                        <div
                            className='absolute left-full rounded-md px-1 py-2 ml-6 text-indigo-800 text-sm bg-indigo-100 invisible opacity-20 -tranlsate-x-3 transition-all
                            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                            '
                            >
                                <h1>Account</h1>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
        ) : (
        <div className='w-40 bg-purple-300 fixed h-full'>
            <ul className="mt-3 text-white font-bold">
                <li className="mb-2 rounded hover:shadow hover:bg-purple-500 py-2" onClick={handleSidebarClose}>
                    <a href="" className="px-3 justify-center text-center">
                        <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faBars} />
                        Menu
                    </a>

                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-purple-500 py-2">
                    <a href="" className="px-3">
                        <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faHouse}/>
                        Home
                    </a>

                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-purple-500 py-2">
                    <a href="" className="px-3">
                        <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faUserCircle}/>
                        Account
                    </a>
                </li>
            </ul>
        </div>
        )}
    </div>
    );
    };

export default Sidebar;
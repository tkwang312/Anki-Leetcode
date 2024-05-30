import React, {useState} from 'react'
import '../Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp, faBars, faHouse, faPerson, faPhone, faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function SidebarBuilder({children}){
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // const handleSidebarOpen = () => {
    //     setSidebarOpen(true);
    // }

    // const handleSidebarClose = () => {
    //     setSidebarOpen(false);
    // }
  return (
    <aside className='h-screen'>
        <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
            <div className='p-4 pb-2 flex justify-between items-center'>
                <button>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <ul className='flex-1 px-3'>{children}</ul>

                <div className='border-t flex p-3'>
                    <FontAwesomeIcon icon={faHouse} />
                </div>
            </div>
            <ul className='flex-1 px-3'>{children}</ul>
            <div className='border-t flex p-3'>
                <FontAwesomeIcon icon={faUserCircle} />
            </div>

        </nav>
    </aside>
  )
}


export function SidebarItem({icon, text, active, alert}){
    return(
        <li>
           {icon}
           <span>{text}</span> 
        </li>
    )
}
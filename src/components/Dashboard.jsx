import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = ({sidebarOpen}) => {
    const navigate = useNavigate();
    const handleGrind75 = () => {
        navigate('/grind75')
    }
    const handleNeetcode150 = () => {
        navigate('/neetcode150')
    }

  return (
    <div className='h-screen w-screen bg-slate-200'>
        <div className={`${sidebarOpen ? "ml-40" : "ml-16"}`}>
            <h1 className='text-blue-600 font-bold text-xl py-5 px-4'>Home</h1>
            <div>
                <ul className="mt-3 text-white font-bold">
                    <li className="mb-2 rounded hover:shadow hover:rose-quartz py-2 text-black" onClick={handleNeetcode150}>
                        <a href="" className="px-3 justify-center text-center">
                            <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faLayerGroup} />
                            Neetcode 150
                        </a>
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:rose-quartz py-2 text-black">
                        <a href="" className="px-3">
                            <FontAwesomeIcon className="inline-block w-6 h-6 mr-2 " icon={faLayerGroup}/>
                            Neetcode 75
                        </a>

                    </li>
                    <li className="mb-2 rounded hover:shadow hover:rose-quartz py-2 text-black">
                        <a href="" className="px-3">
                            <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faLayerGroup}/>
                            Blind 75
                        </a>
                    
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:rose-quartz py-2 text-black" onClick={handleGrind75}>
                        <a href="" className="px-3">
                            <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faLayerGroup}/>
                            Grind 75
                        </a>
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:rose-quartz py-2 text-black">
                        <a href="" className="px-3">
                            <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faLayerGroup}/>
                            Striver
                        </a>
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:rose-quartz py-2 text-black">
                        <a href="" className="px-3">
                            <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faLayerGroup}/>
                            SQL 50
                        </a>
                    </li>

                </ul>
            </div>
                {/* <button type='create-new' className='box-border h-64 w-64 p-4 bg-gray-300 rounded'>
                    <FontAwesomeIcon className='w-6 h-6 justify-center' icon={faPlus} />
                </button> */}
        </div>
    </div>
  )
}

export default Dashboard

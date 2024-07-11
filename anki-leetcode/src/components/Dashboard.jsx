import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { setNewUserDefaultInfo, db, checkExist } from  '../firestore'
import { auth } from '../firebase'

const handleClick = () => {console.log('xd')}


const Dashboard = ({sidebarOpen}) => {
  return (
    <div className='h-screen w-screen bg-slate-400'>
        <div className={`${sidebarOpen ? "ml-40" : "ml-16"}`}>
            <h1 className='text-blue-600 font-bold text-xl py-5 px-4'>Home</h1>
            <div className=''>
                <ul className="mt-3 text-white font-bold">
                    <li className="mb-2 rounded hover:shadow hover:bg-purple-500 py-2">
                        <a href="" className="px-3 justify-center text-center">
                            <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faLayerGroup} />
                            Neetcode 150
                        </a>

                    </li>
                    <li className="mb-2 rounded hover:shadow hover:bg-purple-500 py-2">
                        <a href="" className="px-3">
                            <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faLayerGroup}/>
                            Neetcode 75
                        </a>

                    </li>
                    <li className="mb-2 rounded hover:shadow hover:bg-purple-500 py-2">
                        <a href="" className="px-3">
                            <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faLayerGroup}/>
                            Blind 75
                        </a>
                    
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:bg-purple-500 py-2" onClick={checkExist(auth, 'Grind75') ?  handleClick : setNewUserDefaultInfo(auth, 'Grind75')}>
                        <a href="" className="px-3">
                            <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faLayerGroup}/>
                            Grind 75
                        </a>
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:bg-purple-500 py-2">
                        <a href="" className="px-3">
                            <FontAwesomeIcon className="inline-block w-6 h-6 mr-2" icon={faLayerGroup}/>
                            Striver
                        </a>
                    </li>
                    <li className="mb-2 rounded hover:shadow hover:bg-purple-500 py-2">
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

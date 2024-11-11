import React, { useState } from 'react'
import { doc, collection, getDocs, query, where, updateDoc } from "firebase/firestore";
import { auth } from '../firebase'
import { db } from '../firestore'
import Sidebar from './Sidebar'

const Neetcode150Card = () => {

  const colRef = collection(db, 'Neetcode150')
  const q = query(colRef, where('email', '==', auth.currentUser.email))

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [link, setLink] = useState('')
  const [name, setName] = useState('')
  const [diff, setDiff] = useState(3)

  const handleNext = () => {
    getDocs(q).then(function (querySnapshot) {
      querySnapshot.forEach(function (docSnapshot) {
        const d = docSnapshot.data().data;
        d[0]['Priority'] += diff * 2
        d.sort((a, b) => a.Priority - b.Priority)
        setName(d[0]['Name'])
        setLink(d[0]['Link'])

        const new_data = {
          email: auth.currentUser.email,
          data: d
        }

        updateDoc(doc(db, 'Neetcode150', docSnapshot.id), new_data)
      })
    })
  }

  function handleRadio(changeEvent) {
    const selectedOption = changeEvent.target.value

    if (selectedOption === 'veasy') {
      setDiff(5)
    }
    if (selectedOption === 'easy') {
      setDiff(4)
    }
    if (selectedOption === 'medium') {
      setDiff(3)
    }
    if (selectedOption === 'hard') {
      setDiff(2)
    }
    if (selectedOption === 'vhard') {
      setDiff(1)
    }
  }

  getDocs(q).then(function (querySnapshot) {
    querySnapshot.forEach(function (docSnapshot) {
      const d = docSnapshot.data().data;
      d.sort((a, b) => a.Priority - b.Priority)
      setName(d[0]['Name'])
      setLink(d[0]['Link'])

      const new_data = {
        email: auth.currentUser.email,
        data: d
      }

      updateDoc(doc(db, 'Neetcode150', docSnapshot.id), new_data)
    })
  })

  console.log(diff)
  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-96 bg-white rounded-lg shadow-lg p-8 transform transition-transform duration-500 hover:rotate-2 hover:shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold">Problem Name</h2>
            <p className="text-lg text-blue-600 underline">
              <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
            </p>
          </div>

          <div className="text-center my-4">
            <h3 className="text-md font-medium mb-2">Difficulty</h3>
            <div className="flex justify-center space-x-4">
              {['veasy', 'easy', 'medium', 'hard', 'vhard'].map((level, index) => (
                <label key={level} className="flex flex-col items-center cursor-pointer">
                  <input type="radio" name="diff" value={level} onChange={handleRadio} />
                  <span className="text-sm mt-1">{index + 1}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-full mt-8 py-2 bg-purple-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Neetcode150Card

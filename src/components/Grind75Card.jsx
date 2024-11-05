import React, {useState} from 'react'
import { doc, collection, getDocs, query, where, updateDoc } from "firebase/firestore";
import { auth } from '../firebase'
import { db } from '../firestore'

const Grind75Card = () => {

  const colRef = collection(db, 'Grind75')
  const q = query(colRef, where('email', '==', auth.currentUser.email))


  const [link, setLink] = useState('')
  const [name, setName] = useState('')
  const [diff, setDiff] = useState(3)

  const handleNext = () => {
    getDocs(q).then(function(querySnapshot) {
      querySnapshot.forEach(function(docSnapshot){
        const d = docSnapshot.data().data;
        d[0]['Priority'] += diff * 2
        d.sort((a, b) => a.Priority - b.Priority)
        setName(d[0]['Name'])
        setLink(d[0]['Link'])

        const new_data = {
          email: auth.currentUser.email,
          data: d
        }
        
        updateDoc(doc(db, 'Grind75', docSnapshot.id), new_data)
      })
    })
  }

  function handleRadio(changeEvent) {
    const selectedOption = changeEvent.target.value

    if(selectedOption === 'veasy'){
      setDiff(5)
    }
    if(selectedOption === 'easy'){
      setDiff(4)
    }
    if(selectedOption === 'medium'){
      setDiff(3)
    }
    if(selectedOption === 'hard'){
      setDiff(2)
    }
    if(selectedOption === 'vhard'){
      setDiff(1)
    }
  }

  getDocs(q).then(function(querySnapshot) {
    querySnapshot.forEach(function(docSnapshot){
      const d = docSnapshot.data().data;
      d.sort((a, b) => a.Priority - b.Priority)
      setName(d[0]['Name'])
      setLink(d[0]['Link'])

      const new_data = {
        email: auth.currentUser.email,
        data: d
      }
      
      updateDoc(doc(db, 'Grind75', docSnapshot.id), new_data)
    })
  })

  console.log(diff)
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-center w-screen h-screen py-5 bg-white text-4xl'>
        <div className='relative w-3/4 h-3/4 rounded-xl shadow-xl px-5 py-5'>
          <div className='text-center py-5'>
            <h1 class>Name: {name}</h1>
            <h1>Link: <a href={link} className='text-blue-500 underline underline-offset-1'> link </a></h1>
            <br />
            <br />
            <br />
            <br />
            <h1>Difficulty (select one)</h1>
            <div className="flex justify-center scale-150 text-2xl py-2">
              <div className='px-3'>
                <input type='radio' name='diff' value='veasy' id='veasy' onChange={handleRadio}/>
                <label htmlFor='veasy'> 1</label>
              </div>
              <div className='px-3'>
                <input type='radio' name='diff' value='easy' id='easy' onChange={handleRadio}/>
                <label htmlFor='easy'> 2</label>
              </div>
              <div className='px-3'>
                <input type='radio' name='diff' value='medium' id='medium' onChange={handleRadio}/>
                <label htmlFor='medium'> 3</label>

              </div>
              <div className='px-3'>
                <input type='radio' name='diff' value='hard' id='hard' onChange={handleRadio}/>
                <label htmlFor='hard'> 4</label>
              </div>
              <div className='px-3'>
                <input type='radio' name='diff'value='vhard' id='vhard'  onChange={handleRadio}/>
                <label htmlFor='vhard'> 5</label>
              </div>

            </div>
            <div className='relative center py-5'>
              <button onClick={handleNext} className='text-black font-medium rounded-lg rounded-xl shadow-l bg-purple-200 px-5'>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Grind75Card

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [bgColor, setbgColor] = useState('bg-[#212121]')

  return (
    <div className={`${bgColor} text-[aliceblue] h-[100vh] w-[100vw] flex justify-evenly items-end`}>
      <div className='flex bg-white w-[60%] justify-evenly py-5 mb-5 rounded-full' id='container'>
        <button className='w-[15%] bg-green-400 text-black text-2xl font-semibold p-4  rounded-full' onClick={() => setbgColor("bg-green-400")}>
          Green
        </button>
        <button className='w-[15%] bg-blue-400 text-black text-2xl font-semibold p-4  rounded-full ' onClick={() => setbgColor("bg-blue-400")}>
          Blue
        </button>
        <button className='w-[15%] bg-red-400 text-black text-2xl font-semibold p-4  rounded-full'  onClick={() => setbgColor("bg-red-400")}>
          Red
        </button>
        <button className='w-[15%] bg-purple-400 text-black text-2xl font-semibold p-4  rounded-full'  onClick={() => setbgColor("bg-purple-400")}>
          Purple
        </button>
        <button className='w-[15%] bg-teal-400 text-black text-2xl font-semibold p-4  rounded-full'  onClick={() => setbgColor("bg-teal-400")}>
          Teal
        </button>
      </div>
    </div>
  )




}

export default App

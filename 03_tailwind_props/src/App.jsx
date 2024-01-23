import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Hello there</h1>
      <Card username="Anand" btnText="Contact"/>
      <Card username="Hitesh" btnText="Visit"/>
      <Card username="Chaitanya"/>
    </>
  )
}

export default App

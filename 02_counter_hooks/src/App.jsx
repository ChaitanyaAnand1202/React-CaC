import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 10

  const [counter, setCounter] = useState(10)

  const increaseCounter = function(){
    // counter = counter + 1
    setCounter(prevCounter => Math.min(prevCounter + 1, 20))
    console.log(counter)
  }

  const decreaseCounter = function(){
    // counter = counter - 1
    setCounter(prevCounter => Math.max(prevCounter - 1, 0))
    console.log(counter);
  }
  return (
    <>
      <h1>Hello there !</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={increaseCounter} >Increase Value {counter}</button>
      <button onClick={decreaseCounter} >Decrease Value {counter}</button>
    </>
  )
}

export default App

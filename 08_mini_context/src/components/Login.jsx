import React, { useState, useContext } from 'react'
import UserContext from '../contexts/UserContext'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserContext)


  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }


  return (
    <div>
      <input 
        type="text"
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
      <input 
        type="text"
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      <button 
        onClick={handleSubmit}
        >LogIn</button>
    </div>
  )
}

export default Login
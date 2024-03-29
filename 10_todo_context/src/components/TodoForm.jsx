import React, {useState} from 'react'
import { useTodoContext } from '../contexts/TodoContext';

function TodoForm() {

  const { addTask }  = useTodoContext()
  const [msg, setMsg] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!msg) return
    
    addTask({
      TaskId: Date.now(),
      TaskMsg: msg,
      isCompleted: false
    })
    setMsg("")
  }

  return (
    <form className="flex"
    onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button type="submit"
      
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
import { useState, useEffect } from "react"
import { TodoContextProvider } from "./contexts/TodoContext"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask])
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.TaskId != id))
  }

  const editTask = (id, newTask) => {
    setTasks((prev) => prev.map((task) => task.TaskId === id ? newTask : task))
  }

  const toggleComplete = (id) => {
    setTasks((prev) => prev.map((task) => task.TaskId === id ? { ...task, isCompleted: !task.isCompleted } : task))
  }

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));
    if(localTasks && localTasks.length > 0)
      setTasks(localTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <TodoContextProvider value={{ tasks, addTask, removeTask, editTask, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {tasks.map((task)=> (
              <div key={task.TaskId} className="w-full">
                <TodoItem task={task}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App

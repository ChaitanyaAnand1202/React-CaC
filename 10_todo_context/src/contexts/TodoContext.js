import {createContext , useContext} from 'react'

const TodoContext = createContext({
  tasks: [],
  addTask: (msg) => {},
  editTask: (id, msg) => {},
  removeTask: (id) => {},
  toggleComplete: (id) => {}
});

export const TodoContextProvider = TodoContext.Provider

export const useTodoContext = () => {
  return useContext(TodoContext)
}
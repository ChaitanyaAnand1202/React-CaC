import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
  tasks: []
}

export const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTask = {
        id: nanoid(),
        taskMsg: action.payload
      }
      state.tasks.push(newTask)

    },
    removeTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload)
      console.log("Task deleted")
    }
  }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer
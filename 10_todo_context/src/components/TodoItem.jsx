import React from 'react'
import { useState } from 'react';
import { useTodoContext } from '../contexts/TodoContext';

function TodoItem({task}) {
  const {editTask, removeTask, toggleComplete} = useTodoContext();
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [taskMsg, settaskMsg] = useState(task.TaskMsg)

  const toggleCompleted = ()=> {
    toggleComplete(task.TaskId)
  }
  const editTodo = ()=>{
    const newTask = {
      TaskId: task.TaskId,
      TaskMsg: taskMsg,
      isCompleted: false
    }
    editTask(task.TaskId, newTask)
    setIsTodoEditable((prev) => !prev)
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black 
      ${task.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={task.isCompleted}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
          } ${task.isCompleted ? "line-through" : ""}`}
        value={taskMsg}
        onChange={(e) => settaskMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (task.isCompleted) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={task.isCompleted}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => removeTask(task.TaskId)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;

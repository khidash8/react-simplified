import { useState } from "react"
import "../styles.css"
import { TodoItem } from "./TodoItem"

export const Todo = () => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    if (input === "") return

    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: input, completed: false },
    ])
    setInput("")
  }

  const toggleCompleted = (id, completed) => {
    setTodos((current) =>
      current.map((item) => (item.id === id ? { ...item, completed } : item))
    )
  }

  const handleDelete = (id) => {
    setTodos((current) => current.filter((item) => item.id !== id))
  }

  return (
    <>
      <ul id="list">
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            handleDelete={handleDelete}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add Todo</button>
      </div>
    </>
  )
}

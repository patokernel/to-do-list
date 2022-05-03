import { useState } from "react"
import '../stylesheets/TaskForm.css'
import { v4 as uuidv4 } from 'uuid'

const TaskForm = ({ newTaskReady }) => {

  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    newTaskReady(newTask)
    setInput('')
  }

  return (
    <form
      className="task-form"
      onSubmit={handleSubmit}
    >
      <input
        className="task-input"
        type="text"
        placeholder="Escribe una tarea"
        name="text"
        onChange={handleChange}
        autoFocus
        autoComplete="off"
      />
      <button className="task-button">
        Agregar
      </button>
    </form>
  )
}

export default TaskForm
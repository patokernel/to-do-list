import { Fragment, useEffect, useState } from "react"
import TaskForm from "./TaskForm"
import Task from "./Task"
import '../stylesheets/TaskList.css'

const TaskList = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (savedTasks) {
      setTasks(savedTasks)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (newTask) => {
    if (newTask.text.length > 0) {
      setTasks([newTask, ...tasks])
    }
  }

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }

  const completeTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <Fragment>
      <TaskForm newTaskReady={addTask} />
      <div className="task-list-container">
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          )
        }
      </div>
    </Fragment>
  )
}

export default TaskList
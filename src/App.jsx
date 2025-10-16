
import Taskform from "./Components/Taskform"
import TaskList from "./Components/TaskList"
import Progresstracker from "./Components/Progresstracker"
import { useEffect, useState } from "react"

export default function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  return (
    <>
      <h1>Task Manager</h1>
      <p>Our friendly task manager helps you organize your tasks efficiently.</p>
      <Taskform addTask={addTask} />
      <TaskList />
      <Progresstracker />
      <button>Clear All Tasks</button>
    </>
  )
}



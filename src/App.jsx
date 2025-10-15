import Taskform from "./Components/Taskform"
import TaskList from "./Components/TaskList"
import Progresstracker from "./Components/Progresstracker"
function App() {
  

  return (
    <>
      <h1>Task Manager</h1>
      <p>Our friendly task manager helps you organize your tasks efficiently.</p>
      <Taskform />
      <TaskList />
      <Progresstracker />
      <button>Clear All Tasks</button>
    </>
  )
}

export default App

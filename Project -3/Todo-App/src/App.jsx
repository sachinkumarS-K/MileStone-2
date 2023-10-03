import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoAdd from './Components/TodoAdd';
import Cards from './Components/Cards';

function App() {
  const [tasks , setTasks] = useState([])

  return (
    <div className='wrapper'>
      <TodoAdd setTasks = {setTasks}/>
      <Cards tasks = {tasks} setTasks = {setTasks}/>
     <ToastContainer/>
    </div>
  )
}

export default App

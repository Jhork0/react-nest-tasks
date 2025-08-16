import { useTask } from '../contexts/useTask'
import type { Task } from '../interfaces/tasks.interface'
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
interface Props {
    task: Task
}

const TaskItem = ({task}:Props) => {
  const {deleteTask, updateTask} =useTask()
  return (
    <div className='bg-gray-600 p-2 my-2 flex justify-between hover:bg-gray-900 hover:cursor-pointer' key={task._id}>
           <h1>
          <span>Titulo: {task.title} estado: {task.done ? 'done' : 'undone'}</span>
          {task.done ? <ImCheckboxChecked className='bg-emerald-600'/> : <ImCheckboxUnchecked  className='bg-emerald-600'/>}
          </h1>
            <div className='flex gap-x-2'>
              <button className='hover:cursor-pointer' onClick={async ()=>{
                if(!window.confirm('Estas seguro de eliminar?')) return
                await deleteTask(task._id)}}> <FaRegTrashAlt/></button>  
               <button className='hover:cursor-pointer' onClick={async ()=>{
                if(!window.confirm('Estas seguro de cambiar el estado de esta tarea?')) return
                await updateTask(task._id, {done: !task.done})  }} > <FaEdit></FaEdit></button>
            </div>
    </div>
  )
}

export default TaskItem

import { useState, type ChangeEvent } from "react"
import { useTask } from "../contexts/useTask"

const TaskFrom = () => {
    const [task,setTask] =useState({
    title: "",
    description: "",
    done: false
})
const  { createTask} = useTask()


const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) =>{
    setTask({...task, [e.target.name]: e.target.value})
    
}

 const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) =>{
    e.preventDefault()
    createTask(task)
    
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        name="title" 
        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" 
        placeholder="Escribe un titulo"
        onChange={handleChange}
        />
        <textarea name="description" 
        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" 
        placeholder="Escribe una descripcion" 
        rows={3} 
        onChange={handleChange}
        id="">

        </textarea>

            <label htmlFor="" className="inline-flex items-center gap-x-2">
                <input type="checkbox" className="h-5 w-5 text-indigo-400" onChange={()=>{setTask({...task, done: !task.done})}}  />
                <span>Done</span>
            </label>

        <button className="bg-indigo-800 px-3 block py-2 w-full text-indigo-200 hover:bg-indigo-500 rounded-lg">
            Save
        </button>
      </form>
    </div>
  )
}

export default TaskFrom

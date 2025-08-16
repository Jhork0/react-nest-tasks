import React, { useState } from "react";
import { TaskContext } from "./TaskContext";
import { createTaskRequest, deleteTaskRequest, getTasksRequest , updateTaskRequest} from "../apis/tasks";
import { useEffect } from "react";
import type { CreateTask, Task, UpdateTask } from "../interfaces/tasks.interface";
 

interface Props{
    children: React.ReactNode
}

export const TaskProvider : React.FC<Props> = ({children})=>{

    const [tasks,setTasks] = useState<Task[]>([])
      useEffect(() => {
        getTasksRequest()
      .then((resp) => resp.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error))
  }, []) 
  
    const createTask = async (task: CreateTask) =>{
        console.log(task)
        const res = await createTaskRequest(task)
        const data = await res.json()

        setTasks([... tasks, data])
    }

     const deleteTask = async (id: string) =>{
        
        const res = await deleteTaskRequest(id)
        console.log(res)
        if(res.status === 200){
            setTasks(tasks.filter(tasks => tasks._id !== id))
        }
    }
    

    const updateTask = async (id: string, task: UpdateTask) => {
      try {
     const res = await updateTaskRequest(id, task)
      if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()
        setTasks(tasks.map((taskparam) => 
          taskparam._id === id ? { ...taskparam, ...data } : taskparam
        ))
        } catch (error) {
    console.error('Failed to update task:', error)  }
}

    return(
        <TaskContext.Provider value={ { tasks, createTask , deleteTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    )
}
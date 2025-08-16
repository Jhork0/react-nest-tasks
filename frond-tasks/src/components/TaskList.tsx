import { useEffect, useState } from "react"
import { getTasksRequest } from "../apis/tasks" 
import type { Task } from "../interfaces/tasks.interface"
import TaskItem from "./TaskItem"

const TaskList = () => {

  const [task, setTask] = useState<Task[]>([]) 
  useEffect(()=>{
    getTasksRequest().then((resp) => resp.json())
    .then((data) => { setTask(data)})
  })
  return (
    <div>
    {
     task.map((task) => (
          <TaskItem task={task} key={task._id}/>
     ))}
    </div>
  )
}

export default TaskList

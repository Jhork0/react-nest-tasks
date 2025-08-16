
import TaskItem from "./TaskItem"
import { useTask } from "../contexts/useTask"

const TaskList = () => {
  const { tasks }= useTask()


  return (
    <div>
      {tasks.map((tasks) => (
        <TaskItem task={tasks} key={tasks._id}/>
      ))}
    </div>
  )
}

export default TaskList
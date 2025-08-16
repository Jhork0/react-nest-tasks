import type { Task } from '../interfaces/tasks.interface'

interface Props {
    task: Task
}

const TaskItem = ({task}:Props) => {
  return (
    <div className='bg-gray-600 p-2 my-2 flex justify-between hover:bg-gray-900 hover:cursor-pointer'>
            <h1>
                {
                  `Titulo: ${task.title}`
                }
            </h1>
            <p>{`Descripcion: ${task.description}`}</p>
    </div>
  )
}

export default TaskItem

import { createContext } from "react";
import type { CreateTask, Task, UpdateTask } from "../interfaces/tasks.interface";

interface TaskContextI{
    tasks: Task[]
    createTask: (task:CreateTask) => Promise<void>
    deleteTask: (id:string) => Promise<void>
    updateTask: (id:string, task: UpdateTask) => Promise<void>
}

export const TaskContext = createContext<TaskContextI>({
    tasks: [],
    createTask: async () => {},
    deleteTask: async () => {},
    updateTask: async () => {}

})


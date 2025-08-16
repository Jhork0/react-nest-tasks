const api = 'http://localhost:3000/api'
import type { CreateTask, UpdateTask } from "../interfaces/tasks.interface"

export const createTaskRequest = async (task: CreateTask) => {
  try {
    const response = await fetch(`${api}/tasks`, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response
  } catch (error) {
    console.error('Network error:', error)
    throw error
  }
}

export const getTasksRequest = async () =>
  await fetch(`${api}/tasks`, {
    method: 'GET',
  })

export const deleteTaskRequest = async (id: string) =>
  await fetch(`${api}/tasks/${id}`, {
    method: 'DELETE',
  })


  export const updateTaskRequest = async (id: string, task: UpdateTask) =>
  await fetch(`${api}/tasks/${id}`, {
    method: 'PUT',
    body: JSON.stringify(task),
    headers: {
        'Content-Type': 'application/json'
      }
  })
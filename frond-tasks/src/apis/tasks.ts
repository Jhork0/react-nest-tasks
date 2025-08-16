const api = 'http://localhost:3000/api'
import type { CreateTask } from "../interfaces/tasks.interface"

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
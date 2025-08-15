const api = 'http://localhost:3000/api'

interface Task {
    title: string;
    description?: string;
    done?: boolean;
}

export const createTaskRequest = (task: Task) => 
    fetch(`${api}/tasks`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json '
        }
    })

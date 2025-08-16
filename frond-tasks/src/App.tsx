import TaskFrom from './components/TaskFrom'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white p-4 flex items-center justify-center">
      <div className="bg-gray-950 p-4 w-2/5">
      <h1 className="text-3xl font-bold text-center block my-2"> Task App</h1>
        <TaskFrom/>
        <TaskList/>
        

      </div>
     
    </div>
  )
}

export default App

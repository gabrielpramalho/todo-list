import { Header } from './components/Header'

import styles from './App.module.css'
import { NewTask } from './components/NewTask'
import { TaskGroup } from './components/TaskGroup'
import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

export interface TaskType{
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([])

  function createTask(content: string){
    const newTaskObject:TaskType = {
      id: uuidv4(),
      content: content,
      isCompleted: false
    }

    setTasks([...tasks, newTaskObject])
  }

  function deleteTask(id:string){
    const newTasksWithoutDelete = tasks.filter( task => task.id !== id )

    setTasks(newTasksWithoutDelete)
  }

  function completedTask(id:string){
    const newTaskWithCompleted = tasks.map( task =>{
        if(task.id == id){
          task.isCompleted = !task.isCompleted
        }

        return task
    } )

    setTasks(newTaskWithCompleted)
  }

  return (
    <>
      <Header />

      <main className={styles.wrapper}>
          <NewTask onCreateTask={createTask}/>

           <TaskGroup tasks={tasks} onDeleteTask={deleteTask} onCompletedTask={completedTask}/>
      </main>
    </>
  )
}

export default App

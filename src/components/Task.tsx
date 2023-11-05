
import { TaskType } from '../App'
import styles from './Task.module.css'
import { Trash } from '@phosphor-icons/react'

interface TaskProps{
    task: TaskType;
    onDeleteTask: (id:string) => void;
    onCompletedTask: (id:string) => void;
}

export function Task({task, onDeleteTask, onCompletedTask}:TaskProps){

    function handleDeleteTask(){
        onDeleteTask(task.id)
    }

    function handleCompletedTask(){
        onCompletedTask(task.id)
    }

    const isCompleted = task.isCompleted ? styles.completed : ""



    return(
        <li className={`${styles.task} ${isCompleted}`}>
            <input 
                type="checkbox" 
                onChange={handleCompletedTask}     
            />

            <div className={styles.content}>
                <p>{task.content}</p>    
            </div>

            <Trash 
                size={24} 
                onClick={handleDeleteTask}
            />
        </li>
    )
}
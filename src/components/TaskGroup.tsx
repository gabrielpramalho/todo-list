import styles from './TaskGroup.module.css'
import { ClipboardText } from '@phosphor-icons/react'
import { Task } from './Task';
import { TaskType } from '../App';


interface TaskGroupProps{
    tasks: TaskType[]
    onDeleteTask: (id:string) => void
    onCompletedTask: (id:string) => void
}

export function TaskGroup({tasks, onDeleteTask, onCompletedTask}:TaskGroupProps){

    const hasTasks = tasks.length > 0;

    const numTasksCreated = tasks.length

    const numTasksCompleted = tasks.filter(tasks => tasks.isCompleted).length

    function deleteTask(id:string){
        onDeleteTask(id)
    }

    return(
        <div className={styles.taskGroup}>
            <header className={styles.taskGroupHeader}>
                <div>
                    <strong className={styles.tasksDone}>Tarefas criadas</strong>
                    <span>{numTasksCreated}</span>
                </div>
                <div>
                    <strong>Concluídas</strong>
                    <span>{numTasksCompleted} de {numTasksCreated}</span>
                </div>
            </header>

        { !hasTasks && 
            <div className={styles.taskEmpty}>
                <ClipboardText size={56} />

                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        }

        { hasTasks && 
            <ul className={styles.tasksList}>
                {
                    tasks.map(task => <Task key={task.id} task={task} onDeleteTask={deleteTask} onCompletedTask={onCompletedTask} />)
                }
            </ul>
        }

        </div>
    )
}
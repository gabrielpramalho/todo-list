import { PlusCircle } from '@phosphor-icons/react'
import styles from './NewTask.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'

interface NewTaskProps{
    onCreateTask: (content: string) => void;
}


export function NewTask({onCreateTask}: NewTaskProps){

    const [newTaksText, setNewTaksText] = useState('')

    function handleNewTaksText(e:ChangeEvent<HTMLInputElement>){
        setNewTaksText(e.target.value)
    }

    function handleCreateNewTask(e:FormEvent){
        e.preventDefault()

        onCreateTask(newTaksText)

        setNewTaksText('')
    }


    return(
        <form onSubmit={handleCreateNewTask} className={styles.newTask}>
            <input 
                type="text" 
                name='content' 
                placeholder='Adicione uma nova tarefa' 
                onChange={handleNewTaksText}
                value={newTaksText}
            />

            <button type="submit">
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    )
}
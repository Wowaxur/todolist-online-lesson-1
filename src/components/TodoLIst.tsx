import React, {useState, KeyboardEvent} from "react";
import {Button} from "./Button";
import {FilterValuesType} from "../App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title?: string
    tasks: Array<TaskType>
    FilterTasks: FilterValuesType

    changeTasksStatus: (taskId: string, newIsDoneValue: boolean) => void
    addTask: (title: string) => void
    removeTask?: (taskID: string) => void
    changeTodoListFilter: (filterValue: FilterValuesType) => void

}


export const TodoList = ({
                             title,
                             tasks,
                             removeTask,
                             changeTodoListFilter,
                             addTask,
                             changeTasksStatus,
                             FilterTasks,
                         }: TodoListPropsType) => {
    const [TaskTitle, setTaskTitle] = useState('')

    const [inputError, setInputError] = useState<string | null>(null)

    const listItems: Array<JSX.Element> =
        tasks.map((task: TaskType) => {
            return (
                <li key={task.id} className={task.isDone ? 'task-done' : 'task'}>
                    <input type="checkbox"
                           onChange={(e) => changeTasksStatus(task.id, e.currentTarget.checked)}
                           checked={task.isDone}
                    />

                    <span>{task.title}</span>
                    <Button
                        onClickHandler={() => {
                            removeTask && removeTask(task.id)
                        }} title='X'/>
                </li>
            )

        })
    const tasksList: JSX.Element = tasks.length !== 0
        ? <ul>
            {listItems}
        </ul>
        : <span> TodoList is empty now</span>

    const addTaskOnClickHandler = () => {
        const trimmedTaskTitle = TaskTitle.trim()
        if (trimmedTaskTitle !== '') {
            addTask(TaskTitle.trim())
        } else {
            setInputError('Title is Required')
        }
        setTaskTitle('')
    }

    const addTaskKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        inputError && setInputError(null)
        if (e.key === 'Enter' && TaskTitle) {
            addTaskOnClickHandler()
        }
    }

    return (
        <div className='todoList'>
            <h3 className='Title'>{title}</h3>
            <div>
                <input value={TaskTitle}
                       onChange={(e) => {
                           setTaskTitle(e.currentTarget.value)
                       }}
                       onKeyDown={addTaskKeyDownHandler}
                       className={inputError ? 'input-error' : ''}
                />
                <Button title={'+'}
                        onClickHandler={addTaskOnClickHandler}
                        isDisabled={!TaskTitle}
                />
                {inputError && <div className={"error-message"}>{inputError}</div>}
            </div>
            {tasksList}
            <div>
                <Button
                    classes={FilterTasks === 'all' ? 'btn-active' : 'btn'}
                    onClickHandler={() => changeTodoListFilter('all')}
                    title='All'/>
                <Button
                    classes={FilterTasks === 'active' ? 'btn-active' : 'btn'}
                    onClickHandler={() => changeTodoListFilter('active')}
                    title='Active'/>
                <Button
                    classes={FilterTasks === 'completed' ? 'btn-active' : 'btn'}
                    onClickHandler={() => changeTodoListFilter('completed')}
                    title='Completed'/>
            </div>
        </div>
    );
}

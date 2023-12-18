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

    addTask: (title: string) => void
    removeTask?: (taskID: string) => void
    changeTodoListFilter: (filterValue: FilterValuesType) => void

}

//3 props:
export const TodoList = ({
                             title,
                             tasks,
                             removeTask,
                             changeTodoListFilter,
                             addTask,
                         }: TodoListPropsType) => {
    const [TaskTitle, setTaskTitle]= useState('')


    const listItems: Array<JSX.Element> = tasks.map((task: TaskType) => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <Button onClickHandler={() => {
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

   // const onChangeSetTaskTitle =

    const addTaskOnClickHandler = ()=>{
        const trimmedTaskTitle = TaskTitle.trim()
        if (trimmedTaskTitle){
        addTask(TaskTitle)
        }else {
            alert('пробелы!')
        }

        setTaskTitle('')

    }
    const addTaskKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) =>
    {if(e.key ==='Enter' && TaskTitle) {
        addTaskOnClickHandler()
        }}
    return (
        <div className='todoList'>
            <h3 className='Title'>{title}</h3>
            <div>
                <input value={TaskTitle}
                    onChange={(e)=>{
                    setTaskTitle(e.currentTarget.value)
                    }}
                       onKeyDown={addTaskKeyDownHandler}

                />
                <Button title={'+'}
                        onClickHandler={addTaskOnClickHandler}
                        isDisabled={!TaskTitle}
                />
            </div>
            {tasksList}
            <div>
                <Button onClickHandler={() => changeTodoListFilter('all')} title='All'/>
                <Button onClickHandler={() => changeTodoListFilter('active')} title='Active'/>
                <Button onClickHandler={() => changeTodoListFilter('completed')} title='Completed'/>
            </div>
        </div>
    );
}

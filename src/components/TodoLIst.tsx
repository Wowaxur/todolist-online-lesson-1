import React, {useState} from "react";
import {Button} from "./Button";
import {FilterValuesType} from "../App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title?: string
    tasks: Array<TaskType>
    removeTask?: (taskID: number) => void
    changeTodoListFilter: (filterValue: FilterValuesType) => void
}

//3 props:
export const TodoList = ({title, tasks, removeTask, changeTodoListFilter}: TodoListPropsType) => {


/*    const listItems: Array<JSX.Element> = []
    for (let i = 0; i < tasks.length; i++) {
        const listItem = <li key={tasks[i].id}>
            <input type="checkbox" checked={tasks[i].isDone}/>
            <span>{tasks[i].title}
                <button onClick={() => removeTask && removeTask(tasks[i].id)}>x</button>
            </span>
        </li>
        listItems.push(listItem)
    }*/

    const listItems: Array<JSX.Element> = tasks.map((task: TaskType)=>{
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <Button onClickHandler={()=>{removeTask && removeTask(task.id)}} title='X'/>
            </li>
        )

    })
    const tasksList: JSX.Element = tasks.length !== 0
        ? <>
            {listItems}</>
        : <span> TodoList is empty now</span>


    return (
        <div className='todoList'>
            <h3 className='Title'>{title}</h3>
            <div>
                <input/>
                <Button title='+'/>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <Button onClickHandler={()=>changeTodoListFilter('all')} title='All'/>
                <Button onClickHandler={()=>changeTodoListFilter('active')} title='Active'/>
                <Button  onClickHandler={()=>changeTodoListFilter('completed')} title='Completed'/>
            </div>
        </div>
    );
}

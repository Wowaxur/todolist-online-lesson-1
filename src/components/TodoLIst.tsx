import React from "react";
import {Button} from "./Button";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title?: string
    tasks: Array<TaskType>
    removeTask?: (taskID: number) => void

}

//3 props:
export const TodoList = ({title, tasks, removeTask}: TodoListPropsType) => {
    const listItems: Array<JSX.Element> = []
    for (let i = 0; i < tasks.length; i++) {
        const listItem = <li key={tasks[i].id}>
            <input type="checkbox" checked={tasks[i].isDone}/>
            <span>{tasks[i].title}
                <button onClick={() => removeTask && removeTask(tasks[i].id)}>x</button>
            </span>
        </li>
        listItems.push(listItem)
    }


    return (
        <div className='todoList'>
            <h3 className='Title'>{title}</h3>
            <div>
                <input/>
                <Button title='+'/>
            </div>
            <ul>
                {listItems}
            </ul>
            <div>
                <Button title='All'/>
                <Button title='Active'/>
                <Button title='Completed'/>
            </div>
        </div>
    );
}

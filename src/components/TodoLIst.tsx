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

}

                            //3 props:
export const TodoList = ( {title, tasks}: TodoListPropsType) => {
    //1.
    //const title = props.title
    //const tasks = props.tasks

    //2.
    //const {title, tasks} = props

    //3.


    const listItems: Array<JSX.Element> = []
    for (let i = 0; i < tasks.length; i++) {
        const listItem = <li>
            <input type="checkbox" checked={tasks[i].isDone}/>
            <span>{tasks[i].title}
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

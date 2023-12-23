import React, {useRef} from "react";
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
export const TodoLIstTwoUseRef = ({
                             title,
                             tasks,
                             removeTask,
                             changeTodoListFilter,
                             addTask,
                         }: TodoListPropsType) => {


    const taskTitleInput = useRef<HTMLInputElement>(null)


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
        ? <>
            {listItems}
        </>
        : <span> TodoList is empty now</span>


    const addTaskOnClickHandler = () => {
        if(taskTitleInput.current){
            const newTaskTitle = taskTitleInput.current.value
            addTask(newTaskTitle)
            taskTitleInput.current.value = ''
        }
    }




    return (
        <div className='todoList'>
            <h3 className='Title'>{title}</h3>
            <div className={"todoLister"}>
                <input ref={taskTitleInput}
                />
                <Button onClickHandler={addTaskOnClickHandler} title={'+'}/>
            </div>
            <ul>
                {tasksList}
            </ul>
            <div>
                <Button onClickHandler={() => changeTodoListFilter('all')} title='All'/>
                <Button onClickHandler={() => changeTodoListFilter('active')} title='Active'/>
                <Button onClickHandler={() => changeTodoListFilter('completed')} title='Completed'/>
            </div>
        </div>
    );
}

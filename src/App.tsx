import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./components/TodoLIst";
import {v1} from "uuid";
import {TodoLIstTwoUseRef} from "./components/TodoLIstTwoUseRef";


export type FilterValuesType = 'all' | 'active' | 'completed'

// C - +
// R - + (filter, sort, search, pagination, view-mode)
// U -
// D - +
function App() {
    const toDoListTitle = 'What to Learn'
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'React Native', isDone: false},
    ])

    const [FilterTasks, setFilterTasks] = useState<FilterValuesType>('all')

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)

    }

    const getFilteredTasks = (tasks: Array<TaskType>, FilterTasks: FilterValuesType): Array<TaskType> => {
        return FilterTasks === 'active'
            ? tasks.filter(t => !t.isDone)
            : FilterTasks === 'completed'
                ? tasks.filter(t => t.isDone)
                : tasks
    }

    const filteredTasks = getFilteredTasks(tasks, FilterTasks)

    const changeTodoListFilter = (filterValue: FilterValuesType) => {
        setFilterTasks(filterValue)
    }

    const changeTasksStatus = (taskId: string, newIsDoneValue: boolean) => {
        const nextState: Array<TaskType> = tasks.map(t => t.id === taskId ? {...t, isDone: newIsDoneValue} : t)
        setTasks(nextState)
    }

    return (
        <div className="App">
            {/*<TodoLIstTwoUseRef*/}
            {/*    tasks={filteredTasks}*/}
            {/*    title={toDoListTitle}*/}
            {/*    removeTask={removeTask}*/}
            {/*    changeTodoListFilter={changeTodoListFilter}*/}
            {/*    addTask={addTask}*/}
            {/*/>*/}
            <TodoList
                FilterTasks={FilterTasks}
                tasks={filteredTasks}
                title={toDoListTitle}
                addTask={addTask}
                removeTask={removeTask}
                changeTasksStatus={changeTasksStatus}
                changeTodoListFilter={changeTodoListFilter}
            />
            {/* <TodoJson/>*/}


        </div>
    )
}

export default App;

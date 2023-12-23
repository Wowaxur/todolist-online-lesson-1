import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./components/TodoLIst";
import {v1} from "uuid";
import {TodoLIstTwoUseRef} from "./components/TodoLIstTwoUseRef";
import TodoJson from "./TodoJson/TodoJson";

export type FilterValuesType = 'all' | 'active' | 'completed'


function App() {
    const toDoListTitle = 'What to Learn'
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'React Native', isDone: false},
    ])


    function removeTask(id: string) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks)

    }

    const [FilterTasks, setFilterTasks] = useState<FilterValuesType>('all')

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

    return (
        <div className="App">
            <TodoLIstTwoUseRef
                tasks={filteredTasks}
                title={toDoListTitle}
                removeTask={removeTask}
                changeTodoListFilter={changeTodoListFilter}
                addTask={addTask}
            />
           {/* <TodoList
                tasks={filteredTasks}
                title={toDoListTitle}
                removeTask={removeTask}
                changeTodoListFilter={changeTodoListFilter}
                addTask={addTask}
            />
            <TodoJson
            />*/}

        </div>
    )
}

export default App;

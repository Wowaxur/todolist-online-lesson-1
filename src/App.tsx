import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./components/TodoLIst";

export type FilterValuesType = 'all' | 'active'| 'completed'


function App() {
    const toDoListTitle = 'What to Learn'
    /*   const [tasks, setTasks] =useState( [

           {id:1,title:'HTML&CSS',isDone:true},
           { id:2,title:'JS',isDone:true},
           { id:3,title:'React',isDone:false},
           { id:4,title:'React Native',isDone:false},
   ])*/
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'React Native', isDone: false},
    ])

    /* const tasks2:TaskType[] = [
         {id:4,title:'Disturbed',isDone:true},
         { id:5,title:'Hollywood Undead',isDone:true},
         { id:6,title:'Red',isDone:true},
     ]*/
    function removeTask(id: number) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    const [FilterTasks, setFilterTasks] = useState<FilterValuesType>('all')

    const getFilteredTasks = (tasks:Array<TaskType>, FilterTasks: FilterValuesType): Array<TaskType> => {
         return FilterTasks === 'active'
            ? tasks.filter(t => t.isDone === false)
            :FilterTasks === 'completed'
                ? tasks.filter(t=> t.isDone == true)
                : tasks
    }
    const filteredTasks = getFilteredTasks(tasks, FilterTasks)

    const changeTodoListFilter = (filterValue: FilterValuesType) => {
        setFilterTasks(filterValue)
    }

    return (
        <div className="App">
            <TodoList
                tasks={filteredTasks}
                title={toDoListTitle}
                removeTask={removeTask}
                changeTodoListFilter={changeTodoListFilter}
            />


        </div>
    )
}


export default App;

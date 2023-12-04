import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./components/TodoLIst";



function App() {
    const tasks1:Array<TaskType> = [

        {id:1,title:'HTML&CSS',isDone:true},
        { id:2,title:'JS',isDone:true},
        { id:3,title:'React',isDone:false},
        { id:4,title:'React Native',isDone:false},
]
    const tasks2:TaskType[] = [
        {id:4,title:'Disturbed',isDone:true},
        { id:5,title:'Hollywood Undead',isDone:true},
        { id:6,title:'Red',isDone:true},
        { id:7,title:'Skillet',isDone:true},
        { id:8,title:'Three Days Grace',isDone:true},
    ]
    return (
        <div className="App">
            <TodoList tasks={tasks1} title={'What to wear'}/>
            <TodoList tasks={tasks2} title={'Songs'}/>


        </div>
    );
}


export default App;

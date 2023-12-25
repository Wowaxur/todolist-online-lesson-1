import React, {useEffect, useState} from 'react';
//import s from './TodoJson.module.css'
type TodosType = {
    userId: number
    id: number
    title: string
    completed: boolean

}

const TodoJson = () => {
        const [todos, setTodos] = useState<TodosType[]>([])
        const fetchFoo = () => {
            fetch('https://jsonplaceholder.typicode.com/todos/')
                .then(response => response.json())
                .then(json => setTodos(json))
        }

        useEffect(() => {
            fetchFoo()
        }, []);

        const ToggleHandler = () => {

        }

        const ShowHandler = () => {
            fetchFoo()
        }
        const HideHandler = () => {
            setTodos([])
        }
    return (
        <div className={"TodoJsonWrapper"}>
            <div className={"ToggleButton"}>
                {/*<button onClick={ToggleHandler}>Toggle</button>*/}
                <button onClick={ShowHandler}>Show</button>
                <button onClick={HideHandler}>Hide</button>
            </div>
            <ul>
                {todos.map(el=>{
                    return(
                        <li>
                            <span>{el.id} </span>
                            <span>{el.title} </span>
                            <input type={"checkbox"} checked={el.completed}/>

                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default TodoJson;
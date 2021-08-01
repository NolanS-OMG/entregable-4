import axios from 'axios';
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';
import { useEffect, useState } from 'react';
import './index.css';

const TodoContainer = () => {

    const baseURL = 'https://todos-go.herokuapp.com/api/todos';

    const getTasks = () => {
        const promise = axios.get(`${baseURL}`);
        return promise;
    }

    const [items, setItems] = useState(getTasks());

    const [data, setData] = useState();

    const updateTasks = () => {
        setItems(getTasks());
    }

    useEffect( () => {
        items.then(res => {
            setData(res.data.todos);
        });
    }, [items] )

    return (
        <div className = "todo-container">
            <TodoItem updateFunc = {updateTasks}/>
            <CreateTodo data = {data} updateFunc = {updateTasks}/>
        </div>
    )
}

export default TodoContainer;
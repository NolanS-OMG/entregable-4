import { useEffect, useState } from "react";
import axios from 'axios';

const Item = (props) => {
    const baseURL = 'https://todos-go.herokuapp.com/api/todos';
    const getItemBool = () => {
        const promise = axios.get(`${baseURL}`);
        promise.then(res => {
            res.data.todos.forEach(element => {
                if (element.id === props.id) {
                    setCompleteBool(element.isCompleted);
                }
            });
        });
    }
    const deleteItem = async () => {
        const promise = await axios({
            method: 'DELETE',
            baseURL: `${baseURL}`,
            url: `/${props.id}`
        })
    }
    const changeCompleteTask = async () => {
        const promise = await axios({
            method: 'PUT',
            baseURL: `${baseURL}`,
            url: `/${props.id}`,
            data: {
                id: props.id,
                task: props.task,
                student: props.name,
                isCompleted: completeBool,
                version: 0
                }
        })
    }
    const [completeText, setCompleteText] = useState('');
    const [completeBool, setCompleteBool] = useState('');
    const [completeButtonStyle, setCompleteButtonStyle] = useState();
    useEffect( () => {
        if (typeof completeBool === typeof true) {
            if (completeBool) {
                setCompleteText('COMPLETADA');
                setCompleteButtonStyle({
                    color: 'white',
                    backgroundColor: 'rgb(0, 204, 44)',
                    border: 'solid 1px rgb(0, 95, 51)'
                })
            } else {
                setCompleteText('INCOMPLETA');
                setCompleteButtonStyle({
                    color: 'black',
                    backgroundColor: 'rgb(255, 251, 31)',
                    border: 'solid 1px rgb(155, 152, 0)'
                })
            }
        } else {
            getItemBool();
        }
        changeCompleteTask();
    }, [completeBool] )
    return(
        <li className = 'item'>
            <span className = 'item-name'><b>Nombre: </b>{props.name}</span>
            <span className = 'item-task'><b>Tarea: </b>{props.task}</span>
            <div>
                <button className='delete-button' onClick = {() => {
                    deleteItem();
                    props.updateFunc();
                }}>
                    <span>ELIMINAR</span>
                </button>
                <button className='complete-button' onClick = {() => {
                    setCompleteBool(!completeBool);
                }} style={completeButtonStyle}>
                    <span>{completeText}</span>
                </button>
            </div>
        </li>
    )
}

export default Item;
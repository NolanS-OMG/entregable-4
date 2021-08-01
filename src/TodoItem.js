import {useForm} from 'react-hook-form';
import axios from 'axios';
import './index.css';

const TodoItem = ({updateFunc}) => {

    const {register, handleSubmit} = useForm();

    const baseURL = 'https://todos-go.herokuapp.com/api/todos';

    const onSubmit = (values) => {
        const promise = axios({
            method: 'POST',
            url: `${baseURL}`,
            data: values
        })

        promise.then(res => {
            updateFunc();
        })
    }

    return (
        <div className='todo-item'>
            <h4>Ingrese una nueva tarea</h4>
            <form onSubmit = {handleSubmit( onSubmit ) }>
                <div className='inputs-container'>
                    <div className='user-input-container'>
                        <label><b>Usuario: </b></label>
                        <input {...register('student', {
                            required: true
                        } ) }/>
                    </div>
                    <div className='task-input-container'>
                        <label><b>Tarea: </b></label>
                        <input {...register('task', {
                            required: true
                        } ) }/>
                    </div>
                </div>
                <button>AGREGAR</button>
            </form>
        </div>
    )
}

export default TodoItem;
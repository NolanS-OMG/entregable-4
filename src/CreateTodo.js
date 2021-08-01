import './index.css';
import Item from './Item';

const CreateTodo = ({data, updateFunc}) => {
    const showItems = data ? data.map((value) => {return(<Item key = {value.id} id = {value.id} name = {value.student} task = {value.task} updateFunc = {updateFunc}/>)}): [];
    return (
        <div>
            <ul>{showItems}</ul>
        </div>
    )
}

export default CreateTodo;
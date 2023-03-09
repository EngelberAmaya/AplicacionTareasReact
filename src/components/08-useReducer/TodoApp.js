import React from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender',
    done: false
}];

const TodoApp = () => {

    const [todos] = React.useReducer(todoReducer, initialState);

    console.log(todos);

    return (
        <div>
            <h1>TodoApp</h1>
            <hr/>

            <ul>
                <li>Hola</li>
                <li>Hola Mundo</li>
                <li>Hola de nuevo</li>
            </ul>
        </div>
    )
}

export default TodoApp

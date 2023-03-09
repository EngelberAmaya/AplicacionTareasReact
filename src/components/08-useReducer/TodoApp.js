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
        <div className='container'>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className='row'>

                <div className='col-7'>

                    <ul className='list-group list-group-flush'>

                        {
                            todos.map((todo, i) => (
                                <li 
                                    key={todo.id} 
                                    className="list-group-item">
                                        <p className='text-center'>{i+1}. {todo.desc}</p>
                                        <button className='btn btn-danger'>Borrar</button>
                                </li>
                            ))
                        }

                    </ul>

                </div>

                <div className='col-5'>

                    <h4>Agregar TODO</h4>
                    <hr/>

                    <form>
                        <input type="text" name='description' placeholder='Aprender...' autoComplete='false' className='form-control' />

                        <button className='btn btn-outline-primary mt-2 btn-block'>Agregar</button>
                    </form>
                   
                </div>

            </div>

        </div>
    )
}

export default TodoApp
import React, { useEffect } from 'react';
import { todoReducer } from './todoReducer';
import useForm from '../../hooks/useForm';
import TodoList from './TodoList';
import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

    const [todos, dispatch] = React.useReducer(todoReducer, [], init);

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    //console.log(description);

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => { 

        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length < 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();

        //console.log('Agregar tarea')
    }


    return (
        <div className='imagen pt-5'>
            <div className='container'>

                <h1 className='text-center'>TodoApp ({todos.length})</h1>
                <hr/>

                <div className='row'>

                    <div className='col-md-7 col-sm-12'>

                        <h4 className='text-center'>Listado</h4>

                        <TodoList
                            todos={todos}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />

                    </div>

                    <div className='col-md-5 col-sm-12'>

                        <h4 className='text-center'>Agregar TODO</h4>
                        <hr/>

                        <form onSubmit={handleSubmit}>

                            <input type="text" name='description' placeholder='Aprender...'
                                    autoComplete='false' className='form-control' onChange={handleInputChange}
                                    value={description} />
                            <button type='submit' className='btn btn-primary mt-2 btn-block'>Agregar</button>

                        </form>
                    
                    </div>

                </div>
            </div>

        </div>
    )
}

export default TodoApp

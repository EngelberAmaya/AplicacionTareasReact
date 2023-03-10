import React, { useEffect } from 'react';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

    const [todos, dispatch] = React.useReducer(todoReducer, [], init);    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

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

    const handleAddTodo = (newTodo) => { 

        dispatch({
            type: 'add',
            payload: newTodo
        });
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

                        <TodoAdd
                            handleAddTodo={handleAddTodo}
                        />
                    
                    </div>

                </div>
            </div>

        </div>
    )
}

export default TodoApp

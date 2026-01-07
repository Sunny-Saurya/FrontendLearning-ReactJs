import React, { useState } from 'react'
import TodoInput from './TodoInput'

function TodoList() {
    const [todos, setTodos] = useState([])

    const handleAddTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div className='flex flex-col h-screen items-center border-2 border-black m-8 p-4 gap-4'>
            <div className='p-4 text-4xl font-bold'>TODOS</div>
            <div>

                <TodoInput onAdd={handleAddTodo} />
                <div className='mt-4'>
                    {todos.map((todo, i) => {
                        return <div key={i} className='flex rounded-lg justify-between items-center my-2 border-2 border-black p-2'>
                            <span>{todo}</span>
                            <button className='border-2 border-black rounded-lg p-2' onClick={() => {
                                const newTodos = todos.filter((_, index) => index !== i);
                                setTodos(newTodos);
                            }}>Delete</button>
                            
                        </div>;
                    })}
                </div>
            </div>
        </div>
    )
}

export default TodoList
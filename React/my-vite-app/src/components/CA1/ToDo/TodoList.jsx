import React from 'react'
import { useState } from 'react'
import TodoInput from './TodoInput';

const TodoList = () => {
  const [Todos, setTodos] = useState([]);

  const onAdd = () => {
    setTodos(...Todos, newTodo)
  }
  return (
    <div>
      <TodoInput/>
    </div>
  )
}

export default TodoList
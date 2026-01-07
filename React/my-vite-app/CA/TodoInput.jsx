import React from 'react'
import { useState } from 'react';

const TodoInput = (onAdd) => {
    const [InputValue, setInputValue] = useState('');
    const handleAdd = () => {
        if(InputValue.trim()){
            onAdd(InputValue);
            setInputValue('')
        }
    }
  return (
    <div>
        <input type="text" placeholder='Your Todos....' value={InputValue} onChange={(e) => e.target.value}/>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput
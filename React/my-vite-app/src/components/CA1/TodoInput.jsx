import React, { useState } from 'react'

function TodoInput({ onAdd }) {
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim()) {
            onAdd(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className='flex gap-4 '>
            <input
                type="text"
                placeholder="Add a new task"
                className='border-2 border-black rounded-lg p-2'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAdd} className='border-2 border-black rounded-lg p-2'>Add</button>
        </div>
    )
}


export default TodoInput
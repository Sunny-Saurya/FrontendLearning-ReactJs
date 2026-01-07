// 4. Create a component that shows:

// A list of tasks

// Add new task

// Mark as done

// Delete task
// Use:

// map() to display

// filter() to delete

// every() to check if all tasks are completed
// Display a message:
// “All tasks completed!” when every() returns true.

import React, { useState } from 'react'

const Question4 = () => {
    const [task, setTask] = useState([]);
    const [input, setInput] = useState("");

    const handleAdd = () => {

    }
  return (
    <>
        <div>Task Planner</div>
        <div>

        <input className='border border-amber-600 w-100 h-10 rounded-2xl p-3' onChange={(e) => {
            setInput(e.target.value);
        }} value={input} type="text" placeholder='Your Task ....' />
        
        <button className='m-4 bg-green-600 border w-20 cursor-pointer hover:scale-90' onClick={handleAdd}>Add</button>
        </div>
        <div>
            <ul>
                {task.map(i => `<div key=${i}>
                    <div>${i}</div>
                    <button onClick={}>Done</button>
                    </div>`)}
            </ul>
        </div>
    </>
  )
}

export default Question4
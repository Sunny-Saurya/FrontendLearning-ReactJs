// 1. Create a counter component that:

// Uses useState for count

// Displays count

// Increments and decrements

// Prevents count from going below 0

// Uses useEffect to log "Count changed" whenever count updates

// Logs "Mounted" when the component loads

import React from 'react'
import { useState, useEffect } from 'react';

const Question1 = () => {
    const [count, setcount] = useState(0);

    useEffect(() => {
        console.log("Mounted!");
        
    }, []);
    useEffect(() => {
        console.log("Count Changed!");
        
    }, [count]);

  return (
    <>
        <div>
            Count : {count}
        </div>
        <button onClick={() => setcount(count => count + 1)}>Increament</button>
        <button onClick={() => {
            if(count > 0){
                setcount(count - 1);
            }
        }}>Decrement</button>
        <button onClick={() => setcount(0)}>Reset</button>

    </>
  )
}

export default Question1
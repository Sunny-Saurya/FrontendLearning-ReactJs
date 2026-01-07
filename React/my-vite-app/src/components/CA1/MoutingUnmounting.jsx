//     1. Create a component that:
//     • Logs “Mounted” when the page loads
//     • Logs “Updated” whenever the counter changesv
//     • Logs “Unmounted” when the component is removed
// Use useEffect with correct dependency arrays.
// Provide a toggle button to mount/unmount the component.


import React from 'react'
import { useState, useEffect } from 'react';
const MoutingUnmounting = () => {
    const [count, setcount] = useState(0);

    // mouted when the page reload
    useEffect(() => {
        console.log("Mounted!");
    }, []);

    // for togleing
    useEffect(() => {
        return () => {
            console.log("Unmounted"); 
        }
    }, []);
    
    // updated when the conutn change

    useEffect(() => {
        console.log("Updated");
        
    }, [count]);

  return (
    <>
    <div>MoutingUnmounting</div>
    <h2>Count : {count}</h2>
    <button onClick={() => setcount(count => count + 1)}>Increment</button>
    <button onClick={() => setcount(count => count - 1)}>Decrement</button>

    </>
  )
}

export default MoutingUnmounting
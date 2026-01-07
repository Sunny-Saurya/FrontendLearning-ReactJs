// prevent the component to rerender again and again.

import React, { useCallback } from 'react'
import { useState } from 'react';
import ChildComp from './ChildComp';

const ParentComp = () => {
    const [count, setcount] = useState(0);

    const Incre = useCallback(() => {
        setcount(count => count + 1);
    }, [])

    const Decre = useCallback(() => {
        setcount(count => count - 1);
    }, [])

    console.log("Parent Render");


  return (
    <>
    <div>Count: {count} </div>
    {/* <button onClick={() => setcount(count => count +1)}>Increment</button>
    <button onClick={() => setcount(count => count -1)}>Decrement</button> */}

        <ChildComp Incre = {Incre} Decre = {Decre} />


    </>

  )
}

export default ParentComp
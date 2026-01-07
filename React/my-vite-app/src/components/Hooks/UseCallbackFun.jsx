// prevent the component to rerender again and again.

import React from 'react'
import { useState } from 'react';

const UseCallbackFun = () => {
    const [count, setcount] = useState(0);
  return (
    <>
    <div>Count: {count} </div>
    <button onClick={() => setcount(count => count +1)}>Increment</button>
    <button onClick={() => setcount(count => count -1)}>Decrement</button>

    </>

  )
}

export default UseCallbackFun
import React from 'react'
import { createContext } from 'react';
import ComponentX from './ComponentX';
import { useState } from 'react';
export const snameContext = createContext();
export const sunameContext = createContext();

const UseContext = () => {

    const [name, setname] = useState("Sunny");
    const [surname, setsurname] = useState("Saurya");

  return (
    <div>
        <h2>This is the first provider component</h2>
        <snameContext.Provider value={name}>
            <sunameContext.Provider value={surname}>
                <ComponentX/>
            </sunameContext.Provider>   
        </snameContext.Provider>
    </div>
  )
}

export default UseContext


// there are 3 thing in the use context and that i s: createcontext - from where you want the value or values are store
// 2nd : provideer
//3rd : useContext where you want to show the data
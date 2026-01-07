// Q1. Implement an event handler in a React component that updates the state when an input field value changes. Display the updated value on the screen.

import React, { useState } from "react"

const Question1 = () => {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return(
        <>
          <h2>Form Handler</h2>
          <input type="text" placeholder="Enter Message Here..." onChange={handleChange}/>
            <p>Enter Value : {value}</p>
        </>
    )
}
export default Question1
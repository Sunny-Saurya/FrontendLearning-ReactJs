// Q2. Implement a React form with uncontrolled components. Submit the form and display the input values on the console.

import React, { useRef } from 'react'

const Question2 = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: ", nameRef.current.value);
        console.log("Email:", emailRef.current.value)
        
    }
  return (
    <>
        <h2>Form</h2>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='username' ref={nameRef}  placeholder='enter name here..'/>
            <input type="email" name='email' ref={emailRef} placeholder='enter email here..'/>
            <button>Register</button>
            
        </form>
    </>
  )
}

export default Question2
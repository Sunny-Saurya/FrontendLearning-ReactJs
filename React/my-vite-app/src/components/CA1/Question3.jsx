// 3. Create a form component with:

// Inputs: name, email, password

// Single state object

// Use spread operator to update the state on input change

// Show live preview below the form


import React from 'react'
import { useState } from 'react';
const Question3 = () => {
    
    const [form, setform] = useState({
        name:"",
        email: "",
        password: ""
    });

    // spreading 
    const handleForm = (e) => {
        const {name, value} = e.target;
        // destructuring
        setform({
            ...form,
            [name] : value
        })
    }
  return (
    <>
    <br /><br />
        <label htmlFor="">Name</label> 
        <input name='name' onChange={handleForm} value={form.name} type="text"placeholder='Enter Name' />
        <br /><br />
        <label htmlFor="">Email</label>
        <input name='email' onChange={handleForm} value={form.email} type="email"placeholder='Enter Email' />
        <br /><br />
        <label htmlFor="">Password</label>
        <input name='password' onChange={handleForm} value={form.password} type="text"placeholder='Enter Password' />
        <br /><br />

        <h3>Form Data:</h3>
        <pre>{JSON.stringify(form, null,3)}</pre>
    </>
  )
}

export default Question3
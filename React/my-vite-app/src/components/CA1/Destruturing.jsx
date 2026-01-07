// Create a React form that uses destructuring to extract values and the spread operator to update the state object on input change.



import React from 'react'
import { useState } from 'react';
const Destruturing = () => {
    const [formData, setformData] = useState({
        name: "",
        email:""
    });

    const handleForm = (e) => {
        const{name, value} = e.target; // destructuring

        setformData({
            ...formData, // spreadOperator
            [name] : value
        })
    }

  return (
    <>
        <h1>Destructuring</h1>
        <h2>React Form</h2>
        <label htmlFor="">Name</label>
        <input type="text" name='name' placeholder='Enter your name' value={formData.name} onChange={handleForm}/>
         <br /><br />
        <label htmlFor="">Email</label>
        <input type="email" name='email' placeholder='Enter your email' value={formData.email} onChange={handleForm}/>
         <br /><br />

         <button>Submit</button>
         <h3>Form Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
    </>
  )
}

export default Destruturing
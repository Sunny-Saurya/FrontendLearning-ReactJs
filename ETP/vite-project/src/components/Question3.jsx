// ✅Q3. Create a controlled form in React with inputs for name and email. Implement validation and show error messages.

import React, { useState } from 'react'

const Question3 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        if(!name || !email || !password){
            setError("All feild are required!!")
        }
        else{
            setError("");
            return;
        }
    }
  return (
    <div>
        <form action="" onChange={handleForm}>
            <input value={name} placeholder='Enter name...' onChange={(e) => setName(e.target.value)}/>
            <input value={email} placeholder='Enter email...' onChange={(e) => setEmail(e.target.value)}/>
            <input value={password} placeholder='Enter password...' onChange={(e) => setPassword(e.target.value)}/>
            <button>Register</button>
        </form>
    </div>
  )
}

export default Question3
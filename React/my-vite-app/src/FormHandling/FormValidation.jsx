import React from 'react'
import { useState } from 'react';
const FormValidation = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        name: "",
        email: "",
        password: ""
    });

    const validatingForm = (e) => {
        e.preventDefault();
        
        const newErrors = {
            name: "",
            email: "",
            password: ""
        };

        let isValid = true;

        if(!name || name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters long";
            isValid = false;
        }
        if(!email || !email.includes("@") || !email.includes(".")) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }
        if(!password || password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
            isValid = false;
        }

        setError(newErrors);

        if(isValid) {
            alert("Form submitted successfully!");
            setName('');
            setEmail('');
            setPassword('');
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
        if(error.name) {
            setError({...error, name: ""});
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if(error.email) {
            setError({...error, email: ""});
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if(error.password) {
            setError({...error, password: ""});
        }
    }



  return (
    <div className='min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
        <div className='bg-white rounded-2xl shadow-xl p-8 w-full max-w-md'>
            <h1 className='text-3xl font-bold text-gray-800 mb-6 text-center'>Form Validation</h1>
            <form className='space-y-5' onSubmit={validatingForm}>
        
                <div className='flex flex-col'>
                    <label className='text-sm font-semibold text-gray-700 mb-2' htmlFor="name">
                        Name
                    </label>
                    <input 
                        id='name'
                        className={`px-4 py-3 border text-black rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition duration-200 ${error.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
                        type="text" 
                        placeholder='Enter your name'
                        value={name} 
                        onChange={handleNameChange}
                    />
                    {error.name && <div className='text-red-500 text-sm mt-1'>{error.name}</div>}
                </div>

        
                <div className='flex flex-col'>
                    <label className='text-sm font-semibold text-gray-700 mb-2' htmlFor="email">
                        Email
                    </label>
                    <input 
                        id='email'
                        className={`text-black px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition duration-200 ${error.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
                        type="email" 
                        placeholder='Enter your email'
                        value={email} 
                        onChange={handleEmailChange}
                        />
                        {error.email && <div className='text-red-500 text-sm mt-1'>{error.email}</div>}
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm font-semibold text-gray-700 mb-2' htmlFor="password">
                        Password
                    </label>
                    <input 
                        id='password'
                        className={`text-black px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition duration-200 ${error.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
                        type="password" 
                        placeholder='Enter your password'
                        value={password} 
                        onChange={handlePasswordChange}
                    />
                    {error.password && <div className='text-red-500 text-sm mt-1'>{error.password}</div>}
                </div>
                <button 
                    type="submit"
                    className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl'
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default FormValidation
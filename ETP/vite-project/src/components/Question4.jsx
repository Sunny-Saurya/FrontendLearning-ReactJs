// Q4. Create a simple React app with routing. Add three pages: Home, About, Contact.

import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
function home(){
    return <h2>Home Page</h2>
    
}

function About(){
    return <h2>About page</h2>
}

function contact(){
    return <h2>Contact Page</h2>
}
const Question4 = () => {
  return (
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
            <Routes>
                <Route path="/" element={<home/>}/>
                <Route path="/about" element={<about/>}/>
                <Route path="/contact" element={<contact/>}/>
            </Routes>
        </BrowserRouter>
  )
}

export default Question4
import React from 'react'
import { useRef } from 'react'

const UncontrolledComponent = () => {
    const Ref1 = useRef(null);
    const Ref2 = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstname = Ref1.current.value;
        const lastname = Ref2.current.value;
        alert(`First Name: ${firstname} \n Last Name: ${lastname}`);
    }
  return (
    <div>UncontrolledComponent
        <h1>This is Uncontrolled Component</h1>
        <label htmlFor="">FirstName:</label>
        <input type="text" ref={Ref1} />
        <br />
        <label htmlFor="">LastName:</label>
        <input type="text" ref={Ref2} />
        <br />
        <button onClick={handleSubmit} type='submit'>Submit</button>
    </div>
  )
}

export default UncontrolledComponent
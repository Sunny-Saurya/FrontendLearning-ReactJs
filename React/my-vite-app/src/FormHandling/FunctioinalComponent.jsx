import React from 'react'
import { useState } from 'react';

const FunctioinalComponent = () => {

    // const [firstname, setfirstname] = useState('');
    // const [lastname, setlastname] = useState('');
    // const [review, setreview] = useState('');

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     alert(`First Name: ${firstname} \n Last Name: ${lastname} \n Review: ${review}`);
    // }

    // doing with single function for all inputs
    const [inputValues, setInputValues] = useState({
        firstname: '',
        lastname: '',
        review: '',
        states: ''
    });

    const {firstname, lastname, review, states} = inputValues;

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    }

  return (
    <div>
        <h1>This is Functional Component</h1>
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            alert(`First Name: ${firstname} \n Last Name: ${lastname} \n Review: ${review} \n State: ${states ? states.toUpperCase() : 'Not selected'}`);
        }}>
            <label htmlFor="">Firstname:</label>
            <input type="text" name="firstname" value={firstname} onChange={handleInputChange} />
            <br />
            <label htmlFor="">Lastname:</label>
            <input type="text" name="lastname" value={lastname} onChange={handleInputChange} />
            <br />
            <label htmlFor="">Review:</label>
            <textarea name="review" id="" cols="30" rows="10" value={review} onChange={handleInputChange}></textarea>
            <br />
            <select name="states" id="" value={states} onChange={handleInputChange}>
                <option value="" disabled>Select a state</option>
                <option value="TamilNadu">TamilNadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Punjab">Punjab</option>
                <option value="Telangana">Telangana</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FunctioinalComponent
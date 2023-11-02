import React, { useState } from 'react';
import './AddStudent.css';

function AddStudent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [className, setClassName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}, Class: ${className}`);
    };

    return (
     
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label>
            <br />
            <label>
                Class:
                <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} />
            </label>
            <br />
            <button type="submit">Add Student</button>
        </form>
  
    );
}

export default AddStudent;

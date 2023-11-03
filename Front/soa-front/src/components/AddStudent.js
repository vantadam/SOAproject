import React, { useState, useEffect } from 'react';
import './AddStudent.css';

function AddStudent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [className, setClassName] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccessMessage('');
            setErrorMessage('');
        }, 3000);
        return () => clearTimeout(timer);
    }, [successMessage, errorMessage]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/Etudiant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prenom: lastName,
                    nom: firstName ,
                    className: className
                })
            });
            const data = await response.json();
            console.log(data);
            setSuccessMessage('Student added successfully!');
            setErrorMessage('');
            setFirstName('');
            setLastName('');
            setClassName('');
        } catch (error) {
            console.error(error);
            setSuccessMessage('');
            setErrorMessage('Error adding student. Please try again.');
        }
    };

    return (
     
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required disabled={successMessage !== ''} />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required disabled={successMessage !== ''} />
            </label>
            <br />
            <label>
                Class:
                <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} required disabled={successMessage !== ''} />
            </label>
            <br />
            <button type="submit" disabled={successMessage !== ''}>Add Student</button>
            <br />
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
  
    );
}

export default AddStudent;

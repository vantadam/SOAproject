import React, { useState } from 'react';
import './AddProf.css';

function AddAdmin() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [hours, setHours] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/Cadre', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prenom:firstName,
                    nom:lastName,
                    poste:position,
                    nbTotalHeures:hours
                })
            });
            const data = await response.json();
            setMessage('Admin added successfully');
        } catch (error) {
            setMessage('Error adding admin');
        }
        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    return (
        <div className="container">
            <div className="sidebar">
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </label>
                    <br />
                    <label>
                        Last Name:
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </label>
                    <br />
                    <label>
                        Position:
                        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />
                    </label>
                    <br />
                    <label>
                        Number of Hours:
                        <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} required />
                    </label>
                    <br />
                    <button type="submit" id="addAdminButton">Add Admin</button>
                    <p>{message}</p>
                </form>
            </div>
        </div>
    );
}

export default AddAdmin;

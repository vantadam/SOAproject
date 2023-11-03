import React, { useState } from 'react';
import './AddProf.css';

function AddProfessor() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subject, setSubject] = useState('');
    const [hours, setHours] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/Enseignant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prenom:firstName,
                    nom:lastName,
                    matiere:subject,
                    nbTotalHeures:hours
                })
            });
            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            setMessage('Error adding professor');
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
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Last Name:
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Subject:
                        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Number of Hours:
                        <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} />
                    </label>
                    <br />
                    <button type="submit" id="addProfessorButton">Add Professor</button>
                    <p>{message}</p>
                </form>
            </div>
        </div>
    );
}

export default AddProfessor;




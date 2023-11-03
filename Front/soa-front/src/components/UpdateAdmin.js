import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AddProf.css';

function UpdateAdmin() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [hoursWorked, setHoursWorked] = useState('');
    const [totalHours, setTotalHours] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();

    useEffect(() => {
        async function fetchAdmin() {
            try {
                const response = await fetch(`http://localhost:8080/Cadre/${id}`);
                const data = await response.json();
                setFirstName(data.prenom);
                setLastName(data.nom);
                setRole(data.poste);
                setHoursWorked(data.nbHeuresworked);
                setTotalHours(data.nbTotalHeures);
            } catch (error) {
                console.error(error);
            }
        }
        fetchAdmin();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/Cadre/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prenom: firstName,
                    nom: lastName ,
                    poste: role,
                    nbHeuresworked: hoursWorked,
                    nbTotalHeures: totalHours
                })
            });
            const data = await response.json();
            console.log(data);
            setSuccessMessage('Admin updated successfully');
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error(error);
            setErrorMessage('Error updating admin');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    return (
        <div>
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
                    Role:
                    <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
                </label>
                <br />
                <label>
                    Hours Worked:
                    <input type="number" value={hoursWorked} onChange={(e) => setHoursWorked(e.target.value)} />
                </label>
                <br />
                <label>
                    Total Hours:
                    <input type="number" value={totalHours} onChange={(e) => setTotalHours(e.target.value)} />
                </label>
                <br />
                <button type="submit">Update</button>
                {successMessage && <p>{successMessage}</p>}
                {errorMessage && <p>{errorMessage}</p>}
            </form>
        </div>
    );
}

export default UpdateAdmin;

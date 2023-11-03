import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AddProfessor.css';

function UpdateProf() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();

    useEffect(() => {
        async function fetchProf() {
            try {
                const response = await fetch(`http://localhost:8080/Professeur/id/${id}`);
                const data = await response.json();
                setFirstName(data.prenom);
                setLastName(data.nom);
                setEmail(data.email);
            } catch (error) {
                console.error(error);
                setErrorMessage('Error updating professor');
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000);
            }
        }
        fetchProf();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/Professeur/id/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prenom: firstName,
                    nom: lastName ,
                    email: email
                })
            });
            const data = await response.json();
            console.log(data);
            setSuccessMessage('Professor updated successfully');
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error(error);
            setErrorMessage('Error updating professor');
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
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <button type="submit">Update</button>
                {successMessage && <p>{successMessage}</p>}
                {errorMessage && <p>{errorMessage}</p>}
            </form>
        </div>
    );
}

export default UpdateProf;

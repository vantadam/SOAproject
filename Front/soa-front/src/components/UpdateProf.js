import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import './AddProf.css';

function UpdateProf() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  
    const [subject, setSubject] = useState('');
    const [totalHours, setTotalHours] = useState(0);
    const [hoursWorked, setHoursWorked] = useState(0);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();
    const Navigate = useNavigate();

    useEffect(() => {
        async function fetchProf() {
            try {
                const response = await fetch(`http://localhost:8080/Enseignant/${id}`);
                const data = await response.json();
                setFirstName(data.prenom);
                setLastName(data.nom);
                
                setSubject(data.matiere);
                setTotalHours(data.nbTotalHeures);
                setHoursWorked(data.nbHeuresworked);
            } catch (error) {
                console.error(error);
               
            }
        }
        fetchProf();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/Enseignant/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prenom: firstName,
                    nom: lastName ,
                    
                    matiere: subject,
                    totalHours: totalHours,
                    hoursWorked: hoursWorked
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

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/Enseignant/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            console.log(data);
            alert("Professor deleted successfully");
            Navigate('/prof');

        } catch (error) {
            console.error(error);
            setErrorMessage('Error deleting professor');
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
                    Subject:
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </label>
                <br />
                <label>
                    Total Hours:
                    <input type="number" value={totalHours} onChange={(e) => setTotalHours(e.target.value)} />
                </label>
                <br />
                <label>
                    Hours Worked:
                    <input type="number" value={hoursWorked} onChange={(e) => setHoursWorked(e.target.value)} />
                </label>
                <br />
                <button type="submit">Update</button>
                <button type="button" onClick={handleDelete}>Delete</button>
                {successMessage && <p>{successMessage}</p>}
                {errorMessage && <p>{errorMessage}</p>}
            </form>
        </div>
    );
}

export default UpdateProf;

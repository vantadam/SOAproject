import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AddStudent.css';

function UpdateStudent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [className, setClassName] = useState('');
    const [pres, setPres] = useState('');
    const [abs, setAbs] = useState('');
    const [moy, setMoy] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchStudent() {
            try {
                const response = await fetch(`http://localhost:8080/Etudiant/id/${id}`);
                const data = await response.json();
                setFirstName(data.prenom);
                setLastName(data.nom);
                setClassName(data.className);
                setPres(data.pres);
                setAbs(data.abs);
                setMoy(data.moy);
            } catch (error) {
                console.error(error);
                setErrorMessage('Error updating student');
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000);
            }
        }
        fetchStudent();
    }, [id]);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/Etudiant/id/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            console.log(data);
           alert("Student deleted successfully");
              navigate('/student');
        } catch (error) {
            console.error(error);
            setErrorMessage('Error deleting student');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/Etudiant/id/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prenom: lastName,
                    nom: firstName ,
                    className: className,
                    pres: pres,
                    abs: abs,
                    moy: moy
                })
            });
            const data = await response.json();
            console.log(data);
            setSuccessMessage('Student updated successfully');
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error(error);
            setErrorMessage('Error updating student');
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
                    Class:
                    <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} />
                </label>
                <br />
                <label>
                    Moy:
                    <input type="number" value={moy} onChange={(e) => setMoy(e.target.value)} />
                </label>
                <br />
                <label>
                    Pres:
                    <input type="number" value={pres} onChange={(e) => setPres(e.target.value)} />
                </label>
                <br />
                <label>
                    Abs:
                    <input type="number" value={abs} onChange={(e) => setAbs(e.target.value)} />
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

export default UpdateStudent;

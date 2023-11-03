import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './prof.css';

function Professor() {
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/Enseignant')
            .then(response => response.json())
            .then(data => setProfessors(data));
    }, []);

    const incrementPresent = (index) => {
        const updatedProfessors = [...professors];
        updatedProfessors[index].nbHeuresworked += 1;
        setProfessors(updatedProfessors);
        fetch(`http://localhost:8080/Enseignant/${updatedProfessors[index].id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProfessors[index])
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="container">
                <div className="sidebar">
                    <br />
                    <Link to={"/addprofessor"} id="addProfessorButton">Add Professor</Link>
                </div>
                <div className="professor-list">
                    <h1>Professor List</h1>
                    {professors.map((professor, index) => (
                        <div className="professor" key={index}>
                            <div>
                                <strong>Name:</strong> {professor.prenom} {professor.nom}
                                <br />
                                <strong>Subject:</strong> {professor.matiere}
                                <br />
                                <strong>TotalHours:</strong> {professor.nbTotalHeures}
                            </div>
                            <div>
                                <strong>Present:</strong> {professor.nbHeuresworked}
                                <button onClick={() => incrementPresent(index)}>+</button>
                            </div>
                            <Link to={`/updateprof/${professor.id}`} id="updateProfessorButton">Update</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Professor;

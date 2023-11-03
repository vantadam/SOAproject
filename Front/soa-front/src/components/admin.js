import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './admin.css';

function Admin() {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/Cadre')
            .then(response => response.json())
            .then(data => setAdmins(data));
    }, []);

    const incrementPresent = (index) => {
        const updatedAdmins = [...admins];
        updatedAdmins[index].nbHeuresworked += 1;
        setAdmins(updatedAdmins);
        fetch(`http://localhost:8080/Cadre/${updatedAdmins[index].id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedAdmins[index])
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
                    <Link to={"/addadmin"} id="addAdminButton">Add Admin</Link>
                </div>
                <div className="admin-list">
                    <h1>Admin List</h1>
                    {admins.map((admin, index) => (
                        <div className="admin" key={index}>
                            <div>
                                <strong>Name:</strong> {admin.prenom} {admin.nom}
                                <br />
                                <strong>Position:</strong> {admin.poste}
                                <br />
                                <strong>TotalHours:</strong> {admin.nbTotalHeures}
                            </div>
                            <div>
                                <strong>Present:</strong> {admin.nbHeuresworked}
                                <button onClick={() => incrementPresent(index)}>+</button>
                            </div>
                            <Link to={`/updateadmin/${admin.id}`} id="updateAdminButton">Update</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Admin;

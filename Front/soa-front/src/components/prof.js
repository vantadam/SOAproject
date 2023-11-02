import React from 'react';
import { Link } from 'react-router-dom';
import './prof.css';

function Professor() {
    return (
        <div>
        <div className="container">
    <div className="sidebar">
        <br/>
        <Link to={"/addprofessor"} id="addProfessorButton">Add Professor</Link>
    </div>
    <div className="professor-list">
        <h1>Professor List</h1>
        <div className="professor" onClick={() => alert("change")}>
            <div>
                <strong>Name:</strong> John Doe
                <br />
                <strong>Subject:</strong> 10A
               
            </div>
            <div>
                <strong>Present:</strong> 0
                <button id="incrementPresentButton">+</button>
                
            </div>
            <button id="updateProfessorButton">Update</button>
        </div>
       
        
    </div>
</div>

        </div>
    );
}

export default Professor;

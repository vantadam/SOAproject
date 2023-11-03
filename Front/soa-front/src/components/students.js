import React, { useState, useEffect } from 'react';
import './students.css';
import { Link } from 'react-router-dom';

const Student = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/Etudiant')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container">
            <div className="sidebar">
                <div className="classes">
                    <h2>Classes</h2>
                    <ul>
                        <li>10A</li>
                        <li>10B</li>
                    </ul>
                </div>
                <Link to={"/addstudent"} id="addStudentButton">Add Student</Link>
            </div>
            <div className="student-list">
                <h1>Student List</h1>
                {students.map(student => (
                    <div className="student" key={student.id} onClick={() => alert("change")}>
                        <div>
                            <strong>Name:</strong> {student.name}
                            <br />
                            <strong>Class:</strong> {student.class}
                            <br />
                            <strong>Grade:</strong> {student.grade}
                        </div>
                        <div>
                            <strong>Present:</strong> {student.present}
                            <button id="incrementPresentButton">+</button>
                            <br />
                            <strong>Skipped:</strong> {student.skipped}
                            <button id="incrementSkippedButton">+</button>
                        </div>
                        <button id="updateStudentButton">Update</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Student;

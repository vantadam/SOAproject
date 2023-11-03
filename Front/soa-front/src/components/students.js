import React, { useState, useEffect } from 'react';
import './students.css';
import { Link } from 'react-router-dom';

const Student = () => {
    const [students, setStudents] = useState([]);
    const [selectedClass, setSelectedClass] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/Etudiant')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error(error));
    }, []);

    const incrementPresent = (id) => {
        const updatedStudents = students.map(student => {
            if (student.id === id) {
                const updatedStudent = {
                    ...student,
                    pres: student.pres + 1
                };
                fetch(`http://localhost:8080/Etudiant/id/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedStudent)
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error(error));
                return updatedStudent;
            }
            return student;
        });
        setStudents(updatedStudents);
    }

    const incrementSkipped = (id) => {
        const updatedStudents = students.map(student => {
            if (student.id === id) {
                const updatedStudent = {
                    ...student,
                    abs: student.abs + 1
                };
                fetch(`http://localhost:8080/Etudiant/id/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedStudent)
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error(error));
                return updatedStudent;
            }
            return student;
        });
        setStudents(updatedStudents);
    }

    const classes = [...new Set(students.map(student => student.className))];
    classes.unshift("All");

    const filteredStudents = selectedClass ? students.filter(student => student.className === selectedClass) : students;

    const handleClassClick = (className) => {
        if (className === "All") {
            setSelectedClass(null);
        } else {
            setSelectedClass(className);
        }
    }

    return (
        <div className="container">
            <div className="sidebar">
                <div className="classes">
                    <h2>Classes</h2>
                    <ul>
                        {classes.map(className => (
                            <li key={className} onClick={() => handleClassClick(className)}>{className}</li>
                        ))}
                    </ul>
                </div>
                <Link to={"/addstudent"} id="addStudentButton">Add Student</Link>
            </div>
            <div className="student-list">
                <h1>Student List</h1>
                {filteredStudents.map(student => (
                    <div className="student" key={student.id}>
                        <div>
                            <strong>Name:</strong> {student.prenom} {student.nom}
                            <br/>
                            <strong>Class:</strong> {student.className}
                            <br />
                            <strong>Grade:</strong> {student.moy}
                        </div>
                        <div>
                            <strong>Present:</strong> {student.pres}
                            <button onClick={() => incrementPresent(student.id)}>+</button>
                            <br />
                            <strong>Skipped:</strong> {student.abs}
                            <button onClick={() => incrementSkipped(student.id)}>+</button>
                        </div>
                        <Link to={`/updatestudent/${student.id}`} id="updateStudentButton">Update</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Student;

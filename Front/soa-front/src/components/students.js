// Student.js
import React from 'react';
import './students.css';
import { Link } from 'react-router-dom';

const Student = () => {
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
                <div className="student" onClick={() => alert("change")}>
                    <div>
                        <strong>Name:</strong> John Doe
                        <br />
                        <strong>Class:</strong> 10A
                        <br />
                        <strong>Grade:</strong> A
                    </div>
                    <div>
                        <strong>Present:</strong> 0
                        <button id="incrementPresentButton">+</button>
                        <br />
                        <strong>Skipped:</strong> 0
                        <button id="incrementSkippedButton">+</button>
                    </div>
                    <button id="updateStudentButton">Update</button>
                </div>
                <div className="student">
                    <div>
                        <strong>Name:</strong> Jane Smith
                        <br />
                        <strong>Class:</strong> 10B
                        <br />
                        <strong>Grade:</strong> B
                    </div>
                    <div>
                        <strong>Present:</strong> 0
                        <button id="incrementPresentButton">+</button>
                        <br />
                        <strong>Skipped:</strong> 0
                        <button id="incrementSkippedButton">+</button>
                    </div>
                    <button id="updateStudentButton">Update</button>
                </div>
                {/* Add more students here with "Update" buttons */}
            </div>
        </div>
    );
};

export default Student;

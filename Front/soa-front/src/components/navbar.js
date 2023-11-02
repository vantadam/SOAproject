import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <nav>
            <ul className="left">
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <ul className="right">
                <li>
                    <Link to="/student">Students</Link>
                </li>
                <li>
                    <Link to="/prof">Professors</Link>
                </li>
                <li>
                    <Link to="/administration">Admin Staff</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;


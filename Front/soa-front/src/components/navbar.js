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
                    <Link to="/student">Student</Link>
                </li>
                <li>
                    <Link to="/professor">Professor</Link>
                </li>
                <li>
                    <Link to="/administration">Administration</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;


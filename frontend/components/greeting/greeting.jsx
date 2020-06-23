import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Log In</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <div className="logout-menu">
                <button onClick={logout}>Log Out</button>
            </div>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;
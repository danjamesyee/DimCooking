import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>Log In</button>
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
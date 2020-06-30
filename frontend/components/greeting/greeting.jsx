import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
            <button className="nav-button" onClick={() => openModal('login')}>
                RECIPE BOX
                <div className='plain-text'>Log In</div>
            </button>
    );


    const personalGreeting = () => (
        <div className="greeting-loggedin">
            <Link to="/saved_recipes" className="saved-button">YOUR RECIPE BOX</Link>
            <div className="gear-dropdown-btn">
                <i className="fas fa-cog"></i>
                <div id="gear-dropdown" className="gear-dropdown">
                    <div>
                        <Link to="/"><button className='drop-button' onClick={logout}>Log Out</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;
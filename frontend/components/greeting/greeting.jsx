import React from 'react';


const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
            <button className="nav-button" onClick={() => openModal('login')}>
                RECIPE BOX
                <div className='plain-text'>Log In</div>
            </button>
    );


    const personalGreeting = () => (
        <div className="gear-dropdown-btn">
            <i className="fas fa-cog"></i>
            <div id="gear-dropdown" className="gear-dropdown">
                <div>
                    <button className='drop-button' onClick={logout}>Log Out</button>
                </div>
            </div>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;
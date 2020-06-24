import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const Greeting = ({ currentUser, logout, openModal }) => {
    // const revealDropdown = (event) => {
    //     event.stopPropagation(); // prevent event from being picked up by body
    //     $('#gear-dropdown').removeClass('hidden');
    //     $('#gear-dropdown-btn').off('click', revealDropdown);
    //     $(document).on('click', hideDropdown);
    // };
    const sessionLinks = () => (
            <button className="nav-button" onClick={() => openModal('login')}>
                RECIPE BOX
                <div className='plain-text'>Log In</div>
            </button>
    );
    // const hideDropdown = () => {
    //     $('#gear-dropdown').addClass('hidden');
    //     $('#gear-dropdown-btn').on('click', revealDropdown);
    //     $(document).off('click', hideDropdown);
    // };
    // $(() => $('#gear-dropdown-btn').on('click', revealDropdown));

    const personalGreeting = () => (
        <div className="gear-dropdown-btn">
            <i className="fas fa-cog"></i>
            <ul id="gear-dropdown" className="gear-dropdown">
                <div>
                    <button className='drop-button' onClick={logout}>Log Out</button>
                </div>
            </ul>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;
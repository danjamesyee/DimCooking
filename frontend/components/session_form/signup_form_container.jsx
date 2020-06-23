import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form'


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Create Account',
        navLink: 
            <div>
                Already have an account?
                <Link to="/login"> Log in</Link>
            </div>,
        welcome: <h2>Join DIM Cooking</h2>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
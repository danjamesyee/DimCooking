import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form'
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log In',
        welcome: <p className="welcome">Log in to DIM Cooking</p>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        otherForm: (
            <div className="other-form">
                Don't have an account?&nbsp;
                <button className="link-button" onClick={() => dispatch(openModal('signup'))}>
                    Create one
                </button>
            </div>
        ),
        closeModal: () => dispatch(closeModal()),
        login: (user) => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
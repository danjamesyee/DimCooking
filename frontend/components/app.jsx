import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Modal from './modal/modal';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <nav className="outer-nav"> 
            <div className="main-nav"> 
                <div className="main-title">點 | Dim Cooking</div>
                <GreetingContainer />
            </div>
        </nav>
    </div>
);

export default App;

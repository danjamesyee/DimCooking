import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Modal from './modal/modal';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <nav className="outer-nav"> 
            <div className="main-nav"> 
                <Link to="/" className="main-title" style={{ textDecoration: 'none' }}><div >點 | Dim Cooking</div></Link>
                <GreetingContainer />
            </div>
        </nav>
    </div>
);

export default App;

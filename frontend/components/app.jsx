import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <h1>點 Dim Cooking</h1>
        <GreetingContainer />
        <AuthRoute exact path="/login" component={LoginFormContainer} />   
        <AuthRoute exact path="/signup" component={SignupFormContainer} />        
     
    </div>
);

export default App;

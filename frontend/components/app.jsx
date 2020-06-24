import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import Modal from './modal/modal';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NotFound from './routes/notFoundPage';
import MainPage from './main/main_container'


const App = () => (
    <div>
        <Modal />
        <nav className="outer-nav"> 
            <div className="main-nav">
                <Link to="/" className="main-title" style={{ textDecoration: 'none' }}><div >點 | Dim Cooking</div></Link>
                <GreetingContainer />  
            </div>

            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route component={NotFound} />
            </Switch>
        </nav>
    </div>
);

export default App;

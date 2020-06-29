import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import Modal from './modal/modal';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NotFound from './routes/notFoundPage';
import MainPage from './main/main_container'
import RecipePage from './recipe/recipe_container';
import Footer from './footer';

const App = () => (
    <div className="cheese">
        <Modal />
        
            <div className="main-nav">
                <div className='hider'>
                <Link to="/" className="main-title" style={{ textDecoration: 'none' }}><strong >點 | Dim Cooking</strong></Link>
                </div>
                <div className="search"></div>
                <GreetingContainer className='greeting'/>  
            </div>
            
            
            
        
        <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/recipes/:recipeId' component={RecipePage}/>
                <Route component={NotFound} />
        </Switch>
        <Footer />
    </div>
);

export default App;

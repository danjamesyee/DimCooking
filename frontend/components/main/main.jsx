import { Link } from 'react-router-dom';
import React from 'react';

class MainPage extends React.Component{
  
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRecipes();
    }

    render () {
        let recipe = this.props.recipes[0] || {photoUrl: '', title: ''};
        
        return (
            <div>
                <Link to={`/recipes/${recipe.id}`} className="splash" >
                    <img src={recipe.photoUrl} width="100px" height="50px" />
                        <span className="splash-name">
                            <br/>
                            <br />
                            <br/>
                            <div className="splash-title">{recipe.title}</div>                            <br />
                            <div>A simple Dim Sum classic</div>
                            <br />
                            <div className='splash-text'>Gilbert Bui</div>
                        </span>
                        <span className="dot">
                            <div className='dot-text'>RECIPE</div>
                            <div className='dot-text'>OF THE DAY</div>
                        </span>
                </Link>
            </div>
        )
    }
 
};

export default MainPage;

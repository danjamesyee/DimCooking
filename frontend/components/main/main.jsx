import { Link } from 'react-router-dom';
import React from 'react';

class MainPage extends React.Component{
  
    constructor(props) {
        super(props);
        this.nextRecipe = this.nextRecipe.bind(this);
        this.prevRecipe = this.prevRecipe.bind(this);
        this.state = {
            recipe: {},
            recipes: [],
            count: 0
        }
    }

    componentDidMount() {
        this.props.fetchRecipes()
            .then( response =>
                {this.setState({
                    recipes: Object.values(response.recipes),
                    recipe: Object.values(response.recipes)[0]
                })}
            )
    }

    nextRecipe() {
        
        event.preventDefault()
        // const recIdx = this.state.recipe.id + 1;
        let count = this.state.count += 1;
        // debugger
        this.setState({
            recipe: this.state.recipes[count]
        })
        
    }


    
    prevRecipe() {
        let count = this.state.count -= 1;
        this.setState({
            recipe: this.state.recipes[count]
        })
    }

    render () {
        if (this.props.recipes.length === 0) {
            return null;
        } 
        // debugger;
        const { recipe, recipes } = this.state

        const splashRecipe = recipes[0] || {}
        // debugger;
        return (
            <div>
                <Link to={`/recipes/${splashRecipe.id}`} className="splash" >
                    <img src={splashRecipe.photoUrl} width="100px" height="50px" />
                        <span className="splash-name">
                            <br/>
                            <br />
                            <br/>
                            <div className="splash-title">{splashRecipe.title}</div>                            <br />
                            <div>A simple Dim Sum classic</div>
                            <br />
                            <div className='splash-text'>Daniel Yee</div>
                        </span>
                        <span className="dot">
                            <div className='dot-text'>RECIPE</div>
                            <div className='dot-text'>OF THE DAY</div>
                        </span>
                </Link>
                
                    <div className='carousel'>
                        <button onClick={this.nextRecipe} disabled={recipe.id === recipes.length - 1}>Next</button>
                        <button onClick={this.prevRecipe} disabled={recipe.id === 1}>Prev</button>
                    
                    <Link to={`/recipes/${recipe.id}`} ><img src={recipe.photoUrl} width="500px" heigh="300px"/></Link>
                    </div>
                
            </div>
        )
    }
 
};

export default MainPage;

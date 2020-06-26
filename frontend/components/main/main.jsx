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
            <div className="body">
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
                <button onClick={this.prevRecipe} disabled={recipe.id === 1} id='prev'>&lt;</button>
                <button onClick={this.nextRecipe} disabled={recipe.id === recipes.length} id='next'>&gt;</button>
                    <div className='carousel'>
                        
                        <div className="col">
                            <div className={`cards-slider active-slide-${recipe.id}`}>
                                <div className="cards-slider-wrapper" style={{
                                    'transform': `translateX(-${recipe.id*(100/recipes.length)}%)` 
                                }}>
                                    {
                                    recipes.map((recipe) => 
                                    <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                                    <div className="caro-container"> 
                                        <img src={recipe.photoUrl} id={`card-${recipe.id}`} className="card" width="250px" height="170px" />
                                        <div className='carousel-title'>{recipe.title}</div>
                                        <div className='author-name-c'>By Daniel Yee</div>
                                    </div>
                                    </Link>
                                    )
                                    }
                                    
                                </div>
                            </div> 
                        </div>
                        

                    </div>
                
            </div>
        )
    }
 
};

export default MainPage;

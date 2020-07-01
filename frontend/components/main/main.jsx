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
            count: 2
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchRecipes()
            .then( response =>
                {this.setState({
                    recipes: Object.values(response.recipes),
                    recipe: Object.values(response.recipes)[2]
                })}
            )
    }

    nextRecipe() {
        
        event.preventDefault()
        let count = this.state.count += 1;
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
        const { recipe, recipes } = this.state

        const splashRecipe = recipes[1] || {}
        return (
            <div className="body">
                <Link to={`/recipes/${splashRecipe.id}`} className="splash" >
                    <img src={splashRecipe.photoUrl} width="100px" height="50px" />
                    <div className='splash-wrap'>
                        <div className="splash-name">
                            <br/>
                            <br />
                            <br/>
                            <div className="splash-title">{splashRecipe.title}</div>                            <br />
                            <div>A simple Dim Sum classic</div>
                            <br />
                            <div className='splash-text'>Daniel Yee</div>
                        </div>
                        
                        <div className="dot">
                            <div className='dot-text'>RECIPE</div>
                            <div className='dot-text'>OF THE DAY</div>
                        </div>
                        </div>
                </Link>
                <div className="main-header">
                    <h1>What to Cook This Year</h1>
                    <h4>RECIPES, GUIDES AND MORE FOR THE YEAR OF 2020</h4>
                    <div id="separator-caro"></div>
                    <h3>Dan's Suggestions</h3>
                    <h5>Recipes selected by Daniel Yee, creator of this website.</h5>
                </div>
                
                    <div className='carousel'>
                        <div className="buttons-pos">
                            <button onClick={this.prevRecipe} disabled={recipe.id === 2} id='prev'>&lt;</button>
                            <button onClick={this.nextRecipe} disabled={recipe.id === recipes.length - 1} id='next'>&gt;</button>
                        </div>
                        
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

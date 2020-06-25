import React from 'react';

class RecipePage extends React.Component {
    
    constructor(props) {
        super(props);
        // this.state = this.props.recipe
        // this.recipe = { title: '' };
        
    }

    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.recipeId);
        // this.recipe = this.props.recipe;
    }

    render() {
        // debugger
        let recipe = this.props.recipe || {title: '', ingredients: '', preparation: ''}
        let ingredients = []
        let preparation = []
        if (recipe.ingredients != '') {
            ingredients = recipe.ingredients.map((ingredient, i) =>
                <div className="ingredient" key={i}>{ingredient}</div>
            )
        }
        if (recipe.preparation != '') {
            preparation = recipe.preparation.map((step, i) =>
        <div key={i}>Step {i + 1} <br/> {step}</div>
            )
        }
        
        return (
            <div>
                <div className="recipe-box">
                    <div className="recipe-title">{recipe.title}</div>
                    <div className="author-name">Gilbert Bui</div>
                    <br/>
                    <div className='separator'></div>
                    <br/>
                    <div className="recipe-show">
                        {recipe.summary}
                        <img src={recipe.photoUrl} width="450px" height="320px" />
                    </div>
                    <br/>
                    <br />

                    <div className='separator-recipe'></div>
                    <br />

                    <br />

                    <div className="instructions">
                        <div className="ingredients">INGREDIENTS
                            {ingredients}</div>
                        <div className="preparation">PREPARATION
                            {preparation}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipePage;
import React from 'react';
import CookingNoteFormContainer from '../cooking_notes/cooking_note_form_container';
import CookingNoteIndexContainer from '../cooking_notes/cooking_note_index_container'

class RecipePage extends React.Component {
    
    constructor(props) {
        super(props);
        // this.state = this.props.recipe
        // this.recipe = { title: '' };
        
    }

    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.recipeId);
        window.scrollTo(0, 0);
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
                <div key={i}> <strong>Step {i + 1}</strong><br /><small></small><br /> {step}<br /><br />  </div>
            )
        }
        
        return (
            
                <div className="recipe-box">
                    <div className="recipe-title">{recipe.title}</div>
                    <div className="author-name">Daniel Yee</div>
                    <br/>
                    <div className='separator'></div>
                    <br/>
                    <div className="recipe-show">
                        <div>{recipe.summary}</div>
                        <img src={recipe.photoUrl} width="450px" height="320px" />
                    </div>
                    <br/>
                    <br />

                    <div className='separator-recipe'></div>
                    <br />

                    <br />

                    <div className="instructions">
                        <div className="ingredients">INGREDIENTS
                        <br/>
                        <br />
                            {ingredients}</div>
                        <div className="preparation">
                            <h5>PREPARATION</h5>
                        <br />
                            <br />
                            {preparation}</div>
                    </div>


                    <div className='note-container'>
                        <div className='note-title'>COOKING NOTES</div>
                        <br/>
                        <CookingNoteIndexContainer recipe={recipe} />
                    </div>
                </div>
                

            
        )
    }
}

export default RecipePage;
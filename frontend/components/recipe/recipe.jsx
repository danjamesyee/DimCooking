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
        this.props.fetchSavedRecipes();
        window.scrollTo(0, 0);
        // this.recipe = this.props.recipe;
    }

   

    render() {
        if (!this.props.savedRecipes) return null;
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
        let saveRecipeButton;
        const { currentUser, savedRecipes } = this.props
        let savedRecipesOfUser;
        let loggedIn = <div></div>
        if (!currentUser) {
            savedRecipesOfUser = []
            loggedIn = <div>Please log in to save</div>
        } else {
            savedRecipesOfUser = Object.values(savedRecipes).filter(savedRecipe => savedRecipe.userId = currentUser.id)
        }
        let currentSave = savedRecipesOfUser.find(sr => sr.recipe_id === recipe.id)
        let recipeIds = savedRecipesOfUser.map(sr => sr.recipe_id)
        if (!recipeIds.includes(recipe.id)) {
            saveRecipeButton = <button
                className="save-recipe-button"
                onClick={() => this.props.createSavedRecipe({ recipe_id: recipe.id, cooked: false })}
            ><img src='https://dimcooking-dev.s3-us-west-1.amazonaws.com/icon-bookmark-hover-outline.png' width='12px' height='18px'/>   Save to Recipe Box</button>
        } else {
            saveRecipeButton = <button id="unsaved" onClick={() => this.props.deleteSavedRecipe(currentSave.id)}><img src='https://dimcooking-dev.s3-us-west-1.amazonaws.com/icon-bookmark-hover-fill.png' width='12px' height='18px' />  Saved</button>
        }
        
        return (
            
                <div className="recipe-box">
                    <div className="recipe-title">{recipe.title}</div>
                    <div className="author-name">Daniel Yee</div>
                    <br/>
                    <div className='separator'></div>
                    <br/>
                    <div className='saving'>
                        {saveRecipeButton}
                        {loggedIn}
                    </div>
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
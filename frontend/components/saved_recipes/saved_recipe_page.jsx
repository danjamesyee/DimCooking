import React from 'react';
import { Link } from 'react-router-dom';

class SavedRecipePage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchSavedRecipes();
        this.props.fetchRecipes();
    }

    deleteSavedRecipe(savedRecipeId) {
        this.props.deleteSavedRecipe(savedRecipeId);
    }


    render () {
        if (!this.props.recipes || !this.props.savedRecipes) return null;
        const { currentUser, savedRecipes } = this.props
        let savedRecipesOfUser = Object.values(savedRecipes).filter(savedRecipe => savedRecipe.userId = currentUser.id)
        let recipeIds = savedRecipesOfUser.map(sr => sr.recipe_id)
        let recipes = Object.values(this.props.recipes).filter(recipe => recipeIds.includes(recipe.id))
        
        return (
            <div className="saved-recipes">
                {recipes.map((recipe, idx) => 
                <Link to={`/recipes/${recipe.id}`} key={recipe.id} >
                <div key={idx}>
                    {recipe.title}
                    <img className="saved-photo" src={recipe.photoUrl} width='100px' heigh='50px'/>
                </div></Link>)}
            </div>
        )
    }
}

export default SavedRecipePage;
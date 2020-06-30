import { connect } from 'react-redux';
import React from 'react';
import { fetchRecipe } from '../../actions/recipe_actions';
import { createSavedRecipe,fetchSavedRecipes, deleteSavedRecipe } from '../../actions/saved_recipe_actions'
import RecipePage from './recipe';

const mapStateToProps = (state, ownProps) => ({
    recipe: state.entities.recipes[ownProps.match.params.recipeId],
    savedRecipes: Object.values(state.entities.savedRecipes),
    currentUser: state.entities.users[state.session.id]
});


const mapDispatchToProps = dispatch => ({
    fetchRecipe: (recipeId) => dispatch(fetchRecipe(recipeId)),
    createSavedRecipe: (savedRecipe) => dispatch(createSavedRecipe(savedRecipe)),
    fetchSavedRecipes: () => dispatch(fetchSavedRecipes()),
    deleteSavedRecipe: (savedRecipeId) => dispatch(deleteSavedRecipe(savedRecipeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
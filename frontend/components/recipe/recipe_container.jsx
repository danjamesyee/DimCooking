import { connect } from 'react-redux';
import React from 'react';
import { fetchRecipe } from '../../actions/recipe_actions';
import RecipePage from './recipe';

const mapStateToProps = (state, ownProps) => ({
    recipe: state.recipes[ownProps.match.params.recipeId],
});


const mapDispatchToProps = dispatch => ({
    fetchRecipe: (recipeId) => dispatch(fetchRecipe(recipeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
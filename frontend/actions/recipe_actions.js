import * as RecipeApiUtil from '../util/recipe_util';

export const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const RECEIVE_RECIPE_ERRORS = 'RECEIVE_RECIPE_ERRORS';

const receiveAllRecipes = (recipes) => ({
    type: RECEIVE_ALL_RECIPES,
    recipes
});

const receiveRecipe = recipe => ({
    type: RECEIVE_RECIPE,
    recipe
});

const receiveRecipeErrors = errors => ({
    type: RECEIVE_RECIPE_ERRORS,
    errors
})

export const fetchRecipes = () => dispatch => (
    RecipeApiUtil.fetchRecipes()
        .then(recipes => (dispatch(receiveAllRecipes(recipes))), err => (
            dispatch(receiveRecipeErrors(err.responseJson))
        ))
);

export const fetchRecipe = (recipeId) => dispatch => (
    RecipeApiUtil.fetchRecipe(recipeId)
        .then(recipe => (dispatch(receiveRecipe(recipe))), err => 
            dispatch(receiveRecipeErrors(err.responseJson))
        )
);


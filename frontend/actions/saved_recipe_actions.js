import * as SavedRecipeUtil from '../util/saved_recipe_util';

export const RECEIVE_SAVED_RECIPES = 'RECEIVE_SAVED_RECIPES';
export const RECEIVE_SAVED_RECIPE = 'RECEIVE_SAVED_RECIPE';
export const REMOVE_SAVED_RECIPE = 'REMOVE_SAVED_RECIPE';


const receiveSavedRecipes = (savedRecipes) => ({
    type: RECEIVE_SAVED_RECIPES,
    savedRecipes
});

const receiveSavedRecipe = (savedRecipe) => ({
    type: RECEIVE_SAVED_RECIPE,
    savedRecipe
});

const removeSavedRecipe = (savedRecipeId) => ({
    type: REMOVE_SAVED_RECIPE,
    savedRecipeId
});


export const fetchSavedRecipes = () => dispatch => (
    SavedRecipeUtil.fetchSavedRecipes()
        .then((savedRecipes) => dispatch(receiveSavedRecipes(savedRecipes)))
);

export const fetchSavedRecipe = savedRecipeId => dispatch => (
    SavedRecipeUtil.fetchSavedRecipe(savedRecipeId)
        .then((savedRecipe) => dispatch(receiveSavedRecipe(savedRecipe)))
);

export const createSavedRecipe = savedRecipe => dispatch => (
    SavedRecipeUtil.createSavedRecipe(savedRecipe)
        .then((savedRecipe) => dispatch(receiveSavedRecipe(savedRecipe)))
);

export const deleteSavedRecipe = savedRecipeId => dispatch => (
    SavedRecipeUtil.deleteSavedRecipe(savedRecipeId)
        .then(() => dispatch(removeSavedRecipe(savedRecipeId)))
);

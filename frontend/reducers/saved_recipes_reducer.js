import { RECEIVE_SAVED_RECIPES, RECEIVE_SAVED_RECIPE, REMOVE_SAVED_RECIPE } from '../actions/saved_recipe_actions';



const savedRecipesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_SAVED_RECIPES:
            return action.savedRecipes;
        case RECEIVE_SAVED_RECIPE:
            newState[action.savedRecipe.id] = action.savedRecipe;
            return newState;
        case REMOVE_SAVED_RECIPE:
            delete newState[action.savedRecipeId]
            return newState;
        default:
            return oldState;
    }   
}

export default savedRecipesReducer;
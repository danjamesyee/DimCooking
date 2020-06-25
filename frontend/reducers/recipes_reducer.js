import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE, RECEIVE_RECIPE_ERRORS } from '../actions/recipe_actions';

const recipesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_ALL_RECIPES:
            return action.recipes;
        case RECEIVE_RECIPE:
            newState[action.recipe.id] = action.recipe;
            return newState;
        default:
            return oldState;
    }
}

export default recipesReducer;
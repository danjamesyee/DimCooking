import { combineReducers } from "redux";
import cookingnotesReducer from './cooking_notes_reducer'
import usersReducer from "./users_reducer";
import recipes from "./recipes_reducer";
import savedRecipesReducer from "./saved_recipes_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    cookingnotes: cookingnotesReducer,
    recipes: recipes,
    savedRecipes: savedRecipesReducer
});

export default entitiesReducer;
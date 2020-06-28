import { combineReducers } from "redux";
import cookingnotesReducer from './cooking_notes_reducer'
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    cookingnotes: cookingnotesReducer
});

export default entitiesReducer;
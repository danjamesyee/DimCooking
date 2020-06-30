import React from 'react';
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root'
import { fetchSavedRecipes, fetchSavedRecipe, createSavedRecipe, updateSavedRecipe, deleteSavedRecipe } from './actions/saved_recipe_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.createSavedRecipe = createSavedRecipe;
    window.fetchSavedRecipe = fetchSavedRecipe;
    window.fetchSavedRecipes = fetchSavedRecipes;
    window.deleteSavedRecipe = deleteSavedRecipe;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});
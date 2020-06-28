import React from 'react';
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root'
import {fetchRecipes} from './actions/recipe_actions'
import { fetchNotes, fetchNote, createNote, updateNote, deleteNote } from './util/cooking_note_util'

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
    window.fetchRecipes = fetchRecipes;

    window.createNote = createNote;
    window.fetchNote = fetchNote;
    window.fetchNotes = fetchNotes;
    window.deleteNote = deleteNote;
    window.updateNote = updateNote;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});
import { RECEIVE_ALL_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from '../actions/cooking_note_actions';


const cookingnotesReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_ALL_NOTES:
            return action.cookingnotes;
        case RECEIVE_NOTE:
            newState[action.cookingnote.id] = action.cookingnote;
            return newState;
        case REMOVE_NOTE:
            delete newState[action.cookingnoteId];
            return newState;
        default:
            return oldState; 
    }
};

export default cookingnotesReducer;

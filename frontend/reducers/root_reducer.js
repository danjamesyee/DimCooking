import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import modal from './modal_reducer';
import recipes from './recipes_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    errors,
    modal,
    recipes
});

export default rootReducer;

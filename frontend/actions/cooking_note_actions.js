import * as CookingNoteUtil from '../util/cooking_note_util'

export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

const receiveNotes = (cookingnotes) => ({
    type: RECEIVE_ALL_NOTES,
    cookingnotes
});

const receiveNote = cookingnote => ({
    type: RECEIVE_NOTE,
    cookingnote
});

const removeNote = cookingnoteId => ({
    type: REMOVE_NOTE,
    cookingnoteId
});

export const fetchNotes = () => dispatch => {
    return CookingNoteUtil.fetchNotes()
        .then(cookingnotes => dispatch(receiveNotes(cookingnotes)));
};

export const fetchNote = cookingnoteId => dispatch => {
    return CookingNoteUtil.fetchNote()
        .then(cookingnote => dispatch(receiveNote(cookingnote)));
};

export const createNote = cookingnote => dispatch => {
    return CookingNoteUtil.createNote(cookingnote)
        .then(cookingnote => dispatch(receiveNote(cookingnote)));
};

export const updateNote = cookingnote => dispatch => {
    return CookingNoteUtil.updateNote(cookingnote)
        .then(cookingnote => dispatch(receiveNote(cookingnote)));
};

export const deleteNote = cookingnoteId => dispatch => {
    return CookingNoteUtil.deleteNote(cookingnoteId)
        .then(() => dispatch(removeNote(cookingnoteId)));
};


import { connect } from 'react-redux';
import CookingNoteIndex from './cooking_note_index';
import { fetchNotes, deleteNote } from '../../actions/cooking_note_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        cookingnotes: Object.values(state.entities.cookingnotes).filter(n => n.recipe_id === ownProps.recipe.id),
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchNotes: () => dispatch(fetchNotes()),
    deleteNote: (cookingnoteId) => dispatch(deleteNote(cookingnoteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CookingNoteIndex);
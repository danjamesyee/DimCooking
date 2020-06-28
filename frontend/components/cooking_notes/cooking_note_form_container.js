import { connect } from 'react-redux';
import CookingNoteForm from './cooking_note_form';
import { createNote, fetchNote, updateNote } from '../../actions/cooking_note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        cookingnote: null,
        currentUser: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    createNote: (cookingnote) => dispatch(createNote(cookingnote))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CookingNoteForm));



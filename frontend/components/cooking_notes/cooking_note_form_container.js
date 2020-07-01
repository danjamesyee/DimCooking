import { connect } from 'react-redux';
import CookingNoteForm from './cooking_note_form';
import { createNote } from '../../actions/cooking_note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        cookingnote: { body: '', recipe_id: ownProps.match.params.recipeId },
        currentUser: state.entities.users[state.session.id],
        formType: 'Add Note'
    }
};

const mapDispatchToProps = dispatch => ({
    handleNote: (cookingnote) => dispatch(createNote(cookingnote))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CookingNoteForm));



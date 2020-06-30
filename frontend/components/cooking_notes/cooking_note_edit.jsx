import { connect } from 'react-redux';
import React from 'react';
import { updateNote, deleteNote } from '../../actions/cooking_note_actions';
import CookingNoteForm from './cooking_note_form'

class CookingNoteEdit extends React.Component {


    render() {
        
        let { cookingnote, currentUser, handleEdit, deleteNote, handleNote } = this.props;
        
        return(
            <div>
                    <CookingNoteForm 
                        cookingnote={cookingnote}
                        currentUser={currentUser}
                        formType='Update'
                        handleNote={handleNote}
                        deleteNote={deleteNote}
                        handleEdit={handleEdit}
                    />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    cookingnote: state.entities.cookingnotes[ownProps.cookingnote.id],
    currentUser: state.entities.users[state.session.id],

})


const mapDispatchToProps = dispatch => ({
    handleNote: note => dispatch(updateNote(note)),
    deleteNote: note => dispatch(deleteComment(commentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CookingNoteEdit);
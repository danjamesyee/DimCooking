import { connect } from 'react-redux';
import React from 'react';
import { updateNote, deleteNote } from '../../actions/cooking_note_actions';
import CookingNoteForm from './cooking_note_form'

class CookingNoteEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.cookingnote;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateNote(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        
        let { cookingnote, currentUser, errors } = this.props;
        if (!cookingnote) {
            return null;
        }
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                        className='note-text'
                        value={cookingnote.body}
                        onChange={this.update('body')}
                    />
                    <button type="submit">Update Note</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    cookingnote: state.entities.cookingnotes[ownProps.cookingnote.id],
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.cookingnote
})


const mapDispatchToProps = dispatch => ({
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: note => dispatch(deleteComment(commentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CookingNoteEdit);
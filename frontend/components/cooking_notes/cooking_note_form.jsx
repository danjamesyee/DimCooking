import React from 'react';
import { withRouter } from 'react-router-dom';

class CookingNoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.state = { body: '', recipe_id: this.props.match.params.recipeId}
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNote(this.state);
        this.setState({body: ''})
    }

    render () {
        let username;
        if (!this.props.currentUser) {
            return null;
        } else {
            username = this.props.currentUser.username
        }
        // debugger
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>{username}</div>
                    <textarea 
                        className='note-text' 
                        value={this.state.body} 
                        onChange={this.update('body')} 
                        placeholder="Share your notes with other cooks or leave a private note"/>
                    <br/>
                    <button>Add Note</button>
                </form>
            </div>
        )
    }
}

export default CookingNoteForm;
import React from 'react';

class CookingNoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.state = this.props.cookingnote
        this.hideForm = this.hideForm.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleNote(this.state)
        this.setState({body: ''});
        if (this.props.formType === 'Update') this.props.handleEdit();
    }


    render () {
        let username;
        if (!this.props.currentUser) {
            return <div className="not-logged-note">Please log in to leave a note</div>;
        } else {
            username = this.props.currentUser.username
        }
        return(
            <div>
                <form className= "note-form" onSubmit={this.handleSubmit}>
                    <div>{username}</div>
                    
                    <textarea 
                        className='note-text' 
                        value={this.state.body} 
                        onChange={this.update('body')} 
                        placeholder="Share your notes with other cooks"/>
                    <br/>
                    
                    <button type='submit'>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default CookingNoteForm;
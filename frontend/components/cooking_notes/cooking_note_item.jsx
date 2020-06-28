import React from 'react';
import CookingNoteEdit from './cooking_note_edit';


class CookingNoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {edit: false};
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit() {
        this.setState({ edit: false})
    }

    handleDelete(e) {
        e.preventDefault();
        if (this.props.currentUser.id === this.props.cookingnote.author_id) {
            this.props.deleteNote(this.props.cookingnote.id)
        }
    }

    render() {
        let { cookingnote, currentUser } = this.props;
        let buttons;
        if ( currentUser && currentUser.id === cookingnote.author_id ) { buttons = (
            <div>
                <button onClick={() => this.setState({ edit: true })}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div> )
        } else {
            buttons = <div></div>
        } 

        return (
            <div>
                <div>
                    {!this.state.edit ? (
                        <div>
                            <div>{cookingnote.username}</div>
                            <div>{cookingnote.body}</div>
                            {buttons}
                        </div>
                    ) : (<CookingNoteEdit cookingnote={cookingnote} handleEdit={this.handleEdit}/>)}
                </div>
            </div>
        )
    }
}

export default CookingNoteItem;
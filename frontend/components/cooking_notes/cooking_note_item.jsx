import React from 'react';
import CookingNoteEdit from './cooking_note_edit';


class CookingNoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {edit: false};
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit() {
        this.setState({ edit: false})
    }

    render() {
        let { cookingnote, currentUser, user } = this.props;
        const buttons = (
            <div>
                <button onClick={() => this.setState({ edit: true })}>Edit</button>
            </div>
        )

        return (
            <div>
                
            </div>
        )
    }
}
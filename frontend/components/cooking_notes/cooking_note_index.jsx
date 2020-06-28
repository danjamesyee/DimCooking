import React from 'react';
import CookingNoteItem from './cooking_note_item';
import CookingNoteForm from './cooking_note_form_container';

class CookingNoteIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = { }
        // this.handleEdit = this.handleEdit.bind(this);
    }

    // handleEdit() {
    //     this.setState({ edit: false })
    // }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render () {
        
        // let notes = this.props.cookingnotes.reverse() || []
        // debugger
        let { recipe, cookingnotes, users, deleteNote, currentUser } = this.props;

        return (
            <div>
                <CookingNoteForm />
                {cookingnotes.reverse().map((cookingnote, idx) => 
                    <CookingNoteItem 
                        key={cookingnote.id} 
                        cookingnote={cookingnote} 
                        deleteNote={deleteNote} 
                        user={users[cookingnote.author_id]}
                        currentUser={currentUser}
                    />
                )}
            </div>
        )
    }
}

export default CookingNoteIndex;
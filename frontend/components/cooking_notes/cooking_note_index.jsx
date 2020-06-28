import React from 'react';
import CookingNoteItem from './cooking_note_item';
import CookingNoteForm from './cooking_note_form_container';

class CookingNoteIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }



    componentDidMount() {
        this.props.fetchNotes();
    }

    render () {
        

        let {  cookingnotes, users, deleteNote, currentUser } = this.props;

        return (
            <div>
                <CookingNoteForm />
                {cookingnotes.reverse().map((cookingnote) => 
                    <CookingNoteItem 
                        key={cookingnote.id} 
                        cookingnote={cookingnote} 
                        deleteNote={deleteNote} 
                        
                        currentUser={currentUser}
                    />
                )}
            </div>
        )
    }
}

export default CookingNoteIndex;
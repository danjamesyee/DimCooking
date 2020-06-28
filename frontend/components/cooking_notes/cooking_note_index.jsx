import React from 'react';
import CookingNoteEdit from './cooking_note_edit'
import CookingNoteForm from './cooking_note_form';

class CookingNoteIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = { edit: false }
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit() {
        this.setState({ edit: false })
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render () {
        
        let notes = this.props.cookingnotes.reverse() || []
        // debugger
        return (
            <div>
                {notes.map((note, idx) => 
                <div key={idx}>
                    <div>{note.username}</div>
                    <div>{note.body}</div>
                    <button onClick={() => this.setState({edit: true})}>Edit</button>
                    {this.state.edit ? (
                        <div>
                            <CookingNoteEdit cookingnote={note}/>
                         </div>   
                    ): (<div/>)}
                </div>
                )}
            </div>
        )
    }
}

export default CookingNoteIndex;
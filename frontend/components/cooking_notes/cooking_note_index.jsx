import React from 'react';


class CookingNoteIndex extends React.Component {

    

    componentDidMount() {
        
        this.props.fetchNotes();
    }

    render () {
        
        let notes = this.props.cookingnotes || []
        // debugger
        return (
            <div>
                {notes.map((note, idx) => 
                <div key={idx}>
                    <div>{note.username}</div>
                    <div>{note.body}</div>
                   
                </div>
                )}
            </div>
        )
    }
}

export default CookingNoteIndex;
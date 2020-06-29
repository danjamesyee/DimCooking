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
        let date = cookingnote.created_at;
        let today = new Date().toJSON();
        let timeBetweenMinutes = today.slice(14,16) - date.slice(14,16)
        let timeBetweenHours = today.slice(11,13) - date.slice(11,13);
        let timeBetweenDays = today.slice(8,10) - date.slice(8,10)
        let timeBetweenMonths = today.slice(5,7) - date.slice(5,7)
        let timeBetweenYears = today.slice(0,4) - date.slice(0,4)
        let time;
        if (timeBetweenYears === 0) {
            if (timeBetweenMonths === 0) {
                if (timeBetweenDays === 0) {
                    if (timeBetweenHours === 0) {
                        if (timeBetweenMinutes != 1) {
                            time = `${timeBetweenMinutes} minutes ago`;
                        } else {
                            time = `${timeBetweenMinutes} minute ago`
                        }
                    } else {
                        if (timeBetweenHours != 1) {
                            time = `${timeBetweenHours} hours ago`;
                        } else {
                            time = `${timeBetweenHours} hour ago`;
                        }
                    }
                } else {
                    if (timeBetweenDays != 1) {
                        time = `${timeBetweenDays} days ago`;
                    } else {
                        time = `${timeBetweenDays} day ago`;
                    }
                    
                }
            } else {
                if (timeBetweenMonths != 1) {
                    time = `${timeBetweenMonths} months ago`
                } else {
                    time = `${timeBetweenMonths} month ago`
                }
                
            }
        } else {
            if (timeBetweenYears != 1) {
                time = `${timeBetweenYears} years ago`;
            } else {
                time = `${timeBetweenYears} year ago`;
            }
        }
        return (
            <div>
                <div>
                    {!this.state.edit ? (
                        <div className='note-prof'>
                        <span className="prof-dot"></span>
                        <div className="note-item">
                                <h4>{cookingnote.username}  <div className="time">|&nbsp;&nbsp;{time}</div></h4>
                            
                            <h5>{cookingnote.body}</h5>
                            {buttons}
                        </div>
                        </div>
                    ) : (<CookingNoteEdit cookingnote={cookingnote} handleEdit={this.handleEdit}/>)}
                </div>
                <br/>
            </div>
        )
    }
}

export default CookingNoteItem;
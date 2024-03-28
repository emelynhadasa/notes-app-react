import React from "react";
import NotesList from "./NotesList";
import NoteInput from "./NotesInput";
import { showFormattedDate } from "../utils";
import { getInitialData } from "../utils";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
    
    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: showFormattedDate(Date()),
                    }
                ]
            }
        });
    }

    render() {
        return(
            <div className="body">
                <div className="note-app__header">
                    <h1>Notes</h1>
                </div>
    
                <div className="note-app__body">
                    <h2>Add Notes</h2>
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2>Active Notes</h2>
                    <div className="note-item">
                        <NotesList Notes={this.state.notes} onDelete={this.onDeleteHandler} />
                    </div>
                </div>
            </div>
        );
    }
}

export default NotesApp;
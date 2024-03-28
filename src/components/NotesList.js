import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ Notes, onDelete }) {
    return(
        <div className="notes-list">
            {
                Notes.length ? (
                    Notes.map((note) => (
                        <NotesItem 
                        key={note.id}
                        id={note.id} 
                        onDelete={onDelete}
                        {...note} />
                    ))
                ) : (
                    <p className="notes-list__empty-message">Empty Notes</p>
                )
            }
        </div>
    );
}

export default NotesList;
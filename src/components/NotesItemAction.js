import React from "react";

function NotesItemAction({ id, onDelete }) {
    return(
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
            <button className="note-item__archive-button">Archive</button>
        </div>
    );
}

export default NotesItemAction;
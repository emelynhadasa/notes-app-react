import React from "react";
import NotesItemHeader from "./NotesItemHeader";
import NotesItemBody from "./NotesItemBody";
import NotesItemAction from "./NotesItemAction";

function NotesItem({ title, createdAt, body, id, onDelete}) {
    return(
        <div className="note-item">
            <NotesItemHeader title={title} createdAt={createdAt} />
            <NotesItemBody body={body} />
            <NotesItemAction id={id} onDelete={onDelete} />
        </div>
    );
}

export default NotesItem;
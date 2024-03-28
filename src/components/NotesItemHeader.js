import React from "react";
import { showFormattedDate } from "../utils";

function NotesItemHeader({ title, createdAt}) {
    return(
        <div className="header">
            <h4 className="note-item__title">{title}</h4>
            <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        </div>
    );
}

export default NotesItemHeader;
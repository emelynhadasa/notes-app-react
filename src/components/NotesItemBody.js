import React from 'react';

function NotesItemBody({ body }) {
    return(
        <div className='note-app__body'>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NotesItemBody;
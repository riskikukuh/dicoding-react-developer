import React from "react";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

function NotesBody({ notes, addNote, keywordSearch, onDelete, onMoveToActive, onArchive }) {
    return (
        <div className="note-app__body">
            <NotesForm addNote={addNote} />
            <NotesList notes={notes} keywordSearch={keywordSearch} onDelete={onDelete} onMoveToActive={onMoveToActive} onArchive={onArchive} />
        </div>
    )
}

export default NotesBody;
import React from "react";
import NoteItem from "./NoteItem";

function ActiveNotesList({ notes, keywordSearch, onDelete, onArchive }) {
    let activeNotes = notes.filter((note) => !note.archived);
    if (keywordSearch) {
        activeNotes = activeNotes.filter((note) => note.title.toLowerCase().includes(keywordSearch.toLowerCase()));
    }
    if (activeNotes.length === 0) {
        return (
            <p className="notes-list__empty-message">Empty notes</p>
        )
    }
    return (
        <div className="notes-list">
            {
                activeNotes.map((note) => (
                    <NoteItem key={note.id} onDelete={onDelete} onArchive={onArchive} { ...note } />
                ))
            }
        </div>
    )
}

export default ActiveNotesList;
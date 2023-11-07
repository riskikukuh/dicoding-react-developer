import React from "react";
import NoteItem from "./NoteItem";

function ArchiveNotesList({ notes, keywordSearch, onDelete, onMoveToActive }) {
    let archiveNotes = notes.filter((note) => note.archived);
    if (keywordSearch) {
        archiveNotes = archiveNotes.filter((note) => note.title.toLowerCase().includes(keywordSearch.toLowerCase()));
    }
    if (archiveNotes.length === 0) {
        return (
            <p className="notes-list__empty-message">Empty notes</p>
        )
    }
    return (
        <div className="notes-list">
            {
                archiveNotes.map((note) => (
                    <NoteItem key={note.id} onDelete={onDelete} onMoveToActive={onMoveToActive} { ...note } />
                ))
            }
        </div>
    )
}

export default ArchiveNotesList;
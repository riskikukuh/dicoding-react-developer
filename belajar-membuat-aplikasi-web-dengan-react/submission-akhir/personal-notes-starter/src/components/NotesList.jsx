import React from "react";
import ActiveNotesList from "./ActiveNotesList";
import ArchiveNotesList from "./ArchiveNotesList";

function NotesList({ notes, keywordSearch, onDelete, onArchive, onMoveToActive }) {
    return (
        <>
            <h2>Active Notes</h2>
            <ActiveNotesList notes={notes} keywordSearch={keywordSearch} onDelete={onDelete} onArchive={onArchive} />
            <h2>Archive Notes</h2>
            <ArchiveNotesList notes={notes} keywordSearch={keywordSearch} onDelete={onDelete} onMoveToActive={onMoveToActive} />
        </>
    )
}

export default NotesList;
import React from "react";
import NotesSearchBar from "./NotesSearchBar";

function NotesNavBar({onSearch}) {
    return (
        <nav className="note-app__header">
            <h1>Oh My Notes</h1>
            <NotesSearchBar onSearch={onSearch} />
        </nav>
    )
}

export default NotesNavBar;
import React from "react";
import { getInitialData } from "../utils";
import NotesNavBar from "./NotesNavBar";
import NotesBody from "./NotesBody";

class NotesApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        }

        this.onSearchHandler = this.onSearchHandler.bind(this);

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onMoveToActiveHandler = this.onMoveToActiveHandler.bind(this);
    }

    onSearchHandler(keyword) {
        this.setState(() => {
            return {
                keywordSearch: keyword,
            }
        })
    }

    onAddNoteHandler({ title, note }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body: note,
                        createdAt: new Date(),
                        archived: false,
                    }
                ]
            };
        })
    }

    onArchiveNoteHandler(noteId) {
        const index = this.state.notes.findIndex((note) => note.id === noteId);
        if (index < 0) return;
        const notes = this.state.notes.map((note) => {
            if (note.id === noteId) {
                note.archived = true
            }
            return note;
        });
        this.setState({ notes });
    }

    onDeleteNoteHandler(noteId) {
        const notes = this.state.notes.filter(note => note.id !== noteId);
        this.setState({ notes });
    }

    onMoveToActiveHandler(noteId) {
        const index = this.state.notes.findIndex((note) => note.id === noteId);
        if (index < 0) return;
        const notes = this.state.notes.map((note) => {
            if (note.id === noteId) {
                note.archived = false
            }
            return note;
        });
        this.setState({ notes });
    }

    render() {
        return (
            <div className="contact-app">
                <NotesNavBar onSearch={this.onSearchHandler} />
                <NotesBody notes={this.state.notes} keywordSearch={this.state.keywordSearch} addNote={this.onAddNoteHandler} onDelete={this.onDeleteNoteHandler} onMoveToActive={this.onMoveToActiveHandler} onArchive={this.onArchiveNoteHandler} />
            </div>
        )
    }
}

export default NotesApp;
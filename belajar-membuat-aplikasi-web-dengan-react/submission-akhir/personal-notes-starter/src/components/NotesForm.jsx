import React from "react";

class NotesForm extends React.Component {

    constructor(props) {
        super(props);

        this.titleLimit = 50;

        this.state = {
            title: '',
            note: '',
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onNoteFormSubmit = this.onNoteFormSubmit.bind(this);
    }

    onTitleChange(event) {
        this.setState(() => {
            if (event.target.value.length > this.titleLimit) return;
            return {
                title: event.target.value,
            }
        });
    }

    onNoteChange(event) {
        this.setState(() => {
            return {
                note: event.target.value,
            }
        });
    }

    clearForm() {
        this.setState(() => {
            return {
                title: "",
                note: "",
            }
        });
    }

    onNoteFormSubmit(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.clearForm();
    }

    render() {
        return (
            <div className="note-input">
                <h2>Add Note</h2>
                <form onSubmit={this.onNoteFormSubmit}>
                    <p className="note-input__title__char-limit">Character remain: {this.titleLimit - this.state.title.length}</p>
                    <input type="text" onChange={this.onTitleChange} value={this.state.title} placeholder="Title Note ..." />
                    <textarea rows="10" placeholder="Your notes here ..." onChange={this.onNoteChange} value={this.state.note}></textarea>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default NotesForm;
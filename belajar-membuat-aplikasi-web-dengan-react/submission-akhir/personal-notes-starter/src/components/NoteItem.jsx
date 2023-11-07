import React from "react";
import { showFormattedDate } from "../utils";

function NoteItem({ id, title, body, createdAt, archived, onArchive, onMoveToActive, onDelete }) {

    function onArchiveButtonClick() {
        if (archived) {
            onMoveToActive(id);
        } else {
            onArchive(id);
        }
    }

    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">
                    {body}
                </p>
            </div>
            <div className="note-item__action">
                <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
                <button className="note-item__archive-button" onClick={() => onArchiveButtonClick()}>{archived ? "Move to Active" : "Archive"}</button>
            </div>
        </div>
    )
}

export default NoteItem;
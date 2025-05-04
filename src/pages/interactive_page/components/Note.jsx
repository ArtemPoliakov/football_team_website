import React from 'react'
import classes from './../interactive_page_styles.module.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Note = (props) => {
    const { note, setSelectedNote, deleteNote } = props;
    return (
        <div className={classes["note-container"]}>
            <div
                className={classes["note"]}
                onClick={() => setSelectedNote(note)}
                >
                    {note.title}
            </div>
            <FontAwesomeIcon
                className={classes["delete-note-icon"]}
                icon={faTrash}
                onClick={() => deleteNote(note.title)}
            />
        </div>
    )
}

export default Note
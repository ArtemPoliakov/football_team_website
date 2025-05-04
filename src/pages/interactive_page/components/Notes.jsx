import React, { useEffect, useState } from 'react'
import NoteForm from './NoteForm';
import Note from './Note';
import classes from './../interactive_page_styles.module.css'
const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

    useEffect(() => {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
          setNotes(JSON.parse(storedNotes));
        }
    }, []);

    const addOrUpdateNote = (note) => {
        setNotes((prevNotes) => {
            const updated = [...prevNotes.filter(n => n.title !== note.title), note];
            localStorage.setItem('notes', JSON.stringify(updated));
            return updated;
        });
        setSelectedNote(null);
    };
    
    const deleteNote = (noteTitle) => {
        setNotes((prevNotes) => {
            const updated = prevNotes.filter(n => n.title !== noteTitle);
            localStorage.setItem('notes', JSON.stringify(updated));
            return updated;
        });
        setSelectedNote(null);
    };
    
    return (
      <div className={classes["notes-container"]}>
           <NoteForm note={selectedNote} addNote={addOrUpdateNote} /> 
        
           <div className={classes["notes-list-container"]}>
              {notes.map((note) => (
                <Note note={note} setSelectedNote={setSelectedNote} deleteNote={deleteNote} />
              ))}
           </div>
      </div>
  )
}

export default Notes
import React, { useState, useEffect, useRef } from 'react';
import classes from './../interactive_page_styles.module.css'
const NoteForm = (props) => {
  const { note, addNote } = props;
  const [content, setContent] = useState('');
  const textAreaRef = useRef(null);

  useEffect(() => {
    setContent(note?.content || '');

    setTimeout(() => {
        if (textAreaRef.current) {
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
        }
    }, 0);
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = note?.title || new Date().toLocaleString();
    addNote({ title, content });
    setContent('');
     if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.rows = 3; 
     }
  };

  return (
      <form onSubmit={handleSubmit} className={classes["note-form"]}>
          <label htmlFor="noteInput" className={classes["note-form__label"]}>
            {note?.title == null ? 'Add a new note' : note.title}
          </label>
          <br/>
          <textarea
                ref={textAreaRef}
                className={classes["note-form__input"]}
                id="noteInput"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value);
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + 'px';
                }}
                rows={3}
                style={{ resize: 'none', overflow: 'hidden' }}
                required
          />
        <button 
        className={classes["notes__form-submit-button"]}
        type="submit">Submit</button>
      </form>
  );
};

export default NoteForm;
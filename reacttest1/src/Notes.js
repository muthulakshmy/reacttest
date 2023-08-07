import React from 'react';
import { useState } from 'react';

export default function Notes() {
  const [Notes, setNotes] = useState([]);
  const [Title, setTitle] = useState('');
  const [Des, setDes] = useState([]);
  const [DesTitle, setDesTitle] = useState('');

  function handleDelete(item) {
    const deleteList = Notes.filter((note)=>note.id!==item.id);
    setNotes(deleteList);
  }

  function handleEdit(item) {
    const edit=Notes.filter((note)=>note.id===item.id)
    // e.target.value=edit
    setNotes(edit)
    return(
        <input value={item}></input>
    )
  }

  return (
    <div id="notes">
      <h1>Notes Taking App</h1>
      <input id="input" value={Title} onChange={(e) => setTitle(e.target.value)} />
      <textarea onChange={(e) => setDes(e.target.value)} />
      <button
        id="save"
        onClick={() => {
          setTitle('');
          setNotes([
            {
              id: Notes.length,
              text: Title,
            },
            ...Notes,
          ]);
        }}
      >Save</button>
      <ul>
        {Notes.map((item) => (
          <li key={item.id}>
            {item.text}
            <button id="edit" onClick={()=>handleEdit(item)}>Edit</button>
            <button id="delete" onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

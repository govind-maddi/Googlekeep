import React, { useContext } from 'react'
import NoteTakerForm from './notes_comp/NoteTakerForm'

import './comp_styles/notes.css';
import Note from './notes_comp/Note';
import { GlobalNotesList } from '../Layout';

function Notes() {

  const noteslist = useContext(GlobalNotesList);

  return (
    <div id='notes_outer_cont'>
      <div id='notes_inner_cont'>
        <NoteTakerForm/>
        
        <section id='note_list_cont'>
          {
            noteslist.map((item) => {
              return <Note item={item} />
            })
          }
        </section>

      </div>
      <div id='notes_grid_cont'>
        
      </div>
    </div>
  )
}

export default Notes
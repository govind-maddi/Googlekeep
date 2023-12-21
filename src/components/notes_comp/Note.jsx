import React from 'react'

import PaletteLine from 'remixicon-react/PaletteLineIcon';
import More2LineIcon from 'remixicon-react/More2LineIcon';

import './notes_comp_styles/note.css';

function Note( { item } ) {
  return (
    <div id='note_cont'>
            <article id='title'>{item.title}</article>
            <article> {item.note} </article>

            <section id='note_settings_cont'>
                <section id='note_icon_cont'>
                    <figure className='note_icon'>
                        <PaletteLine size={'20px'}/>
                    </figure>
                    
                    <figure className='note_icon'>
                        <More2LineIcon size={'20px'}/>
                    </figure>
                </section>
            </section>
    </div>
  )
}

export default Note
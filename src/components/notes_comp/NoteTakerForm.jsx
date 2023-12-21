import React, { useContext, useState } from 'react'

import { SetGlobalNotesList } from '../../Layout';

import colors from '../../util/colors'

import PaletteLine from 'remixicon-react/PaletteLineIcon';
import More2LineIcon from 'remixicon-react/More2LineIcon';

import './notes_comp_styles/notetakerform.css';

function NoteTakerForm() {

    const [ title,setTilte ] = useState('');
    const [ note,setNote ] = useState('');
    const [ color,setColor ] = useState(null);

    const [ tempinputflag,setTempInputFlag ] = useState(true);

    const setGlobalNotesList = useContext(SetGlobalNotesList);


    const handleTempFlag = (value) => {

        if(value === 'open')
            setTempInputFlag(false);
        else
            setTempInputFlag(true);
    }

    const handleTitleChange = (e) => {
        setTilte(e.target.value);
    }

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    }

    const addTo = () => {
        if( title !== '' && note !== '' )
        {
            setGlobalNotesList((prevGlobalNodesList) => {
                return [ { 'title':title,'note':note }, ...prevGlobalNodesList ];
            })
        }
    }

  return (
    <div id='form_cont'>
        
        {
            tempinputflag &&
            <input type="text" placeholder='Take a note...' id='temp_input' onClick={() => handleTempFlag('open')}/> 
        }

        { 
            !tempinputflag &&
            <form id='note_create_form'>
                <input type="text" placeholder='Title' id='input1' onChange={handleTitleChange}/>
                <input type="text" placeholder='Take a note...' id='input2' onChange={handleNoteChange} autoFocus/>

                <section id='form_settings_cont'>
                    <section id='form_icon_cont'>
                        <figure className='icon'>
                            <PaletteLine size={'20px'}/>
                        </figure>

                        <figure className='icon'>
                            <More2LineIcon size={'20px'}/>
                        </figure>
                    </section>

                    <section id='addclose_cont'>
                        <header className='addclose' onClick={addTo}>Add</header>
                        <header className='addclose' onClick={() => handleTempFlag('close')}>Close</header>
                    </section>
                </section>
            </form> 
        }
    </div>
  )
}

export default NoteTakerForm
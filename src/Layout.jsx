import React, { createContext, useEffect, useState } from 'react'

//app layout components
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import SideMenu from './components/SideMenu'


export const GlobalNotesList = createContext();
export const SetGlobalNotesList = createContext();

function Layout() {

  const [ notes,setNotes ] = useState([]);

  useEffect(() => {
      if( notes.length > 0 )
      {
        localStorage.setItem('list',JSON.stringify(notes));
      }
      console.log(notes);
  },[ notes ])

  return (
    <div>

        <GlobalNotesList.Provider value={notes}>
          <SetGlobalNotesList.Provider value={setNotes}>

        {/* Navigation */}
        <Navbar/>

        <div style={{display:'flex'}}>
        
            {/* Menu List*/}
            <SideMenu/>
            
            {/* Notes dashboard */}
            <Notes/>

        </div>

          </SetGlobalNotesList.Provider>
        </GlobalNotesList.Provider>
    </div>
  )
}

export default Layout
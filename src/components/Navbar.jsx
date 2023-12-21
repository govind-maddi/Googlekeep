import React from 'react'

//navbar components with states.
import Hamburger from './navbar_comp/Hamburger'
import Search from './navbar_comp/Search'
import Theme from './navbar_comp/Theme'
import NotesLayout from './navbar_comp/NotesLayout'

//icon components
import GridFillIcon from 'remixicon-react/GridFillIcon'
import AccountCircleFillIcon from 'remixicon-react/AccountCircleFillIcon'

//css 
import './comp_styles/navbar.css';

function Navbar() {
  return (
    <nav id='navbar_cont'>
        <section id='navmenulogo_cont'>
            <Hamburger/>

            <section id='logo'>
                <figure>
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="keep_logo" />    
                </figure>
                <header>Keep</header>
            </section>
        </section>

        <Search/>

        <section id='design_cont'>
            <Theme/>

            <NotesLayout/>
        </section>

        <section id='profile_cont'>
            <figure id='more_cont'>
                <GridFillIcon size={'22px'} />
            </figure>
            
            <figure id='profile_icon_cont'>
                <AccountCircleFillIcon size={'22px'} />
            </figure>
        </section>        
    </nav>
  )
}

export default Navbar
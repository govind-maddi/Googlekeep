import React from 'react'

import MenuFillIcon from 'remixicon-react/MenuFillIcon';

import './navbar_comp_styles/hamburger.css';

function Hamburger() {
  return (
    <figure id='hamburger_cont'>
      <MenuFillIcon size={'26px'} />
    </figure>
  )
}

export default Hamburger
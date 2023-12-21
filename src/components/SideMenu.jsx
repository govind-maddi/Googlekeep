import React from 'react'

import LightbulbLineIcon from 'remixicon-react/LightbulbLineIcon'
import Notification3LineIcon from 'remixicon-react/Notification3LineIcon'
import PencilLineIcon from 'remixicon-react/PencilLineIcon'
import InboxArchiveLineIcon from 'remixicon-react/InboxArchiveLineIcon'
import DeleteBin6LineIcon from 'remixicon-react/DeleteBin6LineIcon'

import './comp_styles/sidemenu.css';

function SideMenu() {
  return (
    <div id='sidemenu_cont'>
      <ul>
        <li className='menulist_item' id='focus_item'>
          <LightbulbLineIcon size={'24px'} className='menulist_icon'/>
          Notes
        </li>
        <li className='menulist_item'>
          <Notification3LineIcon size={'24px'} className='menulist_icon'/>
          Reminders
        </li>
        <li className='menulist_item'>
          <PencilLineIcon size={'24px'} className='menulist_icon'/>
          Edit Labels
        </li>
        <li className='menulist_item'>
          <InboxArchiveLineIcon size={'24px'} className='menulist_icon'/>
          Archieves
        </li>
        <li className='menulist_item'>
          <DeleteBin6LineIcon size={'24px'} className='menulist_icon'/>
          Bin
        </li>
      </ul>
    </div>
  )
}

export default SideMenu
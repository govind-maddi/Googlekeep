import React from 'react'

import SearchLineIcon from 'remixicon-react/SearchLineIcon'

import './navbar_comp_styles/search.css';

function Search() {
  return (
    <div id='search_cont'>
      <SearchLineIcon size={'22px'} id='search_icon'/>

      <input type="text" placeholder='Search'/>
    </div>
  )
}

export default Search
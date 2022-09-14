import React from 'react'

export default function Nav() {
  return (
    <div className='nav'>
    <div className='nav_logo'>
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09z" clip-rule="evenodd"></path></svg>
    </div>
    <div className='nav_search'>
        <input type="text" name="search" placeholder="Type something to search from the posts"/>
    </div>
    <div className='nav_bell'>
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16a2 2 0 002-2H6a2 2 0 002 2z"></path><path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 004 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 00-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0113 6c0 .88.32 4.2 1.22 6z" clip-rule="evenodd"></path></svg>
    </div>
    <div className='nav_profile'>
        
    </div>
    </div>
  )
}

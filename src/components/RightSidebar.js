import React from 'react'

export default function RightSidebar() {
    const clubs = [
        { to: 'e/programming', text:"e/programming"},
        { to: 'e/dance', text:"e/dance"},
        { to: 'e/drama', text:"e/drama"},
        { to: 'e/art', text:"e/art"},
        { to: 'e/debate', text:"e/debate"}
      ]
  return (
    <div className='clubs_popular'>
      <div className='club_title'>
        <h1>Popular Clubs</h1>
      </div>
      <div className='clubs_names'>
        <ul className='names_list'>
            {clubs.map(club => (
                <li><a href={club.to}>{club.text}</a></li>
            ))}
        </ul>
      </div>
    </div>
  )
}

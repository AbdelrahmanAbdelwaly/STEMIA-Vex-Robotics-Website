import React from 'react'
import './teams.css'

const Teams = () => {
  return (
    <div className='Teams_Section'>
      <h2 className='Title'>Explore the 🐐 teams!</h2>
      <p className='Subtitle'>Teams competing in the 2024-2025 High Stakes Competition.</p>

      <div className='Teams_List'>
        <a href='#'>
          <div className='Team_box'>
            <div className='Teams_Images t1'></div>
            <p className='Teams_Descriptions'>Team 1</p>
          </div>
        </a>
        <a href='#'>
          <div className='Team_box'>
            <div className='Teams_Images t2'></div>
            <p className='Teams_Descriptions'>Team 2</p>
          </div>
        </a>
        <a href='#'>
          <div className='Team_box'>
            <div className='Teams_Images t3'></div>
            <p className='Teams_Descriptions'>Team 3</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Teams

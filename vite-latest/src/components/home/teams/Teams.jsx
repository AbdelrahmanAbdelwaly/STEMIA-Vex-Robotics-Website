import React from 'react'
import './teams.css'

const Teams = () => {
  return (
    <div className='Teams_Section'>
      <h2 className='Title'>Explore the 🐐's</h2>
      <p className='Subtitle'>Teams competing in the 2024-2025 High Stakes Competition.</p>

      <div className='Teams_List'>
        <a href='#'>
          <div className='Team_box'>
            <div className='Teams_Images t1'></div>
            <p className='Teams_Descriptions'>44519A</p>
          </div>
        </a>
        <a href='#'>
          <div className='Team_box'>
            <div className='Teams_Images t2'></div>
            <p className='Teams_Descriptions'>Mysterious</p>
          </div>
        </a>
        <a href='#'>
          <div className='Team_box'>
            <div className='Teams_Images t3'></div>
            <p className='Teams_Descriptions'>45519B</p>
          </div>
        </a>
      </div>
      <button className='All_Teams'>View All Teams</button>
    </div>
  )
}

export default Teams

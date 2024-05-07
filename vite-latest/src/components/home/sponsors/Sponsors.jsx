import React from 'react'
import './sponsors.css'

const Sponsors = () => {
  return (
    <div className='Sponsors_Section'>
      <p className='Sponsors_Title'>Thanks to our Sponsors!</p>
      <div className='sponsors_list'>
        <a target='_blank' href='https://steminnovationacademy.com/'><div className='sponsor s1'></div></a>
        <a target='_blank' href='https://denimnsmith.com/'><div className='sponsor s2'></div></a>
      </div>
    </div>
  )
}

export default Sponsors

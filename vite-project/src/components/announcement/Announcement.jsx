import React from 'react'
import "./announcement.css"

const Announcement = () => {
  return (
    <><a target="_blank" className='Announcement_Container_Desktop' href='https://steminnovationacademy.com/'>
      <div className='Announcement_Title_Box'>
        <svg className='Announcement_Symbol' width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#ai-generation-icon_svg__a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.886 0a.5.5 0 0 1 .39.188l2 2.5a.5.5 0 0 1 0 .624l-2 2.5a.5.5 0 0 1-.78 0l-2-2.5a.5.5 0 0 1 0-.624l2-2.5a.5.5 0 0 1 .39-.188Zm-1.36 3 1.36 1.7 1.36-1.7-1.36-1.7-1.36 1.7Zm-6.67-.068a.6.6 0 0 1 1.06 0l1.746 3.292 3.292 1.746a.6.6 0 0 1 0 1.06l-3.292 1.745-1.745 3.293a.6.6 0 0 1-1.06 0L4.11 10.775.819 9.03a.6.6 0 0 1 0-1.06L4.11 6.225l1.745-3.293Zm.53 1.135L4.938 6.801a.6.6 0 0 1-.25.25L1.955 8.5l2.734 1.45a.6.6 0 0 1 .249.249l1.45 2.734 1.449-2.734a.6.6 0 0 1 .25-.25L10.818 8.5 8.085 7.05a.6.6 0 0 1-.249-.249l-1.45-2.734Zm8 6.433a.5.5 0 1 0-1 0V12h-1.5a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V13h1.5a.5.5 0 1 0 0-1h-1.5v-1.5Z" fill="url(#ai-generation-icon_svg__b)"></path></g><defs><linearGradient id="ai-generation-icon_svg__b" x1="8.443" y1="0" x2="8.443" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#fcb900"></stop><stop offset="1" stop-color="#00D4FF"></stop></linearGradient><clipPath id="ai-generation-icon_svg__a"><path fill="#fff" transform="translate(.5)" d="M0 0h16v16H0z"></path></clipPath></defs></svg>
        <b className='Announcement_Title'>Visit Our School Website</b>
        <p className='Announcement_Subtitle'>Uncover What Makes Our School Unique.</p>
        <svg class="arrow-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="arrow-icon__tip" d="M8 15L14 8.5L8 2" stroke="currentColor" stroke-width="1" />
          <line class="arrow-icon__line" x1="13" y1="8.5" y2="8.5" stroke="currentColor" stroke-width="1" />
        </svg>
      </div>
    </a>
    <a  target="_blank" className='Announcement_Container_Mobile' href='https://steminnovationacademy.com/'>
      <b className='Announcement_Title'>Visit Our School <svg class="arrow-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="arrow-icon__tip" d="M8 15L14 8.5L8 2" stroke="currentColor" stroke-width="1" />
        <line class="arrow-icon__line" x1="13" y1="8.5" y2="8.5" stroke="currentColor" stroke-width="1" />
      </svg></b>
      <p className='Announcement_Subtitle'>Uncover What Makes Our School Unique.</p>
    </a></>
  )
}

export default Announcement
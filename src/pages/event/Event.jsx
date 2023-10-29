import React from 'react'
import './Event.css'
import { Rule } from '/src/components'
import { Link } from 'react-router-dom'

function Event() {
  return (
    <>
      <h1 className='middle'>Event page in developement</h1>
      <Link to="/inspiring-session" className='middle'><button>Inspiring Session</button></Link>
    </>
  )
}

export default Event

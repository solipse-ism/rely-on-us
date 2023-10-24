import React from 'react'
import './Event.css'
import { Rule } from '/src/components'

function Event() {
  return (
    <>
      <Inspiring />
      <Rule />
      <h3 className='insp-slogan'>BECOME INSPIRED!</h3>
      <Rule />
      <section className="insp-breadcrumb">
        <a href="#insp-join" className="btn btn--primary">Why Join</a>
        <a href="#insp" className="btn btn--primary">The Session</a>
        <a href="#insp-prev-session" className="btn btn--primary">Previous Session</a>
      </section>
      <Benefit />
      <Session />
      <PrevSession />
    </>
  )
}
function Inspiring() {
  return(
    <>
      <div className="insp-hero"></div>
      <h1>Inspiring Session Ft.</h1>
      <h2 className='session-leader'>Tori</h2>
      <p className="insp-subject" data-subject="Econnomic">ECONOMICS:</p>
      <h3 className="insp-topic">Is taxation ethical, or is it comparable to the state cutting off your limbs?</h3>
      <img src="" alt="Session Leader Photo" />
    </>
  )
}
function Benefit() {
  return(
    <>
      <h1>Why Join The Session</h1>
    </>
  )
}
function Session() {
  return(
    <>
      <h1>Inspiring Session</h1>
    </>
  )
}
function PrevSession() {
  return(
    <>
      <h1>Previous Recording</h1>
    </>
  )
}

export default Event

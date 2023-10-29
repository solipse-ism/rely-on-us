import React from 'react'
import './inspiring.css'
import { Rule } from '/src/components'
import sessionLeader01 from '/src/assets/image/session-leader-tori.png'
import inspBg from '/src/assets/image/insp-background.png'

function Inspiring() {
  return (
    <>
      <div className="insp-hero-container">
      </div>
      <section className="insp-intro section-padding">
        <div className="insp-intro-left">
          <h1 className="insp-intro__h1">Inspiring Session Ft.</h1>
          <h2 className="session-leader">Tori</h2>
          <p className="insp-subject" data-date="02/11/2023">2nd November 2023:</p>
          <h3 className="insp-topic">Is taxation ethical, or is it comparable to the state cutting off your limbs?</h3>
        </div>
        <div className="insp-intro-middle">
          <div className="insp-session-leader__img">
            <img src={sessionLeader01} alt="Session Leader Photo" />
          </div>
        </div>
        <div className="insp-intro-right">
          <div className="insp-count-container">
            <p className="insp-main-count">01</p>
            <p className="insp-count">02</p>
            <p className="insp-count">03</p>
            <p className="insp-logistic"><strong>A206</strong> <br></br>12:00-12:25</p>
          </div>
        </div>
      </section>
      <Rule />
      <section className="insp-breadcrumb">
        <a href="#insp-join" className="btn btn--primary-100">Why Join</a>
        <a href="#insp" className="btn btn--primary-100">The Session</a>
        <a href="#insp-prev-session" className="btn btn--primary-100">Previous Session</a>
      </section>
      <Session />
      <Benefit />
      <Rule />
      <PrevSession />
    </>
  )
}
function Session() {
  return(
    <section id="insp" className="insp">
      <img src={inspBg} className="insp-background" alt="" />
    <div className="session-right">
      <h1 className="session__h1">Inspiring Session</h1>
      <p className="session__p">is a student-led session where we invite a “session leader” from Shrewsbury community to talk about: </p>
      <ul className="session__ul">
        <li>stories and visions that led them to current success</li>
        <li>advice on academic and extracurricular activities</li>
        <li>an interesting topic beyond IGCSE/A-level</li>
      </ul>
    </div>
    </section>
  )
}
function Benefit() {
  return(
    <section id="insp-join" className="insp-benefit section-padding">
      <h1 className='insp-benefit__h1'>Why Attend The Session?</h1>
      <ul className="insp-benefit__ul">
        <li className="insp-benefit__card">Learn from visionaries and top achievers</li>
        <li className="insp-benefit__card">Discover the best approach to benefit from the opportunities available</li>
        <li className="insp-benefit__card">Connect with Shrewsbury’s brightest minds</li>
        <li className="insp-benefit__card">Discover the spark of inspiration</li>
        <li className="diploma">Get your diploma ticks!</li>
        <li className="insp-benefit__card">Elevate the educational experience beyond the exam syllabus</li>
        <li className="insp-benefit__card">Forge a strong and supportive community</li>
        <li className="insp-benefit__card">High Quality resources and a medium to exchange perspectives within the school </li>
      </ul>
    </section>
  )
}
function PrevSession() {
  return(
    <section id="insp-prev-session" className='insp-previous section-padding'>
      <h1 className='insp-previous__h1'>Watch Previous Session</h1>
      <ul className="insp-previous__ul">
        <li className="insp-previous__li">
        <p>
          2nd November 2023 - <strong>Tori (Class of 2024)</strong> <br /><br />
          Is Taxation Ethical, or is it Comparable to the State Cutting off Your Limbs? <br /> <br />
          <strong>WATCH HERE</strong>: Pending for session
        </p>
        </li>
        <li className="insp-previous__li">
        <p>
          16th November 2023 - <strong>Lisa (Class of 2024)</strong> <br /><br />
          Topic to be  <br /> <br />
          <strong>WATCH HERE</strong>: Pending for session
        </p>
        </li>
      </ul>
    </section>
  )
}

export default Inspiring
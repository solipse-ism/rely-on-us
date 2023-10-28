import React from 'react'
import './Home.css'
import aStar from '/src/assets/image/a-star.png'
import warnIcon from '/src/assets/image/warn.svg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Intro />
      <Callout />
      <Community />
    </>
  )
}

function Intro() {
  return (
    <> 
      <div className="home-intro__hero"></div>
      <section className="home-intro">
        <div className="home-intro__rectangle"></div>
        <h1 className="home-intro__h1">LEARN FROM THE BEST</h1>
        <div className="home-intro-btn-container">
          <Link to="/inspiring-session" reloadDocument className="btn btn--primary">Inspiring Session</Link>
        </div>
        <div className="home-intro-left-img-container">
          <img src={aStar} className="home-intro__a-star-left"></img>
          <img src={aStar} className="home-intro__a-star-left"></img>
        </div>
        <div className="home-intro-right-img-container">
          <img src={aStar} className="home-intro__a-star-right"></img>
          <img src={aStar} className="home-intro__a-star-right"></img>
        </div>
      </section>
    </>
  )
}
const Callout = () => {
  return (
    <section className="home-callout section-margin">
      <img src={warnIcon} alt="icon" />
      <h2>Parts of this website are under development.<br></br> Thank you for your patient</h2>
    </section>
  )
}
const Community = () => {
  return(
<section className='home-community section-padding'>
  <h1 className="home-community__h1">Community Services</h1>
  <p className="home-community__p">We believe that these services should be available and accessible to students in our community.</p>
  <ul className="home-community__ul">
    <li className="home-community__card">Free Learning Resource</li>
    <li className="home-community__card">Documentation of Useful Research Summary</li>
    <li className="home-community__card">Project Setup Aid</li>
    <li className="home-community__card">Extracurricular Enrichment Opportunity</li>
    <li className="home-community__card">Community for like-minded individual</li>
  </ul>
</section>
  )
}
const About = () => {
  return(
<>

</>
  )
}

export default Home  
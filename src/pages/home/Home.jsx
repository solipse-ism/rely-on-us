import React from 'react'
import './Home.css'
import aStar from '/src/assets/image/a-star.png'
import warnIcon from '/src/assets/image/warn.svg'

function Home() {
  return (
    <>
      <Intro />
      <Callout />
      <Community />
      <Event />
    </>
  )
}

function Intro() {
  return (
    <> 
      <div className="home-intro__hero"></div>
      <section className="home-intro section-padding ">
        <div className="home-intro__left">
          <h1 className="home-intro__h1">LEARN FROM THE BEST!</h1>
          <p className="home-intro__p">EVERYTHING IS HERE! Join our community and access all resource, ranging from academic to Super/Extra-curricular opportunities!</p>
          <div className="home-intro__button-container">
            <a href="#community" className='btn btn--primary'>Interested?</a>
            <a href="#inc-event" className='btn btn--secondary'>Upcoming Event</a>
          </div>
        </div>
        <div className="home-intro__icon-container">
          <img className="home-intro__icon" src={aStar} alt="A Star" />
          <img className="home-intro__icon" src={aStar} alt="A Star" />
        </div>
      </section>
    </>
  )
}
const Callout = () => {
  return (
    <section className="home-callout section-margin">
      <img src={warnIcon} alt="icon" />
      <h2>Parts of this website are under development.<br></br> Thank you for your patient!</h2>
    </section>
  )
}
function Community() {
  return (
    <section id='community' className="community section-padding">
      <h1 className="community__h1">OUR community</h1>	
      <div className="community__grid-wrapper">
        <div className="community__notice-wrapper">
          We aim to build an interactive and interconnected community with students around the school. We want the community to be inclusive and transparent, allowing students to share a range of ideas and perspectives while using our resources to improve their academics, extracurriculars, and school life.
        </div>
        <div className="community__roadmap-wrapper">
          <h1 className="roadmap__h1">Roadmap</h1>
          <ul className="roadmap__lists">
            <div className="roadmap__checkbox"></div>
            <li>Integrate user database</li>
            <div className="roadmap__checkbox"></div>
            <li>Add & find more resource</li>
            <div className="roadmap__checkbox"></div>
            <li>Pitching for opportunities</li>
            <div className="roadmap__checkbox"></div>
            <li>Responsive Website</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
function Event() {
  return(
    <section id="inc-event" class="event section-padding section-margin dim">
			<h1 class="event__h1">Current Events</h1>
			<div class="event__events-wrapper">
				<li data-event-name="inspiring session" data-deadline="00/10/23">
					<h1 class="event-list__h1">Inspiring Session</h1>
					<div class="event-list__details-wrapper">
						<h2 class="event-list__h2 event-list__info event-list__info--active" id="inspiring-session">See More</h2>
						<p class="event-list__p" data-deadline="00/10/23"></p>
					</div>
				</li>
				<li data-event-name="recruit" data-deadline="00/10/23">
					<h1 class="event-list__h1">WE ARE RECRUITING!</h1>
					<div class="event-list__details-wrapper">
						<h2 class="event-list__h2 event-list__info event-list__info--active" data-event-name="recruit">See More</h2>
						<p class="event-list__p" data-deadline="01/10/23"></p>
					</div>
				</li>
				<li></li>
			</div>
		</section>
  )
}

export default Home  
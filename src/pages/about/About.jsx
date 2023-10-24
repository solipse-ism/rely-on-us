import React, { useState } from 'react'
import './About.css'

function Vision() {
  return(
    <>
      <p>Our focus is on three objectives: communication, development, and inspiration.</p>
      <br />
      <p><strong>Communication</strong>: We aim to build an interactive and interconnected community where students can exchange ideas and perspectives to learn from each other.</p>
      <br />
      <p><strong>Development</strong>: With a strong and supportive community, we will build an environment for students to excel in their overall academic and extracurricular performance.</p>
      <br />
      <p><strong>Inspiration</strong>: Talents from different fields within our community will be able to share their passions and perspectives, inspiring others with their experiences and ventures.</p>
    </>
  )
}
function Team() {
  return(
    <>
      <p>Content to be added</p>
    </>
  )
}
function Join() {
  return(
    <>
      <p>Content to be added</p>
    </>
  )
}

function AboutDesc({choice}) {
  switch (choice){
    case "vision":
    return ( <Vision /> )
    break
    case "team":
    return ( <Team /> )
    break
    case "join":
    return ( <Join /> )
    break
  }
}

function About() {
  const [choice, setChoice] = useState("");

  return (
    <section className='about'>
      <h1 className="about-title slide-top">RELY ON US</h1>
    <div className="desc-choice">
      <AboutDesc choice={choice}/>
    </div>
      <ul className="about-choice-container">
        <li className={choice === "vision" ? "about-choice--active" : "about-choice"} data-choice="vision" onClick={(event) => setChoice(event.target.getAttribute('data-choice'))}>Vision</li>
        <li className={choice === "team" ? "about-choice--active" : "about-choice"} data-choice="team" onClick={(event) => setChoice(event.target.getAttribute('data-choice'))}>Team</li>
        <li className={choice === "join" ? "about-choice--active" : "about-choice"} data-choice="join" onClick={(event) => setChoice(event.target.getAttribute('data-choice'))}>Join</li>
      </ul>
    </section>
  )
}

export default About

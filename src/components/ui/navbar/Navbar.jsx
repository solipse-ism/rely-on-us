import './navbar.css'
import logoWhite from '/src/assets/image/logo-white.svg' 
import downArrow from '/src/assets/image/down-arrow.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {

  return (
    <header className='header'>
      <Nav /> 
      <User />
    </header>
  )
}
function Nav(){
  const [curPage, setCurPage] = useState(location.pathname)
  return(
    <nav className='nav'>
      <Link to="/"><img className="nav__logo" src={logoWhite} alt="Rely on us" onClick={() => setCurPage("/")}/></Link>
      <ul className='nav-links-container'>
        <Link to="/community" className={curPage === "/community"? "nav__link--active" : "nav__link"} onClick={() => setCurPage("/community")}>Community</Link>
        <Link to="/event" className="nav__link" onClick={() => setCurPage("/event")}>Event <img src={downArrow} className="nav__links-arrow" alt="arrow-down-icon"></img></Link>
        <Link to="/dashboard" reloadDocument className="nav__link" onClick={() => setCurPage("/event")}>Enrichment  <img src={downArrow} className="nav__links-arrow" alt="arrow-down-icon"></img></Link>
      </ul>
    </nav>
  )
}
function User(){
  return(
    <section className="header-user-container">
      <Link to="/account" className='btn' tabIndex={1}>Login</Link>
      <Link to="/account" className='btn btn--accent' tabIndex={1}>Get Started</Link>
    </section>
  )
}

export default Navbar

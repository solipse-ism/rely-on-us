import './navbar.css'
import logoWhite from '/src/assets/image/logo-white.svg' 

function Navbar() {
  return (
    <header className='header'>
      <Nav />
      <User />
    </header>
  )
}
function Nav(){
  return(
    <nav className='nav  slide-rotate-hor-top'>
      <a href="/"><img className="nav__logo"  src={logoWhite} alt="Rely on us"/></a>
      <ul className='nav-links-container'>
        <LiLinks href="/learning" className={location.pathname === '/learning' ? 'nav__link--active' : 'nav__link dim'} text="Learning" />
        <LiLinks href="/about" className={location.pathname === '/about' ? 'nav__link--active' : 'nav__link'} text="About Us" />
        <LiLinks href="/event" className={location.pathname === '/event' ? 'nav__link--active' : 'nav__link'} text="Inspiring Session" />
        <LiLinks href="/curricular" className={location.pathname === '/curricular' ? 'nav__link--active' : 'nav__link dim'} text="Supercurricular" />
      </ul>
    </nav>
  )
}
function LiLinks(props) {
  return(
    <li>
      <a href={props.href} className={props.className} tabIndex={1}>{props.text}</a>
    </li>
  );
}
function User(){
  return(
    <section className="header-user-container slide-rotate-hor-top dim">
      <a href="/account" className='btn' tabIndex={1}>Login</a>
      <a href="/account" className='btn btn-gradient--primary' tabIndex={1}>Get Started</a>
    </section>
  )
}

export default Navbar

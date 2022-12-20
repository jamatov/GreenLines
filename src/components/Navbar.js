import React from 'react'
import Logo from '../icons/logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState('nav-bar__info')
  const [toggleIcon, setToggleIcon] = useState('nav_togler')


  const navToggle = () => {
    active === 'nav-bar__info'
      ? setActive('nav-bar__info nav_active')
      : setActive('nav-bar__info');

    toggleIcon === 'nav_togler'
      ? setToggleIcon('nav-togler toggle')
      : setToggleIcon('nav_togler');
  }


  const changeNavbar = () => {
      if (window.scrollY >= 120) {
          setNavbar(true);
      } else {
          setNavbar(false)
      }
  }
  window.addEventListener('scroll', changeNavbar);

  return (
      <nav className={`nav-bar ${navbar ? 'navbarActive' : ''}`}>
        <div className="container navvbar d-flex justify-content-between align-items-center">
          <Link to='/'><img src={Logo} alt="" /></Link>
          <div className={active}>
            <Link onClick={navToggle} className='logo2' to='/'><img src={Logo} alt="" /></Link>

            <div className='nav-bar__info-texts'>
              <p>Questions or Comments? Please contact us at <span>602.264.4834</span></p>
            </div>

            <ul className="nav-list">
              <li onClick={navToggle} className="nav-item"><Link to='/about'>ABOUT US</Link></li>
              <li onClick={navToggle} className="nav-item"><Link to='/audiology'>AUDIOLOGY</Link></li>
              {/* <li className="nav-item"><Link to='/providers'>PROVIDERS</Link></li> */}
              <li onClick={navToggle} className="nav-item"><Link to='/specialties'>SPECIALTIES</Link></li>
              <li onClick={navToggle} className="nav-item"><Link to='/locations'>LOCATIONS</Link></li>
            </ul>
          </div>

          <div onClick={navToggle} className="nav_togler">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>

        </div>
      </nav>
  )
}
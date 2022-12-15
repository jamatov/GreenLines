import React from 'react'
import Logo from '../icons/logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [mobile, setMobile] = useState(true)

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
       <div className="container navvbar d-flex justify-content-between">
        <Link to='/'><img src={Logo} alt="" /></Link>
        <div className= {mobile? 'nav-links-mobile' : 'nav-bar__info'} onClick={() => setMobile(false)}>
          <div className='nav-bar__info-texts'>
            <p>Questions or Comments? Please contact us at <span>602.264.4834</span></p>
          </div>

          <ul className="nav-list">
            <li className="nav-item"><Link to='/about'>ABOUT US</Link></li>
            <li className="nav-item"><Link to='/audiology'>AUDIOLOGY</Link></li>
            {/* <li className="nav-item"><Link to='/providers'>PROVIDERS</Link></li> */}
            <li className="nav-item"><Link to='/specialties'>SPECIALTIES</Link></li>
            <li className="nav-item"><Link to='/locations'>LOCATIONS</Link></li>
          </ul>

          
        </div>

        <button className='mobile-menu-icon' onClick={() => setMobile(!mobile)}>
          x
        </button>
       </div>
      </nav>
  )
}
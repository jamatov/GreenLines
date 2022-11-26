import React from 'react'
import Logo from '../icons/logo.svg'
import { Link } from 'react-router-dom'
import Line from '../images/line.htm'

export default function Navbar() {
  return (
    <div className='container'>
      <nav className='nav-bar'>
        <Link to='/'><img src={Logo} alt="" /></Link>
        <div className='nav-bar__info'>
          <div className='nav-bar__info-texts'>
            <p>Questions or Comments? Please contact us at <span>602.264.4834</span></p>
          </div>

          <ul className="nav-list">
            <li className="nav-item"><Link to='/about'>ABOUT US</Link></li>
            <li className="nav-item"><Link to='/audiology'>AUDIOLOGY</Link></li>
            <li className="nav-item"><Link to='/providers'>PROVIDERS</Link></li>
            <li className="nav-item"><Link to='/specialties'>SPECIALTIES</Link></li>
            <li className="nav-item"><Link to='/locations'>LOCATIONS</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

import React from 'react'
import Logo from '../icons/logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='container'>
      <nav className='nav-bar'>
        <img src={Logo} alt="" />
        <div className='nav-bar__info'>
          
        </div>
      </nav>
    </div>
  )
}

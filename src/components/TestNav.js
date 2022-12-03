import React from 'react'
import Logo from '../icons/logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavDropdown from 'react-bootstrap/NavDropdown';




export default function Navvbar() {
  const [navbar, setNavbar] = useState(false);


  const changeNavbar = () => {
      if (window.scrollY >= 120) {
          setNavbar(true);
      } else {
          setNavbar(false)
      }
  }
  window.addEventListener('scroll', changeNavbar);

  return (
      <Navbar expand="lg" className={`nav-bar ${navbar ? 'navbarActive' : ''}`}>
        <div className="container padding">
          <Link to='/'><img src={Logo} alt="" /></Link>
          <Navbar.Toggle className='nav-togle' aria-controls="basic-navbar-nav" />
          <div className='nav-bar__info'>
            

            <Navbar.Collapse id="basic-navbar-nav">
              <div className='nav-bar__info-texts'>
                <p>Questions or Comments? Please contact us at <span>602.264.4834</span></p>
              </div>
              <Nav className="me-auto">
                <Nav.Link className="nav-item"><Link to='/about'>ABOUT US</Link></Nav.Link>
                <Nav.Link className="nav-item"><Link to='/audiology'>AUDIOLOGY</Link></Nav.Link>
                <Nav.Link className="nav-item"><Link to='/providers'>PROVIDERS</Link></Nav.Link>
                <Nav.Link className="nav-item"><Link to='/specialties'>SPECIALTIES</Link></Nav.Link>
                <Nav.Link className="nav-item"><Link to='/locations'>LOCATIONS</Link></Nav.Link>

                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
                {/* <ul className="nav-list">
                  <li className="nav-item"><Link to='/about'>ABOUT US</Link></li>
                  <li className="nav-item"><Link to='/audiology'>AUDIOLOGY</Link></li>
                  <li className="nav-item"><Link to='/providers'>PROVIDERS</Link></li>
                  <li className="nav-item"><Link to='/specialties'>SPECIALTIES</Link></li>
                  <li className="nav-item"><Link to='/locations'>LOCATIONS</Link></li>
                </ul> */}
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
  )
}

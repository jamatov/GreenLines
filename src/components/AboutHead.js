import React from 'react'
import { useState } from 'react'


export default function AboutHead() {
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
    <div className={`AboutHead ${navbar ? 'AboutHeadActive' : ''}`}>

    </div>
  )
}

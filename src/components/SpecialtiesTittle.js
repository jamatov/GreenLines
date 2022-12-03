import React from 'react'
import { useState } from 'react';

export default function AboutTitle() {

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
    <div className={`AboutTitle ${navbar ? 'AboutActive' : ''}`}>
      <div className="container padding">
        <h2>Оказание услуг по качественному медицинскому туризму граждан СНГ с ведущими специалистами г. Ташкента.</h2>
      </div>
    </div>
  )
}

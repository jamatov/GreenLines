import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../images/audiology-banner.jpg'


export default function AudiologyMain() {
  return (
    <div className='AboutMain'>
      <div className="container padding">
        <img src={Banner} alt="" />

        <div className="about-main__info">
          <div data-aos="fade-right" className="blog">
            <h2>Audiology Team <br /> Subspecialties</h2>
            <p>AOC Physicians are integral members of the hospital and medical staff community in the Phoenix area with active medical staff membership/ privileges at numerous Valley hospitals including:</p>
          
            <ul>
              <li><span>Banner Desert Medical Center</span></li>
              <li><span>Banner Thunderbird Medical Center</span></li>
              <li><span>Banner University Medical Center (Phoenix)</span></li>
              <li><span>Biltmore Surgical Center</span></li>
              <li><span>Cancer Treatment Centers of America</span></li>
              <li><span>Cardon Children’s Medical Center</span></li>
              <li><span>Dignity Health St. Joseph’s Hospital and Medical Center</span></li>
              <li><span>HonorHealth Scottsdale Shea</span></li>
              <li><span>Maricopa Integrated Health Systems</span></li>
              <li><span>Mayo Clinic</span></li>

            </ul>
          </div>

          <div data-aos="fade-left" className="blog">
            <h2>Our <br /> Audiologists</h2>
            <p>AOC’s physicians are actively involved in several physician training and residency programs, including:</p>
          
            <ul>
              <li><span>Banner University of Arizona</span></li>
              <li><span>University of Arizona College of Medicine</span></li>
              <li><span>Mayo Clinic</span></li>
              <li><span>Midwestern University</span></li>
            </ul>

           
          </div>
        </div>
      </div>
    </div>
  )
}

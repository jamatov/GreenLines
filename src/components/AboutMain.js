import React from 'react'
import Banner from '../images/about-banner.jpg'
import { Link } from 'react-router-dom'


export default function AboutMain() {

  
  return (
    <div className='AboutMain'>
      <div className="container padding">
        <img src={Banner} alt="" />

        <div className="about-main__info">
          <div data-aos="fade-right" className="blog">
            <h2>Hospital Affiliations</h2>
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
              <li><span>North Valley Surgery Center</span></li>
              <li><span>Phoenix Children’s Hospital</span></li>
              <li><span>Surgery Center of Gilbert</span></li>
              <li><span>Surgery Center of Peoria</span></li>
            </ul>
          </div>

          <div data-aos="fade-left" className="blog">
            <h2>Education</h2>
            <p>AOC’s physicians are actively involved in several physician training and residency programs, including:</p>
          
            <ul>
              <li><span>Banner University of Arizona</span></li>
              <li><span>University of Arizona College of Medicine</span></li>
              <li><span>Mayo Clinic</span></li>
              <li><span>Midwestern University</span></li>
              <li><span>Creighton University School of Medicine</span></li>
              <li><span>A.T. Still University</span></li>
            </ul>

            <div className='location-info'>
              <h3>3</h3>
              <div>
                <p>Valley <br /> Locations</p>
                <Link>view map</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

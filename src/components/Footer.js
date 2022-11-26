import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="container footer">
        <div className="blog1">
          <p className='small'>
            P 602.264.4834 <br />
            F 602.254.5178
          </p>

          <p className='small'>
            Address <br />
            4530 E. Shea Blvd Suite 180 <br />
            Phoenix, Arizona 85028
          </p>

          <p className='link'>
            <Link>Pay Your Bill</Link>
          </p>

          <p className='link'>
            <Link>Patient Portal</Link>
          </p>
        </div>

        <div className="blog2">
          <h2>Treatments</h2>

          <ul>
            <li>
              <Link>Comprehensive Head and Neck Cancer Care</Link></li>
            <li>
              <Link>Ear and Skull Base Surgery</Link></li>
            <li>
              <Link>Ears, Nose, Throat</Link></li>
            <li>
              <Link>Endoscopic Sinus Surgery</Link></li>
            <li>
              <Link>Laryngology</Link></li>
            <li>
              <Link>Voice and Swallowing Disorders</Link></li>
            <li>
              <Link>Neurotology</Link></li>
            <li>
              <Link>Pediatric Otolaryngology</Link></li>
            <li>
              <Link>Thyroid/Parathyroid</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

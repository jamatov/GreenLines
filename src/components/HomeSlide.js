import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Woman from '../images/woman.jpg'
import Man from '../images/man.jpg'
import { Link } from 'react-router-dom';

export default function HomeSlide() {
  return (
      <Carousel className='carusel' slide={false}>
      <Carousel.Item className='carusel-item'>
        <img
          className="d-block w-100"

          src={Woman}
          alt="First slide"
        />
        <Carousel.Caption className='carusel-info container' data-aos="zoom-in">
          <p className='carusel-info__tittle'>about</p>
          <p className='carusel-info__texts'>AOC provides multiple levels of comprehensive primary ENT care including the diagnosis and management of all diseases of the ears, nose, throat, and sinuses. In addition, AOC provides the full spectrum of subspecialty ENT care including the management of pediatric airway, cancer, skull base surgery, neuro-otology, advanced head and neck surgical and reconstructive procedures, and craniofacial surgery. </p>
          <Link>Learn More</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carusel-item'>
        <img
          className="d-block w-100"
          src={Man}
          alt="Second slide"
        />

        <Carousel.Caption className='carusel-info container' data-aos="zoom-in">
          <p className='carusel-info__tittle'>about</p>
          <p className='carusel-info__texts'>AOC provides multiple levels of comprehensive primary ENT care including the diagnosis and management of all diseases of the ears, nose, throat, and sinuses. In addition, AOC provides the full spectrum of subspecialty ENT care including the management of pediatric airway, cancer, skull base surgery, neuro-otology, advanced head and neck surgical and reconstructive procedures, and craniofacial surgery. </p>
          <Link>Learn More</Link>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  )
}

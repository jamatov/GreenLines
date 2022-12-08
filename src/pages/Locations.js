import React from 'react'
import AboutHead from '../components/AboutHead'
import LocationsMain from '../components/LocationsMain'
import LocationsTittle from '../components/LocationsTittle'

export default function Locations() {
  return (
    <div className='Locations'>
      {/* <AboutHead/> */}
      <LocationsTittle/>
      <LocationsMain/>
    </div>
  )
}

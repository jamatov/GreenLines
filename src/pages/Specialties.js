import React from 'react'
import AboutHead from '../components/AboutHead'
import SpecialtiesMain from '../components/SpecialtiesMain'
import SpecialtiesTittle from '../components/SpecialtiesTittle'

export default function Specialties() {
  return (
    <div className='Specialties'>
      {/* <AboutHead/> */}
      <SpecialtiesTittle/>
      <SpecialtiesMain/>
    </div>
  )
}

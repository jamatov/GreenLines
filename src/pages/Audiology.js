import React from 'react'
import AboutHead from '../components/AboutHead'
import AudiologyMain from '../components/AudiologyMain'
import AudiologyTittle from '../components/AudiologyTittle'

export default function Audiology() {
  return (
    <div className='Audiology'>
      {/* <AboutHead/> */}
      <AudiologyTittle/>
      <AudiologyMain/>
    </div>
  )
}

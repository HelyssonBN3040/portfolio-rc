import React from 'react'
import Navbar from '../../components/navbar/TransitionNav'

const AboutMe = () => {
  return (
    <div className='mx-10'>
      <Navbar />
      <div>
        <div className='flex rounded-3xl w-36 h-10 opacity-85 items-center justify-center btn-header'>
          <p className="font-header">👋 Saudações!</p>
        </div>
        <strong className='text-4xl'>Helysson Cavalcante<br />Bentes do Nascimento</strong>

      </div>
    </div>
  )
}

export default AboutMe
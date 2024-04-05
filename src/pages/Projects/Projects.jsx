import React from 'react'
import Navbar from '../../components/navbar/TransitionNav'
import CardProject from '../../components/CardProjects/CardProject'
import Footer from '../../components/Footer/Footer'
import BackToTopButton from '../../components/BackToTop/BackToTopButton'
import { MagicMotion } from 'react-magic-motion'

const Projects = () => {
  return (
    <div className="mx-10">
      <MagicMotion>
        <Navbar />
        <div className='flex flex-col gap-10'>
          <div className=' flex flex-col gap-3'>
            <div>
              <div className='flex rounded-3xl w-28 opacity-95 h-10 items-center justify-center btn-header'>
                <p>🔗Portfolio</p>
              </div>
            </div>
            <strong className='text-4xl'>Trabalhos e Projetos</strong>
          </div>
          <CardProject />
        </div>
        <BackToTopButton />
        <Footer />
      </MagicMotion>
    </div>
  )
}

export default Projects
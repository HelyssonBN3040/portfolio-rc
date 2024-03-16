import React from 'react'
import Navbar from '../../components/navbar/TransitionNav'
import CardProject from '../../components/CardProjects/CardProject'
import Footer from '../../components/Footer/Footer'
import BackToTopButton from '../../components/BackToTop/BackToTopButton'

const Projects = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <Navbar />
      <div className='flex flex-col gap-10'>
        <div className='mx-10 '>
          <div>
            <div>
              <p>🔗Portfolio</p>
            </div>
          </div>
          <strong className='text-4xl'>Trabalhos e Projetos</strong>
        </div>
        <CardProject/>
      </div>
      <BackToTopButton/>
      <Footer/>
    </div>
  )
}

export default Projects
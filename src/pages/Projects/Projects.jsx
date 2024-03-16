import React from 'react'
import Navbar from '../../components/navbar/TransitionNav'
import CardProject from '../../components/CardProjects/CardProject'

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col  mx-12 gap-10'>
        <div>
          <div>
            <div>
              <p>🔗Portfolio</p>
            </div>
          </div>
          <strong className='text-4xl'>Trabalhos e Projetos</strong>
        </div>
        <CardProject/>
        
      </div>
    </>
  )
}

export default Projects
import React from 'react'
import Navbar from '../../components/navbar/TransitionNav'
import BackToTopButton from '../../components/BackToTop/BackToTopButton'
import Footer from '../../components/Footer/Footer'
import Profile from '../../../public/imgProjects/picture.jpg'
import { MagicMotion } from 'react-magic-motion'

const AboutMe = () => {
  return (
    <div className='mx-10'>
      <MagicMotion>
        <Navbar />
        <div className='flex flex-wrap justify-around mt-20 mb-20 gap-10 items-center'>
          <div className="picture">
            <img src={Profile} alt="Foto Helysson" className='w-96 rounded-full border-4 border-lime-500' />
          </div>
          <div className="about">
            <div className='flex rounded-3xl w-36 h-10 opacity-85 mb-5 items-center justify-center btn-header'>
              <p className="font-header">🧐 Sobre mim</p>
            </div>
            <strong className='text-4xl'>Helysson Cavalcante<br />Bentes do Nascimento</strong>
            <p className='text-justify mt-5'>👋Me chamo Helysson Cavalcante Bentes do Nascimento, mas pode me chamar só de Helysson. Prazer!</p>
            <div className='mt-5 mb-5'>
              <p className='text-justify'>👨‍💻Pouco tempo na área de desenvolvimento e programação em interfaces com  javaScript e React.</p>
              <p className='text-justify'>🎓Graduando em Ciências da Computação na Estácio de Sá em Manaus-AM.</p>
              <p className='text-justify'>💡Interesses em desenvolvimento Front-End em React e VueJs.</p>
            </div>
            <p className='text-justify'>🚀Tentando sempre ser um pouquinho melhor do que ontem todos os dias.</p>
            <a href="https://drive.google.com/file/d/1Qxi5ekINuGq6UhctYHARPyMJEqIzQr-0/view?usp=sharing" className='flex mt-5 rounded-3xl w-36 h-10 opacity-85 mb-5 items-center justify-center btn-header' target="_blank">📃Visualizar CV</a>
          </div>
        </div>
        <Footer />
        <BackToTopButton />
      </MagicMotion>
    </div>
  )
}

export default AboutMe
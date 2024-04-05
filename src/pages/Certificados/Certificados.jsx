import React from 'react'
import Navbar from '../../components/navbar/TransitionNav'
import Footer from '../../components/Footer/Footer'
import BackToTopButton from '../../components/BackToTop/BackToTopButton'
import ImageCertEstacio from "../../../public/imgProjects/certificado-prog-estacio.png"
import CertBradesco from "../../../public/imgProjects/bradesco.png"
import CertEstacioIot from "../../../public/imgProjects/certificado-prog-iot-estacio.png"

const Certificados = () => {
  return (
    <div className='mx-10'>
      <Navbar />
      <div className='flex flex-col gap-3'>
        <div className='flex rounded-3xl w-32 opacity-95 h-10 items-center justify-center btn-header'>
          <p>🔗Certificados</p>
        </div>
        <strong className='text-4xl'>Cerificados Adquiridos</strong>
        <div className='flex flex-wrap justify-center '>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <p className='text-xl '>Programação de Sistemas de Informação</p>
            <strong>Instituição: <i>Estácio de Sá</i></strong> <br />
            <strong>Ano de Conclusão: <i>2023</i></strong>
            <a href="https://drive.google.com/file/d/1kZH2WinY3gN94HVSM5pjUEl-8mRxQPDy/view?usp=sharing" target='_blank'>
              <img className="w-full" src={ImageCertEstacio} alt="Certificado" />
            </a>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <p className='text-xl '>Criação de Sites</p>
            <strong>Instituição: <i>Fundação Bradesco</i></strong> <br />
            <strong>Ano de Conclusão: <i>2024</i></strong>
            <a href="https://drive.google.com/file/d/1LBPYSXMAlC8ahgLbh7YZvFbAXyHKvniN/view?usp=sharing" target='_blank'>
              <img className="w-full" src={CertBradesco} alt="Certificado" />
            </a>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <p className='text-xl '>Programação para Internet</p>
            <strong>Instituição: <i>Estácio de Sá</i></strong> <br />
            <strong>Ano de Conclusão: <i>2023</i></strong>
            <a href="https://drive.google.com/file/d/14fi-YdcR8FxLkoV54WgjeO24EO0jCTMo/view?usp=sharing" target='_blank'>
              <img className="w-full" src={CertEstacioIot} alt="Certificado" />
            </a>
          </div>
          
        </div>
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default Certificados
import React from 'react'
import Navbar from '../../components/navbar/TransitionNav'
import Footer from '../../components/Footer/Footer'
import BackToTopButton from '../../components/BackToTop/BackToTopButton'
import ImageCertEstacio from "../../../public/certificados/certificado-prog-estacio.png"
import CertBradesco from "../../../public/certificados/bradesco.png"
import CertEstacioIot from "../../../public/certificados/certificado-prog-iot-estacio.png"
import CertBackendP1 from "../../../public/certificados/certnodejs1.png"
import CertBackendP2 from "../../../public/certificados/certnodejsp2.png"
import CertMongoDB from "../../../public/certificados/backendmongodb.png"
import CertReactJs from "../../../public/certificados/certfrontreact.png"
import CertNodeJs from "../../../public/certificados/certnodeexpres.png"
import CertFormFront from "../../../public/certificados/certformaçãofront.jpg"
import CertIntNuvem from "../../../public/certificados/certbackend.png"

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
            <p className='text-xl '>Formação Front-end - HTML, CSS, Javascript, React e +</p>
            <strong>Instituição: <i>Udemy</i></strong> <br />
            <strong>Ano de Conclusão: <i>2024</i></strong>
            <a href="" target='_blank'>
              <img className="w-full" src={CertFormFront} alt="Certificado" />
            </a>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <p className='text-xl '>Programação de Sistemas de Informação</p>
            <strong>Instituição: <i>Estácio de Sá</i></strong> <br />
            <strong>Ano de Conclusão: <i>2023</i></strong>
            <a href="https://drive.google.com/file/d/1kZH2WinY3gN94HVSM5pjUEl-8mRxQPDy/view?usp=sharing" target='_blank'>
              <img className="w-full" src={ImageCertEstacio} alt="Certificado" />
            </a>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <p className='text-xl '>Backend com NodeJs e Express (Parte 1)</p>
            <strong>Instituição: <i>Samsung Ocean</i></strong> <br />
            <strong>Ano de Conclusão: <i>2024</i></strong>
            <a href="" target='_blank'>
              <img className="w-full" src={CertBackendP1} alt="Certificado" />
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
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <p className='text-xl '>Backend com NodeJs e Express (Parte 2)</p>
            <strong>Instituição: <i>Samsung Ocean</i></strong> <br />
            <strong>Ano de Conclusão: <i>2024</i></strong>
            <a href="" target='_blank'>
              <img className="w-full" src={CertBackendP2} alt="Certificado" />
            </a>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <p className='text-xl '>Laboratório de Backend e Banco de Dados com MongoDB</p>
            <strong>Instituição: <i>Samsung Ocean</i></strong> <br />
            <strong>Ano de Conclusão: <i>2024</i></strong>
            <a href="" target='_blank'>
              <img className="w-full" src={CertMongoDB} alt="Certificado" />
            </a>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <p className='text-xl '>Frontend Web com Reactjs</p>
            <strong>Instituição: <i>Samsung Ocean</i></strong> <br />
            <strong>Ano de Conclusão: <i>2024</i></strong>
            <a href="" target='_blank'>
              <img className="w-full" src={CertReactJs} alt="Certificado" />
            </a>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <p className='text-xl '>Backend com Nodejs e Express - Parte Única</p>
            <strong>Instituição: <i>Samsung Ocean</i></strong> <br />
            <strong>Ano de Conclusão: <i>2024</i></strong>
            <a href="" target='_blank'>
              <img className="w-full" src={CertNodeJs} alt="Certificado" />
            </a>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <p className='text-xl'>Integrando os serviços de backend na nuvem</p>
            <strong>Instituição: <i>Samsung Ocean</i></strong> <br />
            <strong>Ano de Conclusão: <i>2024</i></strong>
            <a href="" target='_blank'>
              <img className="w-full" src={CertIntNuvem} alt="Certificado" />
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
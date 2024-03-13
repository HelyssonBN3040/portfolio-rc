import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'
import Logo from "../../../LOGOS/HTML LOGO.png";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen flex  flex-col justify-center items-center gap-y-9 text-center">
        <div className="container-header">
          <h1 className='text-3xl font-bold'>Seja Bem-Vindo ao Meu Portfolio!</h1>
        </div>
        <div className="list-projects">
          <ul>
            <li><Link className="options" to="/projects">Projects</Link></li>
            <li><Link className="options" to="/about">Sobre Mim</Link></li>
            <li><Link className="options" to="/contact">Contatos</Link></li>
            <li><Link className="options" to="/certificates">Certificados</Link></li>
          </ul>
        </div>
        <div className="tecnologies">
          <div className='animate-spin '>
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
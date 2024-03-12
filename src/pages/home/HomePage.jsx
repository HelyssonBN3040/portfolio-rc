import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="container-header">
          <h1>Seja Bem-Vindo ao Meu Portfolio!</h1>
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
          
        </div>
      </div>
    </>
  )
}

export default HomePage
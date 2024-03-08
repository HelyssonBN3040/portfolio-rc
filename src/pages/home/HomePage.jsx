import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Home Page</h1>
      <div className="container bg-gray-100 p-4">
        <div className="container-header">
          <h1>Welcome to our website!</h1>
        </div>
        <div className="list-projects">
          <ul>
            <li className="options"><Link to="/projects">Projects</Link></li>
            <li className="options"><Link to="/about">Sobre Mim</Link></li>
            <li className="options"><Link to="/contact">Contatos</Link></li>
            <li className="options"><Link to="/certificates">Certificados</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage
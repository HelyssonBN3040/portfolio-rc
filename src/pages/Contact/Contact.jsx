import React, { useState } from 'react'
import Navbar from '../../components/navbar/TransitionNav'
import Footer from '../../components/Footer/Footer'
import BackToTopButton from '../../components/BackToTop/BackToTopButton'
import { MagicMotion } from 'react-magic-motion'

const Contact = () => {

  const [formValues, setFormValues] = useState({
    nomeCompleto: '',
    email: '',
    texto: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log(formValues);
  };
  return (
    <div className='mx-10'>
      <MagicMotion>
        <Navbar />
        <div className='flex flex-col items-center'>
          <form onSubmit={handleSubmit} className="w-96">
            <div>
              <label htmlFor="nomeCompleto" className="block text-sm font-medium text-gray-700">Nome Completo</label>
              <input
                type="text"
                name="nomeCompleto"
                id="nomeCompleto"
                value={formValues.nomeCompleto}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="texto" className="block text-sm font-medium text-gray-700">Texto</label>
              <textarea
                name="texto"
                id="texto"
                value={formValues.texto}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar
            </button>
          </form>
        </div>
        <Footer />
        <BackToTopButton />
      </MagicMotion>
    </div>
  )
}

export default Contact
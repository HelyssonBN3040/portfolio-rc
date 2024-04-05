import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Navbar from '../../components/navbar/TransitionNav'
import Footer from '../../components/Footer/Footer'
import BackToTopButton from '../../components/BackToTop/BackToTopButton'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_0njm69r', 'template_2i0yvor', form.current, {
        publicKey: 'UWOuFtxCn8s24ncST',
      })
      .then(
        () => {
          toast.success("Mensagem Enviada com Sucesso")
          console.log('SUCCESS!',{

          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  };



  return (
    <div className='mx-10'>
      <Navbar />
      <div className='flex flex-col items-center my-10'>
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="user_name">
              Nome Completo
            </label>
            <input type="text" name="user_name" id="user_name" className="shadow appearance-none border rounded w-full py-2 px-3 hover:border-slate-400 transition leading-tight focus:outline-none focus:shadow-outline" required/>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="user_email">
              E-mail
            </label>
            <input type="email" name="user_email" id="user_email" className="shadow appearance-none border rounded w-full py-2 px-3 hover:border-slate-400 transition leading-tight focus:outline-none focus:shadow-outline" required/>
          </div>
          <div className="mb-6">
            <label className="block  text-sm font-bold mb-2" htmlFor="message">
              Mensagem
            </label>
            <textarea name="message" id="message" className="shadow  appearance-none border rounded w-full py-2 px-3 hover:border-slate-400 transition mb-3 leading-tight focus:outline-none focus:shadow-outline h-32"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <input type="submit" value="Enviar!"  className="bg-green-600 hover:bg-green-700  transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" />
          </div>
        </form>
      </div>
      <Footer />
      <BackToTopButton />
      <ToastContainer />

    </div>
  )
}

export default Contact
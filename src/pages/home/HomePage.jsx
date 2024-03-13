import React, { useEffect, useState } from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'
import LogoHtml from "../../../public/html-logo.png";
import LogoCss from "../../../public/css-logo.png";
import LogoJs from "../../../public/js-logo.png";
import LogoPy from "../../../public/py-logo.png";
import LogoReact from "../../../public/react-logo.png";
import LogoTailwind from "../../../public/tailwind-logo.png";


const HomePage = () => {

  const [user, setUser] = useState({ name: '', avatar: '' })

  useEffect(() => {
    //corpo
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/helyssonbn3040')
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }
    fetchData();

  }, []);

  return (
    <>
      <div className='m-5'>
        <div className="flex  justify-evenly ">
          <div className="flex gap-1 items-center ">
            <strong className='text-xl'>{user.name}</strong>
            <img src={user.avatar} className='w-11 rounded-full' alt="foto de perfil" />
          </div>
          <div className="list-projects">
            <ul>
              <li><Link className="options drop-shadow-2xl ..." to="/projects">Projects</Link></li>
              <li><Link className="options drop-shadow-2xl ..." to="/about">Sobre Mim</Link></li>
              <li><Link className="options drop-shadow-2xl ..." to="/contact">Contatos</Link></li>
              <li><Link className="options drop-shadow-2xl ..." to="/certificates">Certificados</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-y-10   items-center">
        <div className="flex  gap-3 flex-col my-20 w-4/6">
          <div className='flex gap-1 rounded-3xl bg-slate-950 w-32 h-8 items-center justify-center'>
          👋 <p>Saudações!</p>
          </div>
          <strong className='text-4xl'>Helysson Cavalcante</strong>
          <p w-80>Front-end developer</p>
        </div>

        <strong>Aqui São algumas das tecnologias que tenho conhecimento...</strong>
        <div className="flex items-center justify-center flex-wrap gap-4">
          <div className='animate-pulse  w-16'>
            <img src={LogoHtml} alt="" className='drop-shadow-2xl ...' />
          </div>
          <div className='animate-bounce  w-16'>
            <img src={LogoCss} alt="" className='drop-shadow-2xl ...' />
          </div>
          <div className='animate-pulse  w-16'>
            <img src={LogoJs} alt="" className='drop-shadow-2xl ...' />
          </div>
          <div className=' animate-spin w-16'>
            <img src={LogoReact} alt="" className='drop-shadow-2xl ...' />
          </div>
          <div className=' animate-bounce w-16'>
            <img src={LogoTailwind} alt="" className='drop-shadow-2xl ...' />
          </div>
          <div className=' animate-spin w-16'>
            <img src={LogoPy} alt="" className='drop-shadow-2xl ...' />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
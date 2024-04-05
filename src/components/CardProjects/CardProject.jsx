import React from 'react'
import ListaPresen from "../../../public/imgProjects/lista-presen.png";
import ResgitroPage from "../../../public/imgProjects/register-client.png"
import LBPage from "../../../public/imgProjects/landingpage.png"
import FacebookClone from "../../../public/imgProjects/facebook-clone.png"
import Pesquise from "../../../public/imgProjects/blog.png"

const CardProject = () => {
    return (
        <div className='flex flex-wrap gap-5 justify-center'>
            <div className='border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-sm transition-transform hover:scale-105'>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Lista de Presença</h2>
                    <p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='flex  gap-2 p-2 mb-4'>
                    <div className='bg-green-500 text-white rounded-full py-1 px-2 text-xs'>Online</div>
                    <div className='bg-blue-500 text-white rounded-full py-1 px-2 text-xs'>React</div>
                </div>
                <a href="https://lista-de-presen-a.vercel.app/" className='block hover:opacity-75 transition-opacity duration-300' target='_blank'>
                    <img src={ListaPresen} alt="Imagem do Projeto" className='w-full h-auto rounded-lg' />
                </a>
            </div>
            <div className='border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-sm transition-transform hover:scale-105'>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Registro de Clientes</h2>
                    <p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='flex  gap-2 p-2 mb-4'>
                    <div className='bg-green-500 text-white rounded-full py-1 px-2 text-xs'>Online</div>
                    <div className='bg-blue-500 text-white rounded-full py-1 px-2 text-xs'>React</div>
                    <div className='bg-purple-500 text-white rounded-full py-1 px-2 text-xs'>Bootstrap</div>
                </div>
                <a href="https://register-clients.vercel.app" className='block hover:opacity-75 transition-opacity duration-300' target='_blank'>
                    <img src={ResgitroPage} alt="Imagem do Projeto" className='w-full h-auto rounded-lg' />
                </a>
            </div>
            <div className='border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-sm transition-transform hover:scale-105'>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Landing Page LB Serviços</h2>
                    <p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='flex  gap-2 p-2 mb-4'>
                    <div className='bg-green-500 text-white rounded-full py-1 px-2 text-xs'>Online</div>
                    <div className='bg-orange-500 text-white rounded-full py-1 px-2 text-xs'>Html</div>
                    <div className='bg-blue-500 text-white rounded-full py-1 px-2 text-xs'>CSS</div>
                </div>
                <a href="https://lb-servi-os.vercel.app" className='block hover:opacity-75 transition-opacity duration-300' target='_blank'>
                    <img src={LBPage} alt="Imagem do Projeto" className='w-full h-auto rounded-lg' />
                </a>
            </div>
            <div className='border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-sm transition-transform hover:scale-105'>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Clone Facebook Login</h2>
                    <p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='flex  gap-2 p-2 mb-4'>
                    <div className='bg-green-500 text-white rounded-full py-1 px-2 text-xs'>Online</div>
                    <div className='bg-blue-500 text-white rounded-full py-1 px-2 text-xs'>React</div>
                    <div className='bg-blue-500 text-white rounded-full py-1 px-2 text-xs'>Css</div>
                </div>
                <a href="https://landing-page-facebook.vercel.app" className='block hover:opacity-75 transition-opacity duration-300' target='_blank'>
                    <img src={FacebookClone} alt="Imagem do Projeto" className='w-full h-auto rounded-lg' />
                </a>
            </div>
            <div className='border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-sm transition-transform hover:scale-105'>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Blog Pesquise Império</h2>
                    <p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='flex  gap-2 p-2 mb-4'>
                    <div className='bg-green-500 text-white rounded-full py-1 px-2 text-xs'>Online</div>
                    <div className='bg-orange-500 text-white rounded-full py-1 px-2 text-xs'>Html</div>
                    <div className='bg-blue-500 text-white rounded-full py-1 px-2 text-xs'>Css</div>
                    <div className='bg-yellow-600 text-white rounded-full py-1 px-2 text-xs'>JavaScript</div>
                </div>
                <a href="https://pesquiseimperio.com.br/" className='block hover:opacity-75 transition-opacity duration-300' target='_blank'>
                    <img src={Pesquise} alt="Imagem do Projeto" className='w-full h-auto rounded-lg' />
                </a>
            </div>
        </div>
    )
}

export default CardProject
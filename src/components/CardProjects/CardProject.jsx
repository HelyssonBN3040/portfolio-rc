import React from 'react'
import ListaPresen from "../../../public/imgProjects/lista-presen.png";

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
        </div>
    )
}

export default CardProject
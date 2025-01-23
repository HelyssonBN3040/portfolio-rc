import React from 'react'
import ListaPresen from "../../../public/imgProjects/lista-presen.png";
import ResgitroPage from "../../../public/imgProjects/register-client.png"
import LBPage from "../../../public/imgProjects/landingpage.png"
import FacebookClone from "../../../public/imgProjects/facebook-clone.png"
import Pesquise from "../../../public/imgProjects/blog.png"
import Tutilab from "../../../public/imgProjects/tutilab.png"
import AppRn from "../../../public/imgProjects/app-rn.png"
import AppMake from "../../../public/imgProjects/makeyourburguer.png"
import AppQRcode from "../../../public/imgProjects/qrcode.png"
import AppCloneInst from "../../../public/imgProjects/instaland.png"

const CardProject = () => {
    return (
        <div className='flex flex-wrap gap-5 justify-center'>
            <div className='border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-sm transition-transform hover:scale-105'>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Lista de Presença</h2>
                    <p className='text-gray-600 text-justify'>Projeto lista de presença, desenvolvido para adicionar uma lista de pessoas juntamente com o horário em que foram adicionadas.</p>
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
                    <p className='text-gray-600 text-justify'>Projeto fullstack desenvolvido com a intenção de adicionar cadastro de pessoas de forma rápida e prática.</p>
                </div>
                <div className='flex  gap-2 p-2 mb-4'>
                    <div className='bg-green-500 text-white rounded-full py-1 px-2 text-xs'>Online</div>
                    <div className='bg-blue-500 text-white rounded-full py-1 px-2 text-xs'>ReactJs</div>
                    <div className='bg-green-700 text-white rounded-full py-1 px-2 text-xs'>NodeJs</div>
                    <div className='bg-purple-500 text-white rounded-full py-1 px-2 text-xs'>Bootstrap</div>
                </div>
                <a href="https://register-clients.vercel.app" className='block hover:opacity-75 transition-opacity duration-300' target='_blank'>
                    <img src={ResgitroPage} alt="Imagem do Projeto" className='w-full h-auto rounded-lg' />
                </a>
            </div>
            <div className='border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-sm transition-transform hover:scale-105'>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Landing Page LB Serviços</h2>
                    <p className='text-gray-600 text-justify'>Landing page desenvolvida para o cliente LB Serviços, utilizando apenas HTML e CSS.</p>
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
                    <h2 className='text-lg font-semibold mb-2'>Desafio TutiLab</h2>
                    <p className='text-gray-600 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='flex  gap-2 p-2 mb-4'>
                    <div className='bg-green-500 text-white rounded-full py-1 px-2 text-xs'>Online</div>
                    <div className='bg-orange-500 text-white rounded-full py-1 px-2 text-xs'>Html</div>
                    <div className='bg-blue-500 text-white rounded-full py-1 px-2 text-xs'>CSS</div>
                    <div className='bg-yellow-600 text-white rounded-full py-1 px-2 text-xs'>JavaScript</div>
                </div>
                <a href="https://tutilab-landingpage.vercel.app" className='block hover:opacity-75 transition-opacity duration-300' target='_blank'>
                    <img src={Tutilab} alt="Imagem do Projeto" className='w-full h-auto rounded-lg' />
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
            <div className='border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-sm transition-transform hover:scale-105'>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold mb-2'>App React Native - Financeiro</h2>
                    <p className='text-gray-600 text-justify'>Para auxilio de contas em geral. obs: ainda está bem no inicio dando possibilidades de mais implementações!</p>
                </div>
                <div className='flex  gap-2 p-2 mb-4'>
                    <div className='bg-red-500 text-white rounded-full py-1 px-2 text-xs'>Offline</div>
                    <div className='bg-purple-600 text-white rounded-full py-1 px-2 text-xs'>React Native</div>
                    <div className='bg-yellow-600 text-white rounded-full py-1 px-2 text-xs'>JavaScript</div>
                </div>
                <a href="https://github.com/HelyssonBN3040/appAxUber" className='flex hover:opacity-75 transition-opacity duration-300 justify-center' target='_blank'>
                    <img src={AppRn} alt="Imagem do Projeto" className='w-20 h-auto rounded-lg' />
                </a>
            </div>
            <div className='border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-sm transition-transform hover:scale-105'>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Make Your Burger</h2>
                    <p className='text-gray-600 text-justify'>Projeto monte seu hamburguer, desenvolvido com VueJs e utilizando json-server como API local.</p>
                </div>
                <div className='flex  gap-2 p-2 mb-4'>
                    <div className='bg-green-500 text-white rounded-full py-1 px-2 text-xs'>Online/Offline</div>
                    <div className='bg-green-700 text-white rounded-full py-1 px-2 text-xs'>Vue</div>
                    <div className='bg-blue-500 text-white rounded-full py-1 px-2 text-xs'>Css</div>
                    <div className='bg-yellow-600 text-white rounded-full py-1 px-2 text-xs'>JavaScript</div>
                </div>
                <a href="https://github.com/HelyssonBN3040/Make-Your-Burger" className='block hover:opacity-75 transition-opacity duration-300' target='_blank'>
                    <img src={AppMake} alt="Imagem do Projeto" className='w-full h-auto rounded-lg' />
                </a>
            </div>
            <div className='border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-sm transition-transform hover:scale-105'>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Gerador de QR code</h2>
                    <p className='text-gray-600 text-justify'>Site gerador de QR code rapido e prático.</p>
                </div>
                <div className='flex  gap-2 p-2 mb-4'>
                    <div className='bg-green-500 text-white rounded-full py-1 px-2 text-xs'>Online</div>
                    <div className='bg-orange-500 text-white rounded-full py-1 px-2 text-xs'>Html</div>
                    <div className='bg-blue-500 text-white rounded-full py-1 px-2 text-xs'>Css</div>
                    <div className='bg-yellow-600 text-white rounded-full py-1 px-2 text-xs'>JavaScript</div>
                </div>
                <a href="https://projeto-qr-code-tau.vercel.app" className='block hover:opacity-75 transition-opacity duration-300' target='_blank'>
                    <img src={AppQRcode} alt="Imagem do Projeto" className='w-full h-auto rounded-lg' />
                </a>
            </div>
            <div className='border border-gray-200 rounded-lg overflow-hidden shadow-md max-w-sm transition-transform hover:scale-105'>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Landing Page Clone Instagram</h2>
                    <p className='text-gray-600 text-justify'>Site gerador de QR code rapido e prático.</p>
                </div>
                <div className='flex  gap-2 p-2 mb-4'>
                    <div className='bg-green-500 text-white rounded-full py-1 px-2 text-xs'>Online</div>
                    <div className='bg-orange-500 text-white rounded-full py-1 px-2 text-xs'>Html</div>
                    <div className='bg-blue-500 text-white rounded-full py-1 px-2 text-xs'>Css</div>
                    <div className='bg-yellow-600 text-white rounded-full py-1 px-2 text-xs'>JavaScript</div>
                </div>
                <a href="https://pagina-inicialinstagram.vercel.app" className='block hover:opacity-75 transition-opacity duration-300' target='_blank'>
                    <img src={AppCloneInst} alt="Imagem do Projeto" className='w-full h-auto rounded-lg' />
                </a>
            </div>
        </div>
    )
}

export default CardProject
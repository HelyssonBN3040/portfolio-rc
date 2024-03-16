import React from 'react'

const CardProject = () => {
    return (
        <div className='flex flex-wrap gap-5 '>
            <div className='border flex gap-3 flex-col w-72 p-2'> {/*<-- Div criada para separar os cards dos Projetos.*/}
                <div className='flex flex-col gap-3'>
                    <h1>Move.it</h1>
                    <p> Texto de exemplo para explicar sobre a aplicação!
                        Texto de exemplo para explicar sobre a aplicação!
                        Texto de exemplo para explicar sobre a aplicação!
                        Texto de exemplo para explicar sobre a aplicação!
                    </p>
                </div>
                <div className='flex gap-2 flex-wrap'>
                    <div><p>Online</p></div>
                    <div><p>React</p></div>
                </div>
                <a href="">
                    <img src="" alt="Imagem do Projeto" />
                </a>
            </div>


        </div>
    )
}

export default CardProject
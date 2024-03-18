import React from 'react';
import LogoGit from "../../../public/logo-github.png";
import LogoLink from "../../../public/logo-link.png";

function Footer() {
    return (
        <footer className=" text-white my-10 flex flex-col gap-5 text-center">
            <div className="flex  flex-row justify-center gap-10">
                <div className='flex  flex-row gap-3'>
                    <a href="https://github.com/HelyssonBN3040" className="w-6 hover:scale-125 transition-all"><img src={LogoGit} alt="" /></a>
                    <a href="https://www.linkedin.com/in/helysson-nascimento-085a122b4/" className="w-6 hover:scale-125 transition-all"><img src={LogoLink} alt="" /></a>
                </div>
            </div>
            <p className="text-xs">Copyright &copy; Helysson Cavalcante - 2024</p>
        </footer>
    );
}

export default Footer;
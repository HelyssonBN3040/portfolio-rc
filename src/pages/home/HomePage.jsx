import "./HomePage.css"
import LogoHtml from "../../../public/html-logo.png";
import LogoCss from "../../../public/css-logo.png";
import LogoJs from "../../../public/js-logo.png";
import LogoPy from "../../../public/py-logo.png";
import LogoReact from "../../../public/react-logo.png";
import LogoTailwind from "../../../public/tailwind-logo.png";
import Face from "../../../public/image-face.png"
import Navbar from '../../components/navbar/TransitionNav';
import LogoGit from "../../../public/logo-github.png";
import LogoLink from "../../../public/logo-link.png";


const HomePage = () => {
  return (
    <>
      <div className='m-5 duration-75'>
        <Navbar />
      </div>
      <div className=" flex flex-col  flex-wrap  items-center">
        <div className="flex flex-row items-center my-16 gap-10 flex-wrap justify-center m-3">
          <div className='flex flex-col gap-5'>
            <div className='flex rounded-3xl w-36 h-10 items-center justify-center btn-header'>
              <p className="font-header">👋 Saudações!</p>
            </div>
            <strong className='text-4xl'>Helysson Cavalcante</strong>
            <p>Front-end developer</p>
            <div className="flex  flex-row gap-4">
              <a href="https://github.com/HelyssonBN3040" className="w-6 hover:scale-125 transition-all"><img src={LogoGit} alt="" /></a>
              <a href="https://www.linkedin.com/in/helysson-nascimento-085a122b4/" className="w-6 hover:scale-125 transition-all"><img src={LogoLink} alt="" /></a>
            </div>
          </div>
          <div >
            <img className='w-full' src={Face} alt="" />
          </div>
        </div>

        <div className='flex gap-1 rounded-3xl bg-slate-950 w-48 h-10 items-center justify-center btn-header'>
          <p className="font-header">👨‍💻 Skills - Experiências</p>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-6 my-10">
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
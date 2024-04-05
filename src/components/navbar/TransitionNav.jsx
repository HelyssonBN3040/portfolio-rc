import { useState, useEffect } from 'react';
import { MagicMotion } from 'react-magic-motion';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({ name: '', avatar: '' });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/helyssonbn3040');
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url
      });
    }
    fetchData();
  }, []);

  return (
    <MagicMotion>
      <nav className='my-5 fixedNavbar'>
        <div className="max-w-7xl m-auto" >
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Link to="/" className="text-white">
                  <img src={user.avatar} className="w-11 rounded-full" alt="" />
                </Link>
              </div>
              <div className="hidden md:block ml-4 duration-300 transition">
                <div className="flex items-center space-x-4 duration-75 transition">
                  <Link
                    to="/"
                    className="underline decoration-1 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                  >
                    Home
                  </Link>
                  <Link
                    to="/projects"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                  >
                    Projects
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                  >
                    Sobre Mim
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                  >
                    Contato
                  </Link>
                  <Link
                    to="/certificates"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                  >
                    Certificados
                  </Link>
                  <a href="https://drive.google.com/file/d/1Qxi5ekINuGq6UhctYHARPyMJEqIzQr-0/view?usp=sharing" 
                    target="_blank" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Download CV</a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden duration-75 transition">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex  items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-300"
              >
                <svg
                  className={`h-6 w-6 transform duration-300 ${isOpen ? 'rotate-180 duration-75' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div
              className={`transition-all duration-75 transition ${isOpen ? 'block transform translate-y-0 duration-300 transition' : 'hidden transform -translate-y-full duration-300 transition'
                }`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 duration-300">
                <Link
                  to="/"
                  className="underline decoration-1 text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sobre Mim
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contato
                </Link>
                <Link
                  to="/certificates"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Certificados
                </Link>
                <a href="https://drive.google.com/file/d/1Qxi5ekINuGq6UhctYHARPyMJEqIzQr-0/view?usp=sharing" target="_blank"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Download CV</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </MagicMotion>
  );
}

export default Navbar;
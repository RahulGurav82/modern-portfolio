import React, {useState} from 'react'
import Navbar from './Navbar';
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = () => {
const [navOpen, setNavOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center
    z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 
    '>
      <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center 
      md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]
      '>
          <h1>
            <a href="#">
              <img src="/images/logo.svg"
              height={40}
              width={40}
              alt="Rahul Gurav" />
            </a>
          </h1>

          <div className='relative md:justify-self-center'>
            <button
              className="menu-btn md:hidden"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <span className="material-symbols-rounded">
                {navOpen ? <IoClose /> : <IoMdMenu />}
              </span>
            </button>
            
            <Navbar navOpen={navOpen}/>
          </div>

          <a
          href="#contact"
          className='btn btn-secondary max-md:hidden 
          md:justify-self-end'
          >
            contact
          </a>
      </div>
    </header>
  )
}

export default Header
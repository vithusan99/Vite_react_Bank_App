import React, { useState } from 'react'

import { close, logo, menu } from '../assets'; 
import { navLinks } from '../constants';


function Navbar() {
  const [toggle,setToggle]=useState(false);

  return (
    <nav className='w-full flex py-3 sm:py-6 justify-between items-center navbar'>
      <img src={logo} className='w-[124px] h-[32px]' alt="logo" />

      <ul className=' list-none sm:flex gap-10 hidden justify-end items-center flex-1'>
        {
          navLinks.map((nav,index)=>(

            <li key={nav.id} className=' font-poppins font-normal cursor-pointer text-[16px] text-white '>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))
        }
      </ul>
      <div className=" sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle? close : menu} className='w-[23px] h-[23px] object-contain' 
        onClick={()=>setToggle((prev)=>!prev)} alt={toggle? "close" : "menu"}  />

        <div className={`${toggle? 'flex':'hidden'} p-3 bg-black-gradient absolute 
        top-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>
           <ul className=' list-none flex flex-col gap-4 justify-end items-center flex-1'>
        {
          navLinks.map((nav,index)=>(
            <li key={nav.id} className='font-poppins font-normal cursor-pointer text-[16px] text-white '>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))
        }
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
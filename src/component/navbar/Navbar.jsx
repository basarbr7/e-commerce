import React, { useState } from 'react'
import Container from '../../layer/Container'
import { Link, NavLink } from 'react-router-dom'
import Image from '../../layer/Image';
import logo from '../../assets/logo.png'
import { LuShoppingCart } from 'react-icons/lu';
import { FiSearch } from 'react-icons/fi';
import MenuData from '../../MenuData';
import { CgProfile } from 'react-icons/cg';
import { RxCross2 } from 'react-icons/rx';
import Account from './Account';


const Navbar = () => {
  let menuItem = MenuData;

  let [show, setShow]= useState(true)

  return (
     <nav className='font-semibold text-sm bg-0 py-1 select-none border-b border-[1px] border-6'>
        <Container className='flex justify-between'>
          <div className='flex items-center gap-14 '>
            <Link to='/'>
              <Image src={logo} alt="logo" />
            </Link>
            <ul className= {`items-center gap-6 h-20 text-sm font-semibold transition-all duration-500 ${show?"flex":"hidden"}`}>
              {menuItem.map((item, index)=>(
                <li key={index}>
                  <NavLink to={item.path} className='py-7'>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            <div className={`w-[1080px] h-20 items-center text-sm transition-all duration-500 ${show?"hidden":"flex"}`}>
              <input type="text" placeholder='Search entiere store here...' className='w-full h-[60px] py-3 bg-1 rounded-[31px] outline-none border-0 px-8 placeholder:text-5 ' />
            </div>
          </div>

          <div className='flex items-center gap-6 ' >
            <div className='select-none cursor-pointer transition-all duration-500' onClick={()=>setShow(!show)}>
              <RxCross2 className= {`text-xl ${show?"hidden":"block"}`} />
              <FiSearch  className={`text-xl ${show?"block":"hidden"}`} />
            </div>
            <LuShoppingCart  className='scale-x-[-1] text-2xl' />

            <div className='relative group w-9 h-9 rounded-full flex items-center justify-center'>
              <CgProfile className='text-4xl cursor-pointer' />

              <div className='absolute top-[140%] right-0 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50'>
                <Account />
              </div>
            </div>
          </div>

        </Container>
     </nav>
  )
}

export default Navbar
import React, { useState } from 'react'
import Container from '../../layer/Container'
import { Link, NavLink } from 'react-router-dom'
import Image from '../../layer/Image';
import logo from '../../assets/logo.png'
import { LuShoppingCart } from 'react-icons/lu';
import { FiSearch } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { RxCross2 } from 'react-icons/rx';
import Account from './Account';
import { useSelector } from 'react-redux';

let menuItem = [
    {id: 0, name: "Home",  path: "/", status: "active" },
    { id: 1, name: "Shop", path: "shop", status: "active" },
    { id: 2, name: "About", path: "about", status: "active" },
    { id: 3, name: "Contact", path: "contact", status: "active"},
  ];

const Navbar = () => {
  const totalItems = useSelector(state => state.cart.totalQuantity);
  let [show, setShow]= useState(true)

  return (
     <nav className='font-semibold text-sm bg-0 py-1 select-none border-b border-[1px] border-6'>
        <Container className='flex justify-between'>
          <div className='w-full flex items-center  '>
            <Link to='/'>
              <Image src={logo} alt="logo" className="object-cover " />
            </Link>
            <ul className= {`w-full flex justify-center items-center gap-10 h-20 text-sm font-semibold transition-all duration-500 ${show?"flex":"hidden"}`}>
              {menuItem.map((item, index)=>(
                <li key={index}>
                  <NavLink to={item.path} className='py-7'>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            <form className={`w-full h-20 items-center text-sm transition-all duration-500 ml-5 ${show?"hidden":"flex"}`}>
              <input type="text" placeholder='Search entiere store here...' className='w-[95%] h-[60px] py-3 bg-1 rounded-[31px] outline-none border-0 px-8 placeholder:text-5 ' />
            </form>
          </div>

          <div className='flex items-center gap-6 ' >
            <div className='select-none cursor-pointer transition-all duration-500' onClick={()=>setShow(!show)}>
              <RxCross2 className= {`text-xl ${show?"hidden":"block"}`} />
              <FiSearch  className={`text-xl ${show?"block":"hidden"}`} />
            </div>

              {/* cart */}
            <Link to="/cart" className="relative cursor-pointer">
              <LuShoppingCart className="scale-x-[-1] text-2xl" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

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
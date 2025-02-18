import React from 'react'
import Container from '../../layer/Container'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  let menuItem = ["Laptops", "Desktop PCs", "Networking Devices", "Printers & Scanners", "PC Parts", "All Other Products", "Repairs"];

  return (
     <nav className='font-semibold text-sm bg-amber-100 py-5 flex justify-center'>
        <Container>
          <ul className='flex gap-4'>
            {menuItem.map((item, index)=>(
              <li key={index}>
                <NavLink  className='bg-amber-300 px-5 py-3 rounded-2xl'>
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </Container>
     </nav>
  )
}

export default Navbar
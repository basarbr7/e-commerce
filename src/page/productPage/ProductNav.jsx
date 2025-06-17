import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../layer/Container';

const ProductNav = () => {
  const productMenu = [
    { id: 1, name: "About Product", path: "" },
    { id: 2, name: "Details", path: "details" },
    { id: 3, name: "Specs", path: "specs" }
  ];

  const activeStyle = 'text-blue-600 border-b-2 border-blue-600';
  const inactiveStyle = 'text-gray-600 hover:text-blue-500';

  return (
    <div className='border-b border-gray-200 py-5'>
      <Container>
        <ul className='flex gap-8'>
          {productMenu.map((item) => (
            <li key={item.id}>
              <NavLink 
              to={item.path} 
              end  
              className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)} >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default ProductNav;

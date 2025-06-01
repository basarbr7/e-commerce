import React from 'react'
import Navbar from './component/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Header from './component/header/Header'


const Root = () => {
  return (
    <>
      <div className='allPage'>
        <Header/>
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default Root
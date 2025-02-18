import React from 'react'
import Navbar from './component/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'


const Root = () => {
  return (
    <>
      <div className='allPage'>
        <Header/>
        <Navbar/>
        {/* <Outlet/>
        <Footer/> */}
      </div>
    </>
  )
}

export default Root
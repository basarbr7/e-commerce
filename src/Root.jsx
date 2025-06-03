import React from 'react'
import Navbar from './component/navbar/Navbar'
import Header from './component/header/Header'
import { Outlet } from 'react-router-dom'


const Root = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default Root
import React, { useEffect } from 'react'
import Navbar from './component/navbar/Navbar'
import Header from './component/header/Header'
import { Outlet } from 'react-router-dom'
import { setProducts } from './redux/ProductSlice'
import dbData from './db.json';
import { useDispatch } from 'react-redux'
import Footer from './component/footer/Footer'


const Root = () => {
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(dbData.Products));
  }, [dispatch]);

  return (
    <>
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Root
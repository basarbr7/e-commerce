import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/homePage/Home'
import ProductList from './page/productPage/ProductList'
import CustomBuildAll from './page/homePage/customBuild/CustomBuildAll'
import Root from './Root'
import ProductDetails from './page/productPage/ProductDetails'

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Root/>}>
          <Route index element={<Home/>} />
          <Route path='productList' element={<ProductList/>}/>
          <Route path='customProduct' element={<CustomBuildAll/>}/>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
  )
}

export default App
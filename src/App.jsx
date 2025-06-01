import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Root from './Root'
import Home from './page/homePage/Home'
import ProductList from './page/productPage/ProductList'

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Root/>}>
          <Route index element={<Home/>} />
          <Route path='/productList' element={<ProductList/>}/>
        </Route>
      </Routes>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/homePage/Home'
import ProductList from './page/productPage/ProductList'
import CustomBuildAll from './page/homePage/customBuild/CustomBuildAll'
import Root from './Root'
import ProductDetails from './page/productPage/ProductDetails'
import { Provider } from 'react-redux'
import store from './redux/store'
import Cart from './page/Cart'


const App = () => {
  return (
      <Provider store={store} >
        <Routes>
          <Route path='/' element={<Root/>}>
            <Route index element={<Home/>} />
            <Route path='cart' element={<Cart/>} />
            <Route path='productList' element={<ProductList/>}/>
            <Route path='customProduct' element={<CustomBuildAll/>}/>
            <Route path="productdetails/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Provider>
  )
}

export default App
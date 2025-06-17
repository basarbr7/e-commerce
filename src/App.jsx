import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Root from './Root'
import { Provider } from 'react-redux'
import store from './redux/store'
import Cart from './page/cart/Cart'
import Home from './page/homePage/Home'
import ProductList from './page/productPage/ProductList'
import CustomBuildAll from './page/homePage/customBuild/CustomBuildAll'
import ProductDetails from './page/productPage/ProductDetails'
import AboutProduct from './page/productPage/AboutProduct'
import Details from './page/productPage/Details'
import Specs from './page/productPage/Specs'


const App = () => {
  return (
      <Provider store={store} >
        <Routes>
          <Route path='/' element={<Root/>}>
            <Route index element={<Home/>} />
            <Route path='cart' element={<Cart/>} />
            <Route path='productList' element={<ProductList/>}/>
            <Route path='customProduct' element={<CustomBuildAll/>}/>
            <Route path="productdetails/:id" element={<ProductDetails />}>
              <Route index element={<AboutProduct />} />
              <Route path='details' element={<Details />} />
              <Route path='specs' element={<Specs />} />
            </Route>
            
          </Route>
        </Routes>
      </Provider>
  )
}

export default App
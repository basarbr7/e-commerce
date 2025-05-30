import React from 'react'


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './page/homePage/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}></Route>
    </Route>
  )
);



const App = () => {
  return (
    <div className='font-Poppins'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App
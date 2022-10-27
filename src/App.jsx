import React from 'react'
import NavigationBar from './Component/Header/NavigationBar'
import NotFound from './Component/Pages/Error/NotFound'
import Cart from './Component/Pages/Cart/Cart'
import Home from './Component/Pages/Home/Home'
import ProductDetails from './Component/Pages/Product/ProductDetails'

import {Routes, Route} from 'react-router-dom'

function App() {

  
  return (
    <div>
      <NavigationBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
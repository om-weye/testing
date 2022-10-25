import React from 'react'
import NavigationBar from './component/Header/NavigationBar'
import NotFound from './component/pages/Error/NotFound'
import Cart from './Component/Pages/Cart/Cart'
import Home from './component/pages/Home/Home'
import ProductDetails from './component/Pages/Product/ProductDetails'

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
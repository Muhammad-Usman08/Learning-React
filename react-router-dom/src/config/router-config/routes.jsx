import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screens/home/Home'
import About from '../../screens/about/About'
import Contact from '../../screens/contact/Contact'
import Navbar from '../../component/Navbar'
import Product from '../../screens/product/Product'
import Single from '../../screens/single/Single'

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='product' element={<Product />} />
          <Route path='single/:id' element={<Single />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default Routers
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import MasterPage from './components/MasterPage'
import Product from './components/Product'
import ProductDetails from './components/ProductDetails'

export default function Root() {
  return (
    <>
        <Routes>
            <Route path='/' element={<MasterPage />}>
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='login' element={<Login />} />
                <Route path='products' element={<Product />} />
                <Route path='products/search' element={<Product />} />
                <Route path='product-details/:id/:name' element={<ProductDetails />} />
            </Route>
        </Routes>
    </>
  )
}

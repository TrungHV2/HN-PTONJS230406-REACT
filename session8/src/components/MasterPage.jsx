import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { Outlet } from 'react-router-dom'

export default function MasterPage() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

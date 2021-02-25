import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../NavBar/Navbar'

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

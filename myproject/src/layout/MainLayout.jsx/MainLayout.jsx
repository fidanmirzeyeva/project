import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
<>  
<Nav></Nav>
<Outlet></Outlet>
<Footer></Footer>
</>
  )
}

export default MainLayout
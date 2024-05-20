import React from 'react'
import { Outlet } from 'react-router-dom'
import NavItems from './components/NavItems'

const Layout = () => {
  return (
    <div>
      <NavItems/>
      <Outlet/>
    </div>
  )
}

export default Layout

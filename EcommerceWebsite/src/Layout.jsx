import React from 'react'
import { Outlet } from 'react-router-dom'
import NavItems from './components/NavItems'
//outlet is from react router dom

const Layout = () => {
  return (
    <div>
      <NavItems/>
      <Outlet/>
    </div>
  )
}

export default Layout

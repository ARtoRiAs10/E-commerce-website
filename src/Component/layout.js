import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './navbar';

const Layout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        {/* <FooterSection/> */}
    </>
  )
}

export default Layout;
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BottomBar from '../components/BottomBar';
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <BottomBar/>
    </>
  );
}

export default Layout;
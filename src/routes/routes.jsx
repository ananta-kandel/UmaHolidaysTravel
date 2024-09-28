import React from 'react'
import AboutUsPage from '../pages/AboutUs'
import App from '../App';
import {
    Routes,
    Route,
  } from "react-router-dom";
import Thailand from '../components/Thailand';
const Routess = () => {
  return (
    <Routes>
        <Route path="/"  element={<App /> }/> 
        <Route path="/about"  element={<AboutUsPage /> }/> 
        <Route path='/thailand' element={<Thailand />} />
    </Routes>
  )
}

export default Routess
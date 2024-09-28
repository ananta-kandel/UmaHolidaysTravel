import React from 'react'
import AboutUsPage from '../pages/AboutUs'
import App from '../App';
import {
    MemoryRouter,
    Routes,
    Route,
  } from "react-router-dom";
const Routess = () => {
  return (
    <Routes>
        <Route path="/"  element={<App /> }/> 
        <Route path="/about"  element={<AboutUsPage /> }/> 
    </Routes>
  )
}

export default Routess
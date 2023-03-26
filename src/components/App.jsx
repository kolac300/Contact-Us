
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Features from '../pages/Features'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Shop from '../pages/Shop'
import Navbar from './Navbar/Navbar'


export default function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  )
}




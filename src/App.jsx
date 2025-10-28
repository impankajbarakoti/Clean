import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomeMain from './Components/HomeMain'
import Footer from './Components/Footer'
import Abouty from './Pages/Abouty'
import Contacty from './Pages/Contacty'
import BlogHeader from './Pages/BlogHeader'
import BlogDetailHeader from './Pages/BlogDetailHeader'

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<Abouty />} />
        <Route path="/contact" element={<Contacty />} />
        <Route path="/blogs" element={<BlogHeader />} />
        <Route path="/blog/:id" element={<BlogDetailHeader />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App

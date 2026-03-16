import React from 'react'
import Navbar from './components/common/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import Programs from './pages/Programs'
import HowItWorks from './pages/HowItWorks'
import Testimonial from './pages/Testimonial'
import About from './pages/About'
 


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/works" element={<HowItWorks />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>

   

  )
}

export default App
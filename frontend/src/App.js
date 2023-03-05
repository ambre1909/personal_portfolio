import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home2 from './pages/Home2'
import Navbar from './pages/Navbar'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'

export default function App() {
  return (<>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home2></Home2>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/services' element={<Services></Services>} />
        <Route path='/portfolio' element={<Portfolio></Portfolio>} />
        {/* <Route path='/contact-info' element={<ContactInfo></ContactInfo>} /> */}
        {/* <Route path='/contact-info' element={<DummyNavbar></DummyNavbar>} /> */}

      </Routes>
    </BrowserRouter>
  </>
  )
}

import React from 'react'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import SearchItems from './components/SearchItems';
import './styles/style.css'
import Contact from './components/Contact';
import Inspiration from './components/Inspiration';
import Cart from './components/Cart';

function App() {
  return (

    <div>
        <Router>
      <div>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={    <Test/>} />
          <Route path="/search" element={    <SearchItems/>} />
          <Route path="/contact" element={ <Contact/>} />
          <Route path="/about" element={    <Inspiration/>} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </Router>

    </div>
    
  )
}

export default App
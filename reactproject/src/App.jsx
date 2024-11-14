import React from 'react'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import SearchItems from './components/SearchItems';
import Inspiration from './components/Inspiration';
import Login from './components/Login';
import './styles/style.css';




function App() {
  return (

    <div>
        <Router>
      <div>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={    <Login/>} />
          <Route path="/search" element={    <SearchItems/>} />
          <Route path="/about" element={    <Inspiration/>} />
        </Routes>
      </div>
    </Router>

    </div>
    
  )
}

export default App
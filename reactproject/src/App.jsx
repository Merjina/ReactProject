import React from 'react'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import SearchItems from './components/SearchItems';
import Inspiration from './components/Inspiration';
<<<<<<< HEAD
import Login from './components/Login';
=======
>>>>>>> 1d4b6f175ad7e79d44b30019766118219ecf5d80
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
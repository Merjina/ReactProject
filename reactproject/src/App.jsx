import React from 'react'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import SearchItems from './components/SearchItems';
<<<<<<< HEAD
import Inspiration from './components/Inspiration';

=======
import './styles/style.css'
>>>>>>> 709ca6022c69854ce6290f1eeac95044996b056b



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
          <Route path="/about" element={    <Inspiration/>} />
        </Routes>
      </div>
    </Router>

    </div>
    
  )
}

export default App
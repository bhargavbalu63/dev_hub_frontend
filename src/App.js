import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login'
import Register from './Register';
import Myprofile from './Myprofile';
function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Routes>


      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/myprofile" element={<Myprofile />} />
     </Routes>
     
     </BrowserRouter>
    </div>
  )
}

export default App;

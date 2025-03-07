import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FirstHome from './pages/FirstHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home1" element={<FirstHome />} />
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;


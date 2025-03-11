import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FirstHome from './pages/FirstHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLogin from './pages/MainLogin';
import DiaryWrite from './component/DiaryWrite';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainLogin />} />
          <Route path="/first-home" element={<FirstHome />} />
          <Route path='/main' element={<MainLogin />} />
          <Route path='/write' element={<DiaryWrite />} />
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;


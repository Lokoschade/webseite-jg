import React from 'react'
import { Navbar, Vorstellung, Problem, Ziele, Stimmen, Footer, Break, Impressum, ImpHeader, Datenschutz, DatenHeader } from './components';
import { Route, Routes } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Routes>
          <Route path="" element={<Vorstellung />}/>
          <Route path="/datenschutz" element={<DatenHeader/>}/>
          <Route path="/impressum" element={<ImpHeader/>}/>
        </Routes>
      </div>
      <Routes>
        <Route path="" element={<div><Break /><Problem /><Ziele /><Stimmen /></div>}/>
        <Route path="/datenschutz" element={<Datenschutz/>}/>
        <Route path="/impressum" element={<Impressum/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
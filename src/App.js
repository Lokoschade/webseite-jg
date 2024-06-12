import React from 'react'
import { Navbar, Vorstellung, Problem, Ziele, Stimmen, Footer, Break, Impressum, ImpHeader, Datenschutz, DatenHeader, Wahl, WahlHeader } from './components';
import { Route, Routes } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
          <Switch>
            <Routes>
              <Route path="" element={<Vorstellung />}/>
              <Route path="/datenschutz" element={<DatenHeader/>}/>
              <Route path="/impressum" element={<ImpHeader/>}/>
              <Route path='/wahlanleitung' element={<WahlHeader/>}/>
            </Routes>
          </Switch>
      </div>
      <Routes>
        <Switch>
          <Route path="" element={<div><Break /><Problem /><Ziele /><Stimmen /></div>}/>
          <Route path="/datenschutz" element={<Datenschutz/>}/>
          <Route path="/impressum" element={<Impressum/>}/>
          <Route path="/wahlanleitung" element={<Wahl/>}/>
        </Switch>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import "./App.css";
import Home from './component/Home';
import Navbar from './component/Navbar';
import JoinUS from './component/JoinUS';
import Team from './component/Team';
import Mediaphoto from './component/Mediaphoto';
import Mediavideo from './component/Mediavideo';
import Ourstory from './component/Ourstory';
import Donate from './component/Donate';
import Footer from './component/Footer';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
  
export default function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/> 
          <Routes>
            <Route exact path="/" element={<Home/>}/> 
            <Route exact path="/Team" element={<Team/>}/>
            <Route exact path="/Ourstory" element={<Ourstory/>}/>
            <Route exact path="/Mediaphoto" element={<Mediaphoto/>}/>
            <Route exact path="/Mediavideo" element={<Mediavideo/>}/>
            <Route exact path="/Donate" element={<Donate/>}/>
            <Route exact path="/JoinUS" element={<JoinUS/>}/>
          </Routes>
        <Footer/>
      </Router>
    </div>    
  )
}

import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode , setMode] = useState('light');
  //  const removeBackground=()=>{
  //     document.body.classList.remove('bg-light')
  //     document.body.classList.remove('bg-dark')
  //     document.body.classList.remove('bg-success')
  //     document.body.classList.remove('bg-warning')
  //     document.body.classList.remove('bg-danger')
  //     document.body.classList.remove('bg-primary')
  //   }
  const toggleMode = ()=>{
    // removeBackground();
    // console.log("suraj");
       if(mode==='light'){
    //  console.log(receiveClass);
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    // document.body.style.color='white';
  }
  else{
    setMode('light');  
    document.body.style.backgroundColor='white';
    // document.body.style.color='black';
  }
    // document.body.classList.add('bg-' +receiveClass);
 
  }
  
  return (
   <>
      <Router>
        {/* ✅ Navbar is outside Routes */}
        <Navbar title="TechHub" AboutText="About US" mode={mode} toggleMode={toggleMode} />
        
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter this text area" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </Router>
   </>
  );
}

export default App;

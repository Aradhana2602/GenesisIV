import React,{ useState } from 'react';
import './App.css';
import Home from './pages/home';
import Sponsors from './pages/sponsors';
import About from './pages/about';
import Faqs from './pages/faqs';

function App() {
  return (
    <>
      <div className="main">
        <Home />
        <About />
        <Sponsors />
        <Faqs/>
      </div>
    </>
  );
}

export default App;

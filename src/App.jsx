import React,{ useState } from 'react';
import './App.css';
import Home from './pages/home';
import Sponsors from './pages/sponsors';
import About from './pages/about';
import Faqs from './pages/faqs';
import Footer from './components/footer'

function App() {
  return (
    <>
      <div className="main">
        <Home />
        <About />
        <Sponsors />
        <Faqs/>
        <Footer/>
      </div>
    </>
  );
}

export default App;

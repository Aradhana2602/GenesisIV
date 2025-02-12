import React,{ useState } from 'react';
import './App.css';
import Home from './pages/home';
import Sponsors from './pages/sponsors';
import About from './pages/about';
import Faqs from './pages/faqs';
import Footer from './components/footer'
import Memories from './pages/memories';
import Prize from './pages/prize';

function App() {
  return (
    <>
      <div className="main">
        <Home/>
        <About />
        <Prize/>
        <Sponsors />
        <Memories/>
       
        <Faqs/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
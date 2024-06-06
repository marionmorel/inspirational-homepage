import React from 'react';
import Header from './components/Header';
import PreviousImage from './components/PreviousImage';
import NextImage from './components/NextImage';
import Goals from './components/Goals';
import Weather from './components/Weather';
import Quote from './components/Quote'; 
import Footer from './components/Footer';
import BackgroundImage from './components/BackgroundImage';
import './App.css';

function App() {
  return (
    <div>
      <BackgroundImage />
      <Header />
      <div className="app-container">
        <PreviousImage />
        <div className="content-container">
          <Goals />
          <div className="content">
            <div className="left">
              <Weather />
            </div>
            <div className="right">
              <Quote />
            </div>
          </div>
        </div>
        <NextImage />
      </div>
      <Footer />
    </div>
  );
}

export default App;

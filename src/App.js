import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Router from './Components/Router';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;

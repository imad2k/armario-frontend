import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Router from './Components/Router';
import firebase from './Components/firebase';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';



// firebase.firestore().collection('time').add({
//   title: 'Mibbely',
//   location: "Tulum"
// })


function App() {
  return (
    
      <div className='App'>
        <Router />
      </div>
    
  );
}

export default App;

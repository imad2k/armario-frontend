import React from 'react';
import './App.css';
import Router from './Components/Router';





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

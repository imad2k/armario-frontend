import firebase from 'firebase/app';
import 'firebase/storage';




  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyATsA9hTHsL4HofeYUjhGMldJ2xeWbrb_g",
    authDomain: "armario-13847.firebaseapp.com",
    databaseURL: "https://armario-13847.firebaseio.com",
    projectId: "armario-13847",
    storageBucket: "armario-13847.appspot.com",
    messagingSenderId: "959149940281",
    appId: "1:959149940281:web:3db90bb90efc417b3537e8",
    measurementId: "G-7MG4L2EQHJ"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  // the firebase reference to storage
  const storageRef = firebase.storage().ref();
  const storage = firebase.storage();
    
    
    
    export {storage, storageRef, firebase as default};
    

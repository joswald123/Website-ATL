import * as firebase from "firebase/app";
import "firebase/auth";


const config = firebase.initializeApp ({
    apiKey: "AIzaSyCYclhClZiU7BtiUfosQzIeFm4jiwjgT2o",
    authDomain: "atl-renegades.firebaseapp.com",
    databaseURL: "https://atl-renegades.firebaseio.com",
    projectId: "atl-renegades",
    storageBucket: "atl-renegades.appspot.com",
    messagingSenderId: "1051794716808",
    appId: "1:1051794716808:web:6c0ab9ccdf540c9f5a873d",
    measurementId: "G-MJ6PZSEE8L"
  });

  export default config;


// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyCYclhClZiU7BtiUfosQzIeFm4jiwjgT2o",
//     authDomain: "atl-renegades.firebaseapp.com",
//     databaseURL: "https://atl-renegades.firebaseio.com",
//     projectId: "atl-renegades",
//     storageBucket: "atl-renegades.appspot.com",
//     messagingSenderId: "1051794716808",
//     appId: "1:1051794716808:web:6c0ab9ccdf540c9f5a873d",
//     measurementId: "G-MJ6PZSEE8L"
//   };

//   export const config = firebase.initializeApp(firebaseConfig);
//   const baseDb = myFirebase.firestore();
//   export const db = baseDb;
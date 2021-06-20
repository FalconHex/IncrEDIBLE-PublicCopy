import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA90auZXfRQUWsQs07lB3-2rhRRTcy2LUk",
    authDomain: "clone-409fd.firebaseapp.com",
    projectId: "clone-409fd",
    storageBucket: "clone-409fd.appspot.com",
    messagingSenderId: "280361080414",
    appId: "1:280361080414:web:4b654dd280edefe53886cf"
  };

const app =  !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;